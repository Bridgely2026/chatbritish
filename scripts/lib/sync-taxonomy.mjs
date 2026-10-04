// Embeds and upserts Approved taxonomy entries into Supabase (taxonomy_entries),
// backing the real RAG pipeline behind Debrief. Shared by
// scripts/sync-taxonomy-db.mjs (runs everything in one go) and
// app/api/admin/sync-taxonomy (runs `limit` rows per call, so repeated calls
// finish the job).
//
// Approved rows whose Grounding Check starts with "Cultural consensus" are
// held back from the live database — see isPendingGrounding. One exception:
// a flagged row that is ALREADY active when the sync starts is left exactly
// as-is (still active, content and embedding untouched) rather than
// deactivated, pending the founder's decision on it. Flagged rows that aren't
// live yet are never added.
//
// Assumes a `taxonomy_entries` table shaped roughly like:
//   norm_id (text, primary key / unique), category, definition, surface_markers,
//   what_it_means, example, good_response, status, content_hash, embedding (vector),
//   active (boolean), updated_at (timestamptz)
// per chat_british_rag_schema.sql (applied separately, not part of this repo).

import { createHash } from "node:crypto";
import { parseTaxonomy, isPendingGrounding } from "./parse-taxonomy.mjs";
import { embedTexts, EMBED_BATCH_SIZE } from "./voyage.mjs";

// Thrown when the spreadsheet fails validation; `problems` lists every
// row-level error so callers can show them all at once.
export class TaxonomyValidationError extends Error {
  constructor(problems) {
    super(`Taxonomy sync failed with ${problems.length} problem(s)`);
    this.problems = problems;
  }
}

function contentHash(entry) {
  const raw = [
    entry.category,
    entry.definition,
    entry.surfaceMarkers,
    entry.whatItMeans,
    entry.example,
    entry.goodResponse,
  ].join("");
  return createHash("sha256").update(raw).digest("hex");
}

const MAX_WRITE_RETRIES = 3;

// Runs a Supabase write (a function returning a query builder's
// { data, error }), retrying up to MAX_WRITE_RETRIES times with a short
// backoff — a transient "fetch failed" once stopped a sync part-way. Both
// writes here (upsert by norm_id, deactivate-by-filter) are idempotent, so
// a retry is always safe. Returns the final { data, error }.
async function withWriteRetry(write, label, log) {
  let result = await write();
  for (let attempt = 1; result.error && attempt <= MAX_WRITE_RETRIES; attempt++) {
    const delayMs = 1000 * 2 ** (attempt - 1);
    log(
      `Supabase write failed for ${label} (${result.error.message}), retrying in ${delayMs / 1000}s (attempt ${attempt}/${MAX_WRITE_RETRIES})...`
    );
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    result = await write();
  }
  return result;
}

function embeddingText(entry) {
  return [
    entry.category,
    entry.definition,
    entry.surfaceMarkers,
    entry.whatItMeans,
    entry.example,
    entry.goodResponse,
  ].join("\n\n");
}

