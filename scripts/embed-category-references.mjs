// Embeds the twelve fixed taxonomy-category reference texts via Voyage and
// writes lib/category-reference-embeddings.json, which app/api/classify-struggle
// compares onboarding "struggle" text against via cosine similarity. The
// texts and embedding logic live in scripts/lib/category-references.mjs, shared with
// app/api/admin/embed-category-refs.
//
// One-time/rarely-rerun: only needs re-running if the reference texts
// change. Run via `npm run embed-category-refs`. The output file contains no
// secrets, just embedding vectors, so it's committed to the repo.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { embedCategoryReferences } from "./lib/category-references.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, "..", "lib", "category-reference-embeddings.json");

try {
  process.loadEnvFile(path.join(__dirname, "..", ".env.local"));
} catch {
  // .env.local is optional here — env vars may already be set in the shell/CI.
}

const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY;

async function main() {
  if (!VOYAGE_API_KEY) {
    console.error("Missing required env var: VOYAGE_API_KEY");
    console.error("Set it in .env.local (or the environment) before running this script.");
    process.exit(1);
  }

  const results = await embedCategoryReferences({ voyageApiKey: VOYAGE_API_KEY });

  writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2) + "\n");
  console.log(`Wrote ${results.length} category reference embeddings to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main().catch((err) => {
  console.error("Embedding category references failed:", err.message);
  process.exit(1);
});
