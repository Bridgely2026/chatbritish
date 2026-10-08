import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { HELP_INPUT_MAX, helpAssistantEnabled, type HelpAction } from "@/lib/help-assistant-config";
import { HELP_SYSTEM_PROMPT, helpWhatsappEnabled } from "@/lib/help-knowledge";

// The Help assistant: answers questions about using Chat British from the
// approved knowledge pack (lib/help-knowledge.ts). One Claude call per
// request, forced to reply through the `reply` tool, so the answer is always
// short text plus one action, which the UI turns into a button.
//
// Privacy: message text is never stored and never logged, including in error
// logs. Logs carry only the outcome, token counts and the action.

const MODEL = "claude-haiku-4-5-20251001";
const MAX_MESSAGES = 8;
const MESSAGES_SENT = 6;
const MAX_REPLY_CHARS = 600;

const ACTIONS: HelpAction[] = helpWhatsappEnabled
  ? ["practice", "debrief", "email", "privacy", "whatsapp", "none"]
  : ["practice", "debrief", "email", "privacy", "none"];

const REPLY_TOOL: Anthropic.Tool = {
  name: "reply",
  description:
    "Send your reply to the person. Always use this tool. `text` is the reply itself: plain text, no links, no URLs, no markdown, at most about 80 words. " +
    "`action` adds one button under the reply: practice (Start practising), debrief (Try Debrief), email (Email support), privacy (the privacy notice)" +
    (helpWhatsappEnabled ? ", whatsapp (WhatsApp, only as the knowledge pack allows)" : "") +
    ", or none (no button). Pick the one the knowledge pack points to, or none.",
  input_schema: {
    type: "object",
    properties: {
      text: { type: "string", maxLength: MAX_REPLY_CHARS, description: "The reply, plain text, no URLs." },
      action: { type: "string", enum: ACTIONS },
    },
    required: ["text", "action"],
    additionalProperties: false,
  },
};

type Reply = { text: string; action: HelpAction; fallback?: true };

const FALLBACK: Reply = {
  text: "Sorry, I can't answer right now. You can email us and a person will reply.",
  action: "email",
  fallback: true,
};

// Same pattern as the Debrief route: in-memory and per instance, so it resets
// on redeploy and isn't shared between instances. Enough to stop accidental
// hammering, not a substitute for a shared limiter under real traffic.
const MINUTE_MS = 60_000;
const DAY_MS = 24 * 60 * 60_000;
const MAX_PER_MINUTE = 12;
const MAX_PER_DAY = 60;
const SWEEP_THRESHOLD = 1000;
const requestLog = new Map<string, number[]>();

function getClientKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unknown";
}

// True if this request is allowed (and records it). Synchronous, so
// concurrent requests can't race past it.
function checkRateLimit(key: string, now: number): boolean {
  if (requestLog.size > SWEEP_THRESHOLD) {
    for (const [k, stamps] of requestLog) {
      if (stamps.every((t) => now - t >= DAY_MS)) requestLog.delete(k);
    }
  }
  const today = (requestLog.get(key) ?? []).filter((t) => now - t < DAY_MS);
  const lastMinute = today.filter((t) => now - t < MINUTE_MS).length;
  if (today.length >= MAX_PER_DAY || lastMinute >= MAX_PER_MINUTE) {
    requestLog.set(key, today);
    return false;
  }
  today.push(now);
  requestLog.set(key, today);
  return true;
}

// Only ever logs these fields: never message text.
function logOutcome(outcome: string, extra: { input_tokens?: number; output_tokens?: number; action?: string; status?: number } = {}) {
  console.log(`[assistant] ${JSON.stringify({ outcome, ...extra })}`);
}

function parseMessages(body: unknown): Anthropic.MessageParam[] | null {
  const list = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(list) || list.length === 0 || list.length > MAX_MESSAGES) return null;
  const messages: Anthropic.MessageParam[] = [];
  for (const item of list) {
    const role = (item as { role?: unknown })?.role;
    const content = (item as { content?: unknown })?.content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    const text = content.trim();
    if (text === "" || text.length > HELP_INPUT_MAX) return null;
    messages.push({ role, content: text });
  }
  // Use the last six; the conversation sent to Claude must start with the
  // person and end with the person.
  const recent = messages.slice(-MESSAGES_SENT);
  while (recent.length > 0 && recent[0].role !== "user") recent.shift();
  if (recent.length === 0 || recent[recent.length - 1].role !== "user") return null;
  return recent;
}

function fallback(status = 200) {
  return NextResponse.json(FALLBACK, { status });
}

export async function POST(request: NextRequest) {
  if (!helpAssistantEnabled) return new NextResponse(null, { status: 404 });

  if (!checkRateLimit(getClientKey(request), Date.now())) {
    logOutcome("rate_limited", { status: 429 });
    return NextResponse.json(
      { ...FALLBACK, text: "You've sent a lot of questions. Please wait a minute and try again, or email us." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    logOutcome("bad_request", { status: 400 });
    return fallback(400);
  }
  const messages = parseMessages(body);
  if (!messages) {
    logOutcome("bad_request", { status: 400 });
    return fallback(400);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    logOutcome("misconfigured", { status: 500 });
    return fallback();
  }

  try {
    const anthropic = new Anthropic({ apiKey });
    const message = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 400,
      temperature: 0.2,
      system: HELP_SYSTEM_PROMPT,
      messages,
      tools: [REPLY_TOOL],
      tool_choice: { type: "tool", name: REPLY_TOOL.name },
    });

    const usage = { input_tokens: message.usage.input_tokens, output_tokens: message.usage.output_tokens };
    const block = message.content.find((b): b is Anthropic.ToolUseBlock => b.type === "tool_use");
    const input = (block?.input ?? {}) as { text?: unknown; action?: unknown };
    const text = typeof input.text === "string" ? input.text.trim().slice(0, MAX_REPLY_CHARS) : "";
    if (message.stop_reason === "max_tokens" || text === "") {
      logOutcome("malformed", { ...usage, status: 200 });
      return fallback();
    }
    const action: HelpAction = ACTIONS.includes(input.action as HelpAction) ? (input.action as HelpAction) : "none";

    logOutcome("ok", { ...usage, action, status: 200 });
    return NextResponse.json({ text, action } satisfies Reply);
  } catch (err) {
    // The status and class only: an error message could quote the request.
    const status = err instanceof Anthropic.APIError ? err.status : undefined;
    logOutcome(err instanceof Anthropic.APIError ? `anthropic_error_${err.constructor.name}` : "error", { status });
    return fallback();
  }
}
