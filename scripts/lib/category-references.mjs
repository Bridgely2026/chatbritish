// The twelve fixed taxonomy-category reference texts that
// app/api/classify-struggle compares onboarding "struggle" text against via
// cosine similarity, and the logic to embed them. Used by
// scripts/embed-category-references.mjs (writes the JSON to disk) and
// app/api/admin/embed-category-refs (returns it in the response, since
// Railway's disk resets on deploy).

import { embedTexts } from "./voyage.mjs";

// Category names match NormEntry["category"] / CATEGORY_LABELS values in
// lib/mock-data.ts verbatim — app/api/classify-struggle returns one of these
// as topCategory, and computeStartingPoint() maps it back to a CategoryCode.
export const CATEGORY_REFERENCES = [
  {
    category: "Workplace",
    text: "Confused about mixed signals from a manager or colleague, indirect feedback in meetings, not knowing if a vague answer meant yes or no, workplace hierarchy and unwritten office norms.",
  },
  {
    category: "Healthcare",
    text: "Confused about how the NHS or GP appointments work, whether a doctor's brief answer means something is being taken seriously, pharmacist referrals, healthcare admin and triage language.",
  },
  {
    category: "Housing & landlord",
    text: "Confused about a landlord's vague promises about repairs, tenancy agreements, deposit protection, dealing with flatmates or housemates, notices and rental admin.",
  },
  {
    category: "Job search",
    text: "Confused about vague interview feedback, recruiter communication, CV tone, notice periods, networking norms, whether silence after an interview means rejection.",
  },
  {
    category: "Social",
    text: "Confused about British small talk, understatement, self-deprecating humour, queueing etiquette, declining invitations politely, making friends and reading social cues.",
  },
  {
    category: "Admin & bureaucracy",
    text: "Confused about council tax, bank letters, HMRC correspondence, official forms, proof-of-address requirements, formal-sounding letters that turn out to be routine.",
  },
  {
    category: "Education",
    text: "Confused about UK academic norms, essay/exam expectations, how to address lecturers, seminar participation culture, plagiarism rules that differ from home.",
  },
  {
    category: "Dating & relationships",
    text: "Confused about British dating norms, how directness or indirectness works in romantic communication, ghosting, what counts as a date versus hanging out.",
  },
  {
    category: "Money & transactions",
    text: "Confused about UK banking, splitting bills, tipping norms, direct debits, credit scores, or how payment etiquette works day to day.",
  },
  {
    category: "Transport & commuting",
    text: "Confused about public transport etiquette, queueing for buses, escalator standing side, quiet carriage norms, driving conventions.",
  },
  {
    category: "Neighbours & community",
    text: "Confused about UK neighbour etiquette, noise norms, bins and recycling rules, introducing yourself, community expectations.",
  },
  {
    category: "Customer service & retail",
    text: "Confused about UK shopping norms, return policies, how directly to complain, queueing in shops, tipping in service settings.",
  },
];

// Returns [{ category, embedding }] for all twelve categories, in order.
export async function embedCategoryReferences({ voyageApiKey, log = console.log }) {
  log(`Embedding ${CATEGORY_REFERENCES.length} category reference texts...`);
  const embeddings = await embedTexts(
    CATEGORY_REFERENCES.map((r) => r.text),
    { apiKey: voyageApiKey, inputType: "document", log }
  );
  return CATEGORY_REFERENCES.map(({ category }, i) => ({ category, embedding: embeddings[i] }));
}
