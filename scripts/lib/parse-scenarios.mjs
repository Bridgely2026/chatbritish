// Parse+validate logic for the "Scenarios" sheet in
// data/chat_british_scenarios.xlsx. Used by scripts/import-scenarios.mjs
// (generates lib/scenarios-generated.ts).
//
// Columns are read by header name, so the reviewer-only extras (Review notes,
// Spot-check first, Longest feedback, the "Entry: ..." reference columns) and
// the Instructions sheet are ignored.

import { readFileSync } from "node:fs";
import * as XLSX from "xlsx";

export const SHEET_NAME = "Scenarios";

// Matches the Status dropdown in the workbook. Only Approved reaches the app
// (Draft too, with --include-draft, for local dev).
export const VALID_STATUSES = ["Draft", "Approved", "Needs edit", "Rejected"];

const COLUMNS = {
  id: "Scenario ID",
  normId: "Norm ID",
  category: "Category",
  setup: "Setup",
  prompt: "Prompt",
  rightAnswer: "Right answer",
  rightFeedback: "Right-answer feedback",
  wrong1: "Wrong answer 1",
  wrong1Feedback: "Wrong 1 feedback",
  wrong2: "Wrong answer 2",
  wrong2Feedback: "Wrong 2 feedback",
  status: "Status",
  // Optional: only used for the import summary.
  reviewState: "Review state",
};

const REQUIRED = Object.keys(COLUMNS).filter((key) => key !== "reviewState");

function isBlank(value) {
  return value === null || value === undefined || String(value).trim() === "";
}

function clean(value) {
  return String(value).trim();
}

// Parses and validates the Scenarios sheet at `sourcePath` against the parsed
// taxonomy `entries` (from parseTaxonomy). `importStatuses` lists the statuses
// that will be written to the app; only those rows need an Approved norm.
// Returns { scenarios, errors }, collecting every row-level problem rather
// than throwing, like parseTaxonomy.
export function parseScenarios(sourcePath, entries, importStatuses) {
  const workbook = XLSX.read(readFileSync(sourcePath), { type: "buffer" });
  const sheet = workbook.Sheets[SHEET_NAME];
  if (!sheet) {
    return { scenarios: [], errors: [`Sheet "${SHEET_NAME}" not found in ${sourcePath}`] };
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { defval: null });
  const headers = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0] ?? [];

  const errors = [];
  const missingColumns = REQUIRED.map((key) => COLUMNS[key]).filter((name) => !headers.includes(name));
  if (missingColumns.length > 0) {
    return { scenarios: [], errors: [`Missing column(s): ${missingColumns.join(", ")}`] };
  }
  // Answers live in fixed columns, so "one right, two wrong" is structural —
  // but a stray third wrong-answer column would silently be ignored.
  const extraAnswers = headers.filter(
    (h) => typeof h === "string" && /^wrong answer \d+$/i.test(h.trim()) && !["Wrong answer 1", "Wrong answer 2"].includes(h.trim())
  );
  if (extraAnswers.length > 0) {
    errors.push(`Unexpected answer column(s): ${extraAnswers.join(", ")} (exactly one right and two wrong answers)`);
  }

  const normsById = new Map(entries.map((e) => [e.normId, e]));
  const seenIds = new Map();
  const scenarios = [];

  rows.forEach((row, i) => {
    const rowNumber = i + 2; // account for the header row

    // Unfilled rows: no Scenario ID and no Norm ID. Skip quietly.
    if (isBlank(row[COLUMNS.id]) && isBlank(row[COLUMNS.normId])) return;

    const rowErrors = [];

    for (const key of REQUIRED) {
      if (isBlank(row[COLUMNS[key]])) rowErrors.push(`missing ${COLUMNS[key]}`);
    }

    const status = isBlank(row[COLUMNS.status]) ? null : clean(row[COLUMNS.status]);
    if (status && !VALID_STATUSES.includes(status)) {
      rowErrors.push(`invalid Status "${status}" (must be one of: ${VALID_STATUSES.join(", ")})`);
    }

    if (!isBlank(row[COLUMNS.id])) {
      const id = clean(row[COLUMNS.id]);
      if (seenIds.has(id)) {
        rowErrors.push(`duplicate Scenario ID "${id}" (first seen at row ${seenIds.get(id)})`);
      } else {
        seenIds.set(id, rowNumber);
      }
    }

    if (!isBlank(row[COLUMNS.normId])) {
      const normId = clean(row[COLUMNS.normId]);
      const entry = normsById.get(normId);
      if (!entry) {
        rowErrors.push(`Norm ID "${normId}" not found in the taxonomy`);
      } else {
        if (!isBlank(row[COLUMNS.category]) && clean(row[COLUMNS.category]) !== entry.category) {
          rowErrors.push(
            `Category "${clean(row[COLUMNS.category])}" doesn't match ${normId}'s category "${entry.category}"`
          );
        }
        if (importStatuses.includes(status) && entry.status !== "Approved") {
          rowErrors.push(`Norm ID "${normId}" is ${entry.status} in the taxonomy, not Approved`);
        }
      }
    }

    const answers = [COLUMNS.rightAnswer, COLUMNS.wrong1, COLUMNS.wrong2]
      .map((col) => row[col])
      .filter((v) => !isBlank(v))
      .map(clean);
    if (new Set(answers).size !== answers.length) {
      rowErrors.push("two answers have identical text");
    }

    if (rowErrors.length > 0) {
      for (const err of rowErrors) errors.push(`Row ${rowNumber}: ${err}`);
      return;
    }

    scenarios.push({
      id: clean(row[COLUMNS.id]),
      normId: clean(row[COLUMNS.normId]),
      category: clean(row[COLUMNS.category]),
      setup: clean(row[COLUMNS.setup]),
      prompt: clean(row[COLUMNS.prompt]),
      options: [
        { text: clean(row[COLUMNS.rightAnswer]), correct: true, feedback: clean(row[COLUMNS.rightFeedback]) },
        { text: clean(row[COLUMNS.wrong1]), correct: false, feedback: clean(row[COLUMNS.wrong1Feedback]) },
        { text: clean(row[COLUMNS.wrong2]), correct: false, feedback: clean(row[COLUMNS.wrong2Feedback]) },
      ],
      status,
      reviewState: isBlank(row[COLUMNS.reviewState]) ? null : clean(row[COLUMNS.reviewState]),
    });
  });

  return { scenarios, errors };
}
