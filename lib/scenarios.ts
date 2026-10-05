// Practice scenarios, generated from data/chat_british_scenarios.xlsx.
// Edit the spreadsheet and re-run `npm run scenarios:import`, don't edit
// lib/scenarios-generated.ts by hand.

import { CATEGORY_LABELS, type CategoryCode, type NormEntry } from "./mock-data";
import { generatedIncludesDraft, generatedScenarios } from "./scenarios-generated";

export type ScenarioOption = { text: string; correct: boolean; feedback: string };

export type Scenario = {
  id: string;
  normId: string;
  category: NormEntry["category"];
  setup: string;
  prompt: string;
  // Stored right answer first, then the two wrong ones; shuffled at render.
  options: ScenarioOption[];
  status: "Approved" | "Draft";
};

// `--include-draft` is for `next dev` only. Fail a production build rather
// than ship unreviewed scenarios.
if (generatedIncludesDraft && process.env.NODE_ENV === "production") {
  throw new Error(
    "lib/scenarios-generated.ts includes Draft scenarios. Re-run `npm run scenarios:import` without --include-draft before building."
  );
}

export const SESSION_LENGTH = 5;

export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getScenariosByCategory(category: string): Scenario[] {
  return generatedScenarios.filter((s) => s.category === category);
}

export function getCategoryScenarioCounts(): { category: string; count: number }[] {
  return (Object.keys(CATEGORY_LABELS) as CategoryCode[]).map((code) => {
    const category = CATEGORY_LABELS[code];
    return { category, count: getScenariosByCategory(category).length };
  });
}

export function hasScenarioForNorm(normId: string): boolean {
  return generatedScenarios.some((s) => s.normId === normId);
}

export function getScenarioForNorm(normId: string): Scenario | undefined {
  const matches = generatedScenarios.filter((s) => s.normId === normId);
  return matches.length > 0 ? shuffle(matches)[0] : undefined;
}

// Up to SESSION_LENGTH scenarios from the category, in random order. With
// `first`, that scenario leads and the rest of the session is drawn around it.
export function drawSession(category: string, first?: Scenario): Scenario[] {
  const others = shuffle(getScenariosByCategory(category).filter((s) => s.id !== first?.id));
  return first ? [first, ...others].slice(0, SESSION_LENGTH) : others.slice(0, SESSION_LENGTH);
}
