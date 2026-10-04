// Embeds and upserts Approved taxonomy entries into Supabase (taxonomy_entries),
// backing the real RAG pipeline behind Debrief. Run via `npm run taxonomy:sync-db`.
// The sync itself (gates, hash skip, reconciliation) lives in
// scripts/lib/sync-taxonomy.mjs, shared with app/api/admin/sync-taxonomy.
//
// Flags (pass after `--`, e.g. `npm run taxonomy:sync-db -- --dry-run`):
//   --dry-run      parse, read current state from Supabase, and report what a
//                  real run would do; no Voyage calls and no writes
//   --file <path>  read a different spreadsheet instead of the default in data/

import { fileURLToPath } from "node:url";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { syncTaxonomy, TaxonomyValidationError } from "./lib/sync-taxonomy.mjs";

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

async function main() {
  requireEnv();

  console.log(`Reading ${SOURCE_PATH}${DRY_RUN ? " (dry run — nothing will be written)" : ""}`);
  const result = await syncTaxonomy({
    sourcePath: SOURCE_PATH,
    supabase: createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY),
    voyageApiKey: VOYAGE_API_KEY,
    dryRun: DRY_RUN,
  });

  if (result.dryRun) {
    if (result.wouldEmbed.length > 0) {
      console.log(`Would embed/upsert with new content:\n  ${result.wouldEmbed.join(", ")}`);
    }
    if (result.wouldDeactivate.length > 0) {
      console.log(`Would deactivate:\n  ${result.wouldDeactivate.join(", ")}`);
    }
    console.log(
      `Dry run summary: ${result.parsed} rows parsed, ${result.activeBefore} currently active in DB — ${result.eligible} sync-eligible (${result.newOrChanged} new/changed, ${result.unchanged} unchanged), ${result.pendingGrounding.length} skipped — flagged pending grounding decision, ${result.keptLiveAsException.length} kept active as exception, ${result.draft} Draft (not synced), ${result.wouldDeactivate.length} would be deactivated.`
    );
    return;
  }

  console.log(
    `Taxonomy sync complete: ${result.eligible} eligible Approved rows — ${result.embedded} newly embedded, ${result.eligible - result.processed} unchanged (skipped), ${result.deactivated.length} deactivated. ${result.pendingGrounding.length} skipped — flagged pending grounding decision, ${result.keptLiveAsException.length} flagged but kept active as an explicit exception (needs founder follow-up).`
  );
}

main().catch((err) => {
  if (err instanceof TaxonomyValidationError) {
    console.error(`${err.message}:\n`);
    for (const problem of err.problems) console.error(`  - ${problem}`);
  } else {
    console.error("Taxonomy sync failed:", err.message);
  }
  process.exit(1);
});
