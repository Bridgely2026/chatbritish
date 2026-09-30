// Embeds and upserts Approved taxonomy entries into Supabase (taxonomy_entries),
// backing the real RAG pipeline behind Debrief. Run via `npm run taxonomy:sync-db`.
//
// Flags (pass after `--`, e.g. `npm run taxonomy:sync-db -- --dry-run`):
//   --dry-run      parse, read current state from Supabase, and report what a
//                  real run would do; no Voyage calls and no writes
//   --file <path>  read a different spreadsheet instead of the default in data/
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
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { parseTaxonomy, isPendingGrounding } from "./lib/parse-taxonomy.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_SOURCE_PATH = path.join(__dirname, "..", "data", "chat_british_taxonomy_template.xlsx");

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const fileFlagIndex = args.indexOf("--file");
const SOURCE_PATH =
  fileFlagIndex === -1 ? DEFAULT_SOURCE_PATH : path.resolve(args[fileFlagIndex + 1] ?? "");

try {
  process.loadEnvFile(path.join(__dirname, "..", ".env.local"));
} catch {
  // .env.local is optional here — env vars may already be set in the shell/CI.
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY;
const VOYAGE_MODEL = "voyage-3";

function requireEnv() {
  const missing = [];
  if (!SUPABASE_URL) missing.push("SUPABASE_URL");
  if (!SUPABASE_SERVICE_ROLE_KEY) missing.push("SUPABASE_SERVICE_ROLE_KEY");
  if (!VOYAGE_API_KEY) missing.push("VOYAGE_API_KEY");
  if (missing.length > 0) {
    console.error(`Missing required env var(s): ${missing.join(", ")}`);
    console.error("Set them in .env.local (or the environment) before running this script.");
    process.exit(1);
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

const MAX_EMBED_RETRIES = 5;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function embed(text, attempt = 1) {
  const res = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${VOYAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: [text], model: VOYAGE_MODEL, input_type: "document" }),
  });

  if (res.status === 429 && attempt <= MAX_EMBED_RETRIES) {
    const retryAfterHeader = res.headers.get("retry-after");
    const delayMs = retryAfterHeader ? Number(retryAfterHeader) * 1000 : Math.min(20000 * attempt, 60000);
    console.log(
      `Rate limited by Voyage, retrying in ${Math.round(delayMs / 1000)}s (attempt ${attempt}/${MAX_EMBED_RETRIES})...`
    );
    await sleep(delayMs);
    return embed(text, attempt + 1);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Voyage embeddings request failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  return data.data[0].embedding;
}

async function main() {
  requireEnv();

  console.log(`Reading ${SOURCE_PATH}${DRY_RUN ? " (dry run — nothing will be written)" : ""}`);
  const { entries, errors } = parseTaxonomy(SOURCE_PATH);
  if (errors.length > 0) {
    console.error(`Taxonomy sync failed with ${errors.length} problem(s):\n`);
    for (const err of errors) console.error(`  - ${err}`);
    process.exit(1);
  }

  const approvedRows = entries.filter((e) => e.status === "Approved");
  const approved = approvedRows.filter((e) => !isPendingGrounding(e));
  const approvedNormIds = approved.map((e) => e.normId);
  const draftCount = entries.length - approvedRows.length;

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { data: activeRows, error: activeError } = await supabase
    .from("taxonomy_entries")
    .select("norm_id, content_hash")
    .eq("active", true);

  if (activeError) {
    console.error("Failed to read existing taxonomy_entries:", activeError.message);
    process.exit(1);
  }
  const activeNormIds = new Set((activeRows ?? []).map((r) => r.norm_id));

  // Evaluated against the state before this sync touches anything, so a row
  // only qualifies for the exception if it was already live.
  const flagged = approvedRows.filter(isPendingGrounding);
  const keptLive = flagged.filter((e) => activeNormIds.has(e.normId));
  const pendingGrounding = flagged.filter((e) => !activeNormIds.has(e.normId));
  const keepActiveNormIds = [...approvedNormIds, ...keptLive.map((e) => e.normId)];

  let existingHashByNormId = new Map();
  if (approvedNormIds.length > 0) {
    const { data: existingRows, error: fetchError } = await supabase
      .from("taxonomy_entries")
      .select("norm_id, content_hash")
      .in("norm_id", approvedNormIds);

    if (fetchError) {
      console.error("Failed to read existing taxonomy_entries:", fetchError.message);
      process.exit(1);
    }
    existingHashByNormId = new Map((existingRows ?? []).map((r) => [r.norm_id, r.content_hash]));
  }

  if (pendingGrounding.length > 0) {
    console.log(
      `${pendingGrounding.length} Approved row(s) skipped — flagged pending grounding decision:\n  ${pendingGrounding.map((e) => e.normId).join(", ")}`
    );
  }
  if (keptLive.length > 0) {
    console.log(
      `${keptLive.length} row(s) flagged pending grounding, but currently live — kept active as an explicit exception, needs founder follow-up:\n  ${keptLive.map((e) => e.normId).join(", ")}`
    );
  }

  if (DRY_RUN) {
    const wouldEmbed = approved.filter((e) => existingHashByNormId.get(e.normId) !== contentHash(e));
    const wouldDeactivate = [...activeNormIds].filter((id) => !keepActiveNormIds.includes(id));
    if (wouldEmbed.length > 0) {
      console.log(`Would embed/upsert with new content:\n  ${wouldEmbed.map((e) => e.normId).join(", ")}`);
    }
    if (wouldDeactivate.length > 0) {
      console.log(`Would deactivate:\n  ${wouldDeactivate.join(", ")}`);
    }
    console.log(
      `Dry run summary: ${entries.length} rows parsed, ${activeNormIds.size} currently active in DB — ${approved.length} sync-eligible (${wouldEmbed.length} new/changed, ${approved.length - wouldEmbed.length} unchanged), ${pendingGrounding.length} skipped — flagged pending grounding decision, ${keptLive.length} kept active as exception, ${draftCount} Draft (not synced), ${wouldDeactivate.length} would be deactivated.`
    );
    return;
  }

  let embeddedCount = 0;
  let skippedCount = 0;

  for (const entry of approved) {
    const hash = contentHash(entry);
    const existingHash = existingHashByNormId.get(entry.normId);
    const needsEmbedding = existingHash !== hash;

    let embedding = null;
    if (needsEmbedding) {
      const text = [
        entry.category,
        entry.definition,
        entry.surfaceMarkers,
        entry.whatItMeans,
        entry.example,
        entry.goodResponse,
      ].join("\n\n");
      try {
        embedding = await embed(text);
      } catch (err) {
        console.error(`Failed to embed ${entry.normId}:`, err.message);
        process.exit(1);
      }
      embeddedCount += 1;
    } else {
      skippedCount += 1;
    }

    const row = {
      norm_id: entry.normId,
      category: entry.category,
      definition: entry.definition,
      surface_markers: entry.surfaceMarkers,
      what_it_means: entry.whatItMeans,
      example: entry.example,
      good_response: entry.goodResponse,
      status: entry.status,
      content_hash: hash,
      active: true,
      updated_at: new Date().toISOString(),
    };
    if (embedding) row.embedding = embedding;

    const { error: upsertError } = await supabase
      .from("taxonomy_entries")
      .upsert(row, { onConflict: "norm_id" });

    if (upsertError) {
      console.error(`Failed to upsert ${entry.normId}:`, upsertError.message);
      process.exit(1);
    }
  }

  // Reconciliation: deactivate anything no longer in this run's eligible set
  // (un-approved, flagged pending grounding, or removed from the sheet) —
  // except flagged rows kept live as an explicit exception above. Never hard-delete — debrief_gaps
  // may reference the norm_id.
  let deactivateQuery = supabase
    .from("taxonomy_entries")
    .update({ active: false, updated_at: new Date().toISOString() })
    .eq("active", true);

  if (keepActiveNormIds.length > 0) {
    deactivateQuery = deactivateQuery.not("norm_id", "in", `(${keepActiveNormIds.join(",")})`);
  }

  const { data: deactivated, error: deactivateError } = await deactivateQuery.select("norm_id");
  if (deactivateError) {
    console.error("Failed to deactivate stale taxonomy_entries:", deactivateError.message);
    process.exit(1);
  }
  const deactivatedCount = deactivated?.length ?? 0;

  console.log(
    `Taxonomy sync complete: ${approved.length} eligible Approved rows processed — ${embeddedCount} newly embedded, ${skippedCount} unchanged (skipped), ${deactivatedCount} deactivated. ${pendingGrounding.length} skipped — flagged pending grounding decision, ${keptLive.length} flagged but kept active as an explicit exception (needs founder follow-up).`
  );
}

main().catch((err) => {
  console.error("Taxonomy sync failed:", err.message);
  process.exit(1);
});
