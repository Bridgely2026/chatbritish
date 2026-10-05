// Reads the "Scenarios" sheet from data/chat_british_scenarios.xlsx, validates
// it against the taxonomy workbook (read-only), and generates
// lib/scenarios-generated.ts. Run via `npm run scenarios:import`.
//
// Only Approved rows are written. `--include-draft` also writes Draft rows,
// for local dev only: the generated file is then flagged and `next build`
// refuses it (see lib/scenarios.ts), so it can't ship by accident.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { parseTaxonomy, VALID_CATEGORIES } from "./lib/parse-taxonomy.mjs";
import { parseScenarios } from "./lib/parse-scenarios.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_PATH = path.join(__dirname, "..", "data", "chat_british_scenarios.xlsx");
const TAXONOMY_PATH = path.join(__dirname, "..", "data", "chat_british_taxonomy_template.xlsx");
const OUTPUT_PATH = path.join(__dirname, "..", "lib", "scenarios-generated.ts");

function fail(heading, errors) {
  console.error(`${heading} with ${errors.length} problem(s):\n`);
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

function main() {
  const includeDraft = process.argv.includes("--include-draft");
  const importStatuses = includeDraft ? ["Approved", "Draft"] : ["Approved"];

  const { entries, errors: taxonomyErrors } = parseTaxonomy(TAXONOMY_PATH);
  if (taxonomyErrors.length > 0) fail("Taxonomy workbook failed validation", taxonomyErrors);

  const { scenarios, errors } = parseScenarios(SOURCE_PATH, entries, importStatuses);
  if (errors.length > 0) fail("Scenario import failed", errors);

  const imported = scenarios
    .filter((s) => importStatuses.includes(s.status))
    .map(({ reviewState, ...scenario }) => scenario);

  const header = `// AUTO-GENERATED from data/chat_british_scenarios.xlsx by scripts/import-scenarios.mjs
// Do not edit by hand — edit the spreadsheet and re-run: npm run scenarios:import
import type { Scenario } from "./scenarios";

// true only after \`npm run scenarios:import -- --include-draft\` (local dev).
export const generatedIncludesDraft = ${includeDraft};

export const generatedScenarios: Scenario[] = ${JSON.stringify(imported, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, header);

  const count = (items, key) => items.reduce((acc, item) => ({ ...acc, [item[key]]: (acc[item[key]] ?? 0) + 1 }), {});
  const perCategory = count(imported, "category");
  const perStatus = count(scenarios, "status");
  const perReviewState = count(
    scenarios.filter((s) => importStatuses.includes(s.status)).map((s) => ({ r: s.reviewState ?? "(blank)" })),
    "r"
  );

  console.log(
    `Read ${scenarios.length} scenarios (${Object.entries(perStatus)
      .map(([s, n]) => `${n} ${s}`)
      .join(", ")}). Wrote ${imported.length} to lib/scenarios-generated.ts.`
  );
  console.log("\nPer category:");
  for (const c of VALID_CATEGORIES) console.log(`  ${c}: ${perCategory[c] ?? 0}`);
  console.log("\nPer review state:");
  for (const [state, n] of Object.entries(perReviewState)) console.log(`  ${state}: ${n}`);

  if (includeDraft) {
    console.warn("\n--include-draft: Draft rows included. Local dev only — `next build` will refuse this file.");
  }
}

main();