// Runs the sync against `sourcePath`. In a real run, processes at most
// `limit` of the rows that still need work (new/changed content, or
// unchanged but not currently active) and returns { done, remaining };
// unchanged active rows are skipped by content hash, so calling again picks
// up where the last call stopped. Stale rows are only deactivated on the
// call that finishes the job. A dry run reads Supabase but makes no Voyage
// calls and no writes.
export async function syncTaxonomy({
  sourcePath,
  supabase,
  voyageApiKey,
  dryRun = false,
  limit = Infinity,
  log = console.log,
}) {
  const { entries, errors } = parseTaxonomy(sourcePath);
  if (errors.length > 0) {
    throw new TaxonomyValidationError(errors);
  }

  const approvedRows = entries.filter((e) => e.status === "Approved");
  const approved = approvedRows.filter((e) => !isPendingGrounding(e));
  const approvedNormIds = approved.map((e) => e.normId);
  const draftCount = entries.length - approvedRows.length;

  const { data: activeRows, error: activeError } = await supabase
    .from("taxonomy_entries")
    .select("norm_id")
    .eq("active", true);
  if (activeError) {
    throw new Error(`Failed to read existing taxonomy_entries: ${activeError.message}`);
  }
  const activeNormIds = new Set((activeRows ?? []).map((r) => r.norm_id));

  // Evaluated against the state before this sync touches anything, so a row
  // only qualifies for the exception if it was already live.
  const flagged = approvedRows.filter(isPendingGrounding);
  const keptLive = flagged.filter((e) => activeNormIds.has(e.normId));
  const pendingGrounding = flagged.filter((e) => !activeNormIds.has(e.normId));
  const keepActiveNormIds = [...approvedNormIds, ...keptLive.map((e) => e.normId)];

  let existingByNormId = new Map();
  if (approvedNormIds.length > 0) {
    const { data: existingRows, error: fetchError } = await supabase
      .from("taxonomy_entries")
      .select("norm_id, content_hash, active")
      .in("norm_id", approvedNormIds);
    if (fetchError) {
      throw new Error(`Failed to read existing taxonomy_entries: ${fetchError.message}`);
    }
    existingByNormId = new Map((existingRows ?? []).map((r) => [r.norm_id, r]));
  }

  const needsEmbedding = (entry) => existingByNormId.get(entry.normId)?.content_hash !== contentHash(entry);
  const changed = approved.filter(needsEmbedding);
  // Unchanged content but not live (e.g. previously deactivated): no new
  // embedding needed, but it still has to be upserted back to active.
  const pending = approved.filter((e) => needsEmbedding(e) || existingByNormId.get(e.normId)?.active !== true);
  const staleNormIds = [...activeNormIds].filter((id) => !keepActiveNormIds.includes(id));

  const summary = {
    dryRun,
    parsed: entries.length,
    activeBefore: activeNormIds.size,
    eligible: approved.length,
    newOrChanged: changed.length,
    unchanged: approved.length - changed.length,
    pendingGrounding: pendingGrounding.map((e) => e.normId),
    keptLiveAsException: keptLive.map((e) => e.normId),
    draft: draftCount,
  };

  if (pendingGrounding.length > 0) {
    log(
      `${pendingGrounding.length} Approved row(s) skipped — flagged pending grounding decision:\n  ${summary.pendingGrounding.join(", ")}`
    );
  }
  if (keptLive.length > 0) {
    log(
      `${keptLive.length} row(s) flagged pending grounding, but currently live — kept active as an explicit exception, needs founder follow-up:\n  ${summary.keptLiveAsException.join(", ")}`
    );
  }

  if (dryRun) {
    return {
      ...summary,
      wouldEmbed: changed.map((e) => e.normId),
      wouldDeactivate: staleNormIds,
      done: pending.length === 0 && staleNormIds.length === 0,
      remaining: pending.length,
    };
  }

  const chunk = pending.slice(0, limit);
  let embeddedCount = 0;

  // Embed and upsert one batch at a time, so a failure part-way through
  // still keeps the progress made so far.
  for (let i = 0; i < chunk.length; i += EMBED_BATCH_SIZE) {
    const batch = chunk.slice(i, i + EMBED_BATCH_SIZE);
    const toEmbed = batch.filter(needsEmbedding);
    const embeddings = await embedTexts(toEmbed.map(embeddingText), {
      apiKey: voyageApiKey,
      inputType: "document",
      log,
    });
    const embeddingByNormId = new Map(toEmbed.map((e, j) => [e.normId, embeddings[j]]));
    embeddedCount += toEmbed.length;

    for (const entry of batch) {
      const row = {
        norm_id: entry.normId,
        category: entry.category,
        definition: entry.definition,
        surface_markers: entry.surfaceMarkers,
        what_it_means: entry.whatItMeans,
        example: entry.example,
        good_response: entry.goodResponse,
        status: entry.status,
        content_hash: contentHash(entry),
        active: true,
        updated_at: new Date().toISOString(),
      };
      const embedding = embeddingByNormId.get(entry.normId);
      if (embedding) row.embedding = embedding;

      const { error: upsertError } = await withWriteRetry(
        () => supabase.from("taxonomy_entries").upsert(row, { onConflict: "norm_id" }),
        entry.normId,
        log
      );
      if (upsertError) {
        throw new Error(`Failed to upsert ${entry.normId}: ${upsertError.message}`);
      }
    }
    log(`Upserted ${Math.min(i + EMBED_BATCH_SIZE, chunk.length)}/${chunk.length} row(s) this run.`);
  }

  const remaining = pending.length - chunk.length;
  let deactivated = [];

  if (remaining === 0) {
    // Reconciliation: deactivate anything no longer in this run's eligible set
    // (un-approved, flagged pending grounding, or removed from the sheet) —
    // except flagged rows kept live as an explicit exception above. Never
    // hard-delete — debrief_gaps may reference the norm_id.
    // Built fresh per attempt so each retry sends a new request.
    const deactivateStale = () => {
      let query = supabase
        .from("taxonomy_entries")
        .update({ active: false, updated_at: new Date().toISOString() })
        .eq("active", true);
      if (keepActiveNormIds.length > 0) {
        query = query.not("norm_id", "in", `(${keepActiveNormIds.join(",")})`);
      }
      return query.select("norm_id");
    };
    const { data, error: deactivateError } = await withWriteRetry(deactivateStale, "stale-row deactivation", log);
    if (deactivateError) {
      throw new Error(`Failed to deactivate stale taxonomy_entries: ${deactivateError.message}`);
    }
    deactivated = (data ?? []).map((r) => r.norm_id);
  }

  return {
    ...summary,
    processed: chunk.length,
    embedded: embeddedCount,
    deactivated,
    done: remaining === 0,
    remaining,
  };
}
