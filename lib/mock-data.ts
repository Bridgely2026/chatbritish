// Mock data standing in for `taxonomy_entries` and `debriefs`. Practice
// scenarios live in lib/scenarios.ts.
// Shape matches the Supabase data model in CLAUDE.md so swapping in real
// queries later is a drop-in replacement, not a rewrite.

import { generatedTaxonomy } from "./taxonomy-generated";

export type NormEntry = {
  normId: string;
  category:
    | "Workplace"
    | "Healthcare"
    | "Housing & landlord"
    | "Job search"
    | "Social"
    | "Admin & bureaucracy"
    | "Education"
    | "Dating & relationships"
    | "Money & transactions"
    | "Transport & commuting"
    | "Neighbours & community"
    | "Customer service & retail";
  definition: string;
  surfaceMarkers: string;
  whatItMeans: string;
  example: string;
  goodResponse: string;
  status: "Draft" | "Approved";
};

// Real taxonomy content, generated from data/chat_british_taxonomy_template.xlsx.
// Edit the spreadsheet and re-run `npm run taxonomy:import`, don't edit here.
export const taxonomy: NormEntry[] = generatedTaxonomy;

// Onboarding: situation-to-category weighting, used to pick a starting point
// in the taxonomy before any practice or debrief data exists for a user.

export type CategoryCode =
  | "WP"
  | "HC"
  | "HL"
  | "JS"
  | "SO"
  | "AB"
  | "ED"
  | "DR"
  | "MN"
  | "TR"
  | "NB"
  | "CS";

export const CATEGORY_LABELS: Record<CategoryCode, NormEntry["category"]> = {
  WP: "Workplace",
  HC: "Healthcare",
  HL: "Housing & landlord",
  JS: "Job search",
  SO: "Social",
  AB: "Admin & bureaucracy",
  ED: "Education",
  DR: "Dating & relationships",
  MN: "Money & transactions",
  TR: "Transport & commuting",
  NB: "Neighbours & community",
  CS: "Customer service & retail",
};

// Reverse of CATEGORY_LABELS, for turning a category label (e.g. the
// topCategory returned by /api/classify-struggle) back into a CategoryCode.
const CATEGORY_CODE_BY_LABEL = Object.fromEntries(
  (Object.entries(CATEGORY_LABELS) as [CategoryCode, string][]).map(([code, label]) => [label, code])
) as Record<string, CategoryCode>;

export const CATEGORY_BLURBS: Record<string, string> = {
  Workplace: "Meetings, managers, colleagues",
  "Housing & landlord": "Repairs, notices, flatmates",
  Healthcare: "GPs, appointments, NHS process",
  "Job search": "Interviews, applications, offers",
  Social: "Invitations, small talk, everyday norms",
  "Admin & bureaucracy": "Councils, HMRC, official letters",
  Education: "Lecturers, exams, school letters",
  "Dating & relationships": "Dates, texting, partners",
  "Money & transactions": "Bills, payments, tipping",
  "Transport & commuting": "Trains, buses, driving",
  "Neighbours & community": "Noise, bins, shared spaces",
  "Customer service & retail": "Shops, returns, complaints",
};

export type Situation = {
  label: string;
  description: string;
  category: CategoryCode;
};

export const SITUATIONS: Situation[] = [
  { label: "Work", description: "Colleagues, managers", category: "WP" },
  { label: "Healthcare", description: "GP, NHS, pharmacy", category: "HC" },
  { label: "Housing", description: "Landlord, flatmates, repairs", category: "HL" },
  { label: "Job search", description: "Interviews, applications", category: "JS" },
  { label: "Social life", description: "Friends, small talk, invitations", category: "SO" },
  { label: "Admin & bureaucracy", description: "Councils, HMRC, official letters", category: "AB" },
  { label: "Education", description: "Studying, courses, exams, academic norms", category: "ED" },
  { label: "Dating & relationships", description: "Dating, relationships, romantic communication", category: "DR" },
  { label: "Money", description: "Banking, payments, financial norms", category: "MN" },
  { label: "Transport", description: "Public transport, driving, commuting etiquette", category: "TR" },
  { label: "Neighbours", description: "Neighbours, local community, shared spaces", category: "NB" },
  { label: "Shopping & services", description: "Shopping, returns, service interactions", category: "CS" },
];

// Life-stage / role chips shown in onboarding, and the category bonus each adds.
// Additive only: like the time-in-UK modifier, a role never subtracts weight from
// or overrides what the user explicitly picked in situations.
//
// Role and time-in-UK only ever boost the original six categories (WP–AB).
// ED/DR/MN/TR/NB/CS deliberately get no modifier: there's no clean mapping from
// role or time-in-UK to them, and forcing one would invent a signal. They're
// reached via situations or struggle-text classification instead.
export const ROLES = ["Employed", "Job-seeking", "Student", "Stay-at-home parent", "Retired", "Other"];

