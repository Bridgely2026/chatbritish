import fs from "node:fs";
import path from "node:path";
import { counts } from "./home-data";

// The Help assistant's system prompt: the approved knowledge pack, with its
// placeholders filled from the generated data (Approved rows only) and the
// WhatsApp setting. Don't reword the pack here; edit the Markdown file, and
// only once Kianoush has approved the change.
//
// Evaluated when the route module loads, which `next build` does while
// collecting page data, so a pack that still has a [CONFIRM ...] or
// [DECIDE ...] note, or an unfilled {{PLACEHOLDER}}, fails the build.

const PACK_PATH = path.join(process.cwd(), "data", "help-assistant-knowledge.md");

const WHATSAPP_ON =
  "WhatsApp: for quick questions the chat window has a WhatsApp button. Use action whatsapp only if someone asks for WhatsApp or a quick reply from a person. Never mention a number.";
const WHATSAPP_OFF = "There is no WhatsApp option. Never mention WhatsApp.";

export const helpWhatsappEnabled = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "") !== "";

function buildPack(): string {
  const raw = fs.readFileSync(PACK_PATH, "utf8");

  const unresolved = raw.match(/\[(CONFIRM|DECIDE)\b[^\]]*\]?/);
  if (unresolved) {
    throw new Error(`data/help-assistant-knowledge.md still has an open note: "${unresolved[0]}"`);
  }

  const values: Record<string, string> = {
    NORMS: String(counts.norms),
    SITUATIONS: String(counts.situations),
    SCENARIOS: String(counts.scenarios),
    WHATSAPP_LINE: helpWhatsappEnabled ? WHATSAPP_ON : WHATSAPP_OFF,
  };
  const filled = raw.replace(/\{\{([A-Z_]+)\}\}/g, (match, key: string) => values[key] ?? match);

  const leftover = filled.match(/\{\{[^}]*\}\}/);
  if (leftover) {
    throw new Error(`data/help-assistant-knowledge.md has an unfilled placeholder: ${leftover[0]}`);
  }
  return filled;
}

export const HELP_SYSTEM_PROMPT = buildPack();

// Fixed replies for the three question chips, read verbatim from the pack so
// they make no model call and don't count towards the chat limit. The build
// fails if the pack changes so that one can't be found.
export type ChipReply = { question: string; text: string; action: "practice" | "debrief" | "none" };

function extract(label: string, pattern: RegExp): string {
  const match = HELP_SYSTEM_PROMPT.match(pattern)?.[1]?.trim();
  if (!match) throw new Error(`data/help-assistant-knowledge.md: can't find the ${label} chip reply`);
  return match;
}

export const HELP_CHIP_REPLIES: ChipReply[] = [
  {
    question: "How does Practice work?",
    // Section 3's Practice paragraph, without its bold label.
    text: extract("Practice", /\*\*Practice \(before it happens\)\.\*\* ([^\n]+)/),
    action: "practice",
  },
  {
    question: "What is Debrief?",
    // Section 10's example reply, without its [button: ...] note.
    text: extract("Debrief", /\*\*"What is Debrief\?"\*\* (.+?) \[button:/),
    action: "debrief",
  },
  {
    question: "Is it free?",
    // Section 4's first sentence.
    text: extract("free", /## 4\. Cost\s+([^\n]*?early access\.)/),
    action: "none",
  },
];
