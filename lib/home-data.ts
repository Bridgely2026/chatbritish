// Content for the home page, read from the generated taxonomy and scenario
// data. The page is static, so this runs at build time and the figures and
// quotes follow the spreadsheets rather than being copied into the page.
// Anything not found (or not Approved) comes back as null or is left out, so
// the page renders less rather than showing a stand-in.

import { taxonomy, type NormEntry } from "./mock-data";
import type { Scenario, ScenarioOption } from "./scenarios";
import { generatedScenarios } from "./scenarios-generated";

const approvedNorms = taxonomy.filter((e) => e.status === "Approved");
const approvedScenarios = generatedScenarios.filter((s) => s.status === "Approved");

export const counts = {
  norms: approvedNorms.length,
  situations: new Set(approvedNorms.map((e) => e.category)).size,
  scenarios: approvedScenarios.length,
};

const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

// "Twelve" for 12; digits past the end of the list.
export function numberWord(n: number): string {
  return NUMBER_WORDS[n] ?? String(n);
}

function approvedNorm(normIdPrefix: string): NormEntry | null {
  // Norm IDs are "WP-1-indirect-refusal-workplace"; match the code plus the
  // hyphen so "WP-1" doesn't also match "WP-17".
  return approvedNorms.find((e) => e.normId.startsWith(`${normIdPrefix}-`)) ?? null;
}

// "WP-1-indirect-refusal-workplace" -> { code: "WP-1", slug: "indirect refusal workplace" }
export function splitNormId(normId: string): { code: string; slug: string } {
  const match = normId.match(/^([A-Z]+-\d+)-(.*)$/);
  return match ? { code: match[1], slug: match[2].replace(/-/g, " ") } : { code: normId, slug: "" };
}

// The first phrase in straight or curly double quotes in Surface Markers.
// Verbatim, so WP-17 keeps the trailing comma it has in the spreadsheet.
function firstQuotedPhrase(surfaceMarkers: string): string | null {
  return surfaceMarkers.match(/["“]([^"”]+)["”]/)?.[1] ?? null;
}

// Hero stamp card.
export const heroNorm = approvedNorm("WP-1");

// Hero phone: one Practice question shown answered, with the first wrong
// option chosen and the right one highlighted.
export const heroScenario: { scenario: Scenario; chosen: ScenarioOption } | null = (() => {
  const scenario = approvedScenarios.find((s) => s.id === "SC-WP-2-a");
  const chosen = scenario?.options.find((o) => !o.correct);
  return scenario && chosen ? { scenario, chosen } : null;
})();

// Coach section ledger: what they say / what it means.
export const ledgerRows = ["WP-17", "HC-4", "HL-1"]
  .map((code) => approvedNorm(code))
  .filter((e): e is NormEntry => e !== null)
  .map((e) => ({ normId: e.normId, phrase: firstQuotedPhrase(e.surfaceMarkers), meaning: e.whatItMeans }))
  .filter((row): row is typeof row & { phrase: string } => row.phrase !== null);