const ROLE_MODIFIERS: Record<string, Partial<Record<CategoryCode, number>>> = {
  Employed: { WP: 2 },
  "Job-seeking": { JS: 2 },
  Student: { AB: 2, SO: 1 },
  "Stay-at-home parent": { AB: 2, SO: 1 },
  Retired: { HC: 2, SO: 1 },
  Other: {},
};

function naturalJoin(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

// `situations` holds canonical category names (CATEGORY_LABELS values, e.g.
// "Money & transactions"), never a chip's display label, so renaming a chip
// can't orphan values already stored in users.situations.
export function computeStartingPoint(
  situations: string[],
  timeInUk: string,
  role: string,
  struggleCategory?: string | null
): { rankedCategories: string[]; summary: string } {
  const selected = SITUATIONS.filter((s) => situations.includes(CATEGORY_LABELS[s.category]));

  const scores: Record<CategoryCode, number> = {
    WP: 0,
    HC: 0,
    HL: 0,
    JS: 0,
    SO: 0,
    AB: 0,
    ED: 0,
    DR: 0,
    MN: 0,
    TR: 0,
    NB: 0,
    CS: 0,
  };
  for (const s of selected) {
    scores[s.category] += 2;
  }

  if (timeInUk === "Just arrived" || timeInUk === "Under 1 year") {
    scores.HL += 1;
    scores.AB += 1;
  } else if (timeInUk === "3+ years") {
    scores.WP += 1;
    scores.SO += 1;
  }

  // Stacks with the time-in-UK modifier above.
  const roleBoosted = new Set<CategoryCode>();
  for (const [code, bonus] of Object.entries(ROLE_MODIFIERS[role] ?? {})) {
    scores[code as CategoryCode] += bonus;
    if (bonus > 0) roleBoosted.add(code as CategoryCode);
  }

  // Struggle-text classification (from /api/classify-struggle), same +2 tier
  // as a role's primary bonus — added to roleBoosted so it shares that tier's
  // tiebreak below rather than needing its own. Additive only, like every
  // other modifier here: it can win a tie against an unselected category, but
  // the explicitlySelected tier still outranks it, so it never lets an
  // unselected category beat one the user actually picked in situations.
  const struggleCode = struggleCategory ? CATEGORY_CODE_BY_LABEL[struggleCategory] : undefined;
  if (struggleCode) {
    scores[struggleCode] += 2;
    roleBoosted.add(struggleCode);
  }

  const explicitlySelected = new Set(selected.map((s) => s.category));
  const flag = (set: Set<CategoryCode>, code: CategoryCode) => (set.has(code) ? 1 : 0);

  // Ties on score resolve in three tiers: (1) an explicitly selected situation
  // beats an unselected one, (2) a role- or struggle-boosted category beats an
  // un-boosted one, (3) otherwise the key order of `scores` (WP, HC, HL, JS,
  // SO, AB, ED, DR, MN, TR, NB, CS), which the stable sort preserves.
  const rankedCategories = (Object.keys(scores) as CategoryCode[])
    .filter((code) => scores[code] > 0)
    .sort(
      (a, b) =>
        scores[b] - scores[a] ||
        flag(explicitlySelected, b) - flag(explicitlySelected, a) ||
        flag(roleBoosted, b) - flag(roleBoosted, a)
    )
    .slice(0, 3)
    .map((code) => CATEGORY_LABELS[code]);

  const situationPhrase = naturalJoin(selected.map((s) => s.label.toLowerCase()));
  const categoryPhrase = naturalJoin(rankedCategories);

  let summary: string;
  if (timeInUk === "Just arrived") {
    summary = `Since you've just landed and are already juggling ${situationPhrase}, we'll start with the norms that matter most in the first few weeks: ${categoryPhrase}.`;
  } else if (timeInUk === "Under 1 year") {
    summary = `Because you're still settling in and sorting out ${situationPhrase}, we'll start you with ${categoryPhrase} \u2014 the norms that trip people up early.`;
  } else if (timeInUk === "3+ years") {
    summary = `You've been here a while now, so it's less about survival and more about the subtler stuff people still miss \u2014 given how much of your time goes to ${situationPhrase}, we'll start with ${categoryPhrase}.`;
  } else {
    summary = `Because you're a couple of years in and dealing with ${situationPhrase}, we'll start you with ${categoryPhrase}.`;
  }

  return { rankedCategories, summary };
}

