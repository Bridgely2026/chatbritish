"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { SUPPORT_MAILTO, whatsappHelpHref } from "@/lib/contact";
import { HELP_INPUT_MAX, type HelpAction } from "@/lib/help-assistant-config";

// The Help button and chat panel. Rendered from the root layout only when
// NEXT_PUBLIC_HELP_ASSISTANT=on. The conversation lives in React state only:
// nothing is written to storage, and it's gone on reload.
//
// Hidden (and the panel closed) while a Practice question is on screen, using
// the same body[data-practice-question] flag that hides the footer.

// `local` marks a message written here, not by the model: it shows on
// screen but is never sent to the route.
type ChatMessage = { role: "user" | "assistant"; content: string; action?: HelpAction | "contact"; local?: true };

const SOMETHING_ELSE = "Type your question below, or contact a person.";

const GREETING =
  "Hi, I'm the Chat British help assistant. I can explain how Practice and Debrief work. If you want to know what a phrase really means, Debrief is the place.";

const CHIPS = ["How does Practice work?", "What is Debrief?", "Is it free?"];

// The route accepts at most 8 messages of up to 300 characters each, so
// longer replies are cut short in the history sent back (the full reply
// stays on screen).
const HISTORY_SENT = 8;

export default function HelpAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus goes back to the Help button after the panel has closed: on phones
  // the button is hidden while the sheet is open, so it can't take focus
  // until the next render.
  const returnFocusRef = useRef(false);
  function close(returnFocus: boolean) {
    returnFocusRef.current = returnFocus;
    setOpen(false);
  }
  useEffect(() => {
    if (!open && returnFocusRef.current) {
      returnFocusRef.current = false;
      buttonRef.current?.focus();
    }
  }, [open]);

  // Escape closes the panel and returns focus to the Help button.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close(true);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // On open, move focus into the panel: the input on wider screens; the panel
  // itself on phones, so the keyboard doesn't cover the sheet straight away.
  useEffect(() => {
    if (!open) return;
    if (window.matchMedia("(min-width: 560px)").matches) inputRef.current?.focus({ preventScroll: true });
    else panelRef.current?.focus({ preventScroll: true });
  }, [open]);

  // Close the panel when a Practice question comes on screen.
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if ("practiceQuestion" in document.body.dataset) setOpen(false);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-practice-question"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading]);

  async function ask(question: string) {
    const text = question.trim().slice(0, HELP_INPUT_MAX);
    if (!text || loading) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setDraft("");
    setLoading(true);
    let reply: ChatMessage;
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next
            .filter((m) => !m.local)
            .slice(-HISTORY_SENT)
            .map((m) => ({ role: m.role, content: m.content.slice(0, HELP_INPUT_MAX) })),
        }),
      });
      const data = (await res.json()) as { text?: string; action?: HelpAction };
      reply = { role: "assistant", content: data.text || FALLBACK_TEXT, action: data.action ?? "email" };
    } catch {
      reply = { role: "assistant", content: FALLBACK_TEXT, action: "email" };
    }
    setMessages((m) => [...m, reply]);
    setLoading(false);
  }

  // No model call: a local reply with the contact buttons, then the input.
  function somethingElse() {
    setMessages((m) => [...m, { role: "assistant", content: SOMETHING_ELSE, action: "contact", local: true }]);
    inputRef.current?.focus({ preventScroll: true });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    ask(draft);
  }

  return (
    <div className="help-assistant">
      {open && (
        <section
          ref={panelRef}
          id="help-panel"
          role="dialog"
          aria-labelledby="help-title"
          tabIndex={-1}
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85dvh] flex-col overflow-hidden rounded-t-2xl border border-line bg-white text-ink shadow-[0_24px_60px_rgba(15,35,60,0.35)] outline-none min-[560px]:inset-x-auto min-[560px]:bottom-[calc(max(18px,env(safe-area-inset-bottom,0px))+68px)] min-[560px]:right-[max(18px,env(safe-area-inset-right,0px))] min-[560px]:max-h-[min(620px,calc(100dvh-120px))] min-[560px]:w-[380px] min-[560px]:rounded-2xl"
        >
          <div className="on-dark flex items-center gap-2.5 bg-primary px-4 py-3.5 text-white">
            <div>
              <h2 id="help-title" className="font-display text-[17px] font-semibold leading-tight">
                Chat British Help
              </h2>
              <p className="text-[12.5px] text-[#C9D6E8]">Automated assistant</p>
            </div>
            <button
              type="button"
              onClick={() => close(true)}
              aria-label="Close help"
              className="ml-auto grid h-11 w-11 place-items-center rounded-lg hover:bg-white/15"
            >
              <svg viewBox="0 0 12 12" aria-hidden="true" className="h-[18px] w-[18px]">
                <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            </button>
          </div>

          <div
            ref={listRef}
            aria-live="polite"
            aria-busy={loading}
            className="flex min-h-[160px] flex-1 flex-col gap-3 overflow-y-auto p-4"
          >
            <Bubble role="assistant">{GREETING}</Bubble>
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role}>
                {m.content}
                {m.role === "assistant" && m.action && m.action !== "none" && (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {m.action === "contact" ? (
                      <>
                        <ActionButton action="email" onNavigate={() => close(false)} />
                        {whatsappHelpHref && <ActionButton action="whatsapp" onNavigate={() => close(false)} />}
                      </>
                    ) : (
                      <ActionButton action={m.action} onNavigate={() => close(false)} />
                    )}
                  </div>
                )}
              </Bubble>
            ))}
            {loading && (
              <Bubble role="assistant">
                <span className="text-muted">Thinking…</span>
              </Bubble>
            )}
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-1.5 px-4 pb-2.5">
            {CHIPS.map((chip) => (
              <button key={chip} type="button" onClick={() => ask(chip)} disabled={loading} className={CHIP}>
                {chip}
              </button>
            ))}
            <button type="button" onClick={somethingElse} disabled={loading} className={CHIP}>
              Something else
            </button>
          </div>

          <form onSubmit={onSubmit} className="flex gap-2 border-t border-line px-3 pb-1 pt-2.5">
            <label htmlFor="help-input" className="sr-only">
              Ask a question
            </label>
            <input
              ref={inputRef}
              id="help-input"
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={HELP_INPUT_MAX}
              placeholder="Ask a question"
              autoComplete="off"
              className="min-h-[44px] min-w-0 flex-1 rounded-lg border-[1.5px] border-field bg-white px-3 text-base text-ink placeholder:text-muted focus:border-primary"
            />
            <button type="submit" disabled={loading || draft.trim() === ""} className="btn-primary px-4">
              Send
            </button>
          </form>
          <p className="px-3.5 pb-2.5 text-[12.5px] text-muted">Automated. Please don&apos;t share personal details.</p>

          <div className="flex flex-wrap items-center gap-2 border-t border-line bg-canvas px-3.5 pb-[max(12px,env(safe-area-inset-bottom,0px))] pt-2.5 text-[13.5px] text-muted">
            <span className="mr-auto">Prefer a person?</span>
            <a href={SUPPORT_MAILTO} className="btn-secondary min-h-[40px] px-3 py-1.5">
              Email
            </a>
            {whatsappHelpHref && (
              <a href={whatsappHelpHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp min-h-[40px] px-3 py-1.5">
                <WhatsAppIcon />
                WhatsApp
              </a>
            )}
          </div>
        </section>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close(false) : setOpen(true))}
        aria-expanded={open}
        aria-controls={open ? "help-panel" : undefined}
        className={`fixed bottom-[max(18px,env(safe-area-inset-bottom,0px))] right-[max(18px,env(safe-area-inset-right,0px))] z-50 inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-primary pl-4 pr-5 font-semibold text-white shadow-[0_10px_28px_rgba(15,35,60,0.35)] transition hover:bg-primary-dark ${
          open ? "max-[559px]:hidden" : ""
        }`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] shrink-0">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M4 5h16v11H11l-5 4v-4H4z" />
          <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Help
      </button>
    </div>
  );
}

const FALLBACK_TEXT = "Sorry, I can't answer right now. You can email us and a person will reply.";

const CHIP =
  "min-h-[36px] rounded-full border border-line bg-white px-3 text-[13.5px] font-medium text-primary hover:bg-sky disabled:opacity-50";

function Bubble({ role, children }: { role: "user" | "assistant"; children: React.ReactNode }) {
  return role === "user" ? (
    <div className="max-w-[88%] self-end rounded-[14px] rounded-br-[4px] bg-primary px-[13px] py-2.5 text-[15px] leading-normal text-white">
      {children}
    </div>
  ) : (
    <div className="max-w-[88%] self-start rounded-[14px] rounded-bl-[4px] bg-sky px-[13px] py-2.5 text-[15px] leading-normal text-ink">
      {children}
    </div>
  );
}

// The model picks an action; the link itself is ours.
function ActionButton({ action, onNavigate }: { action: HelpAction; onNavigate: () => void }) {
  const cls = "btn-primary min-h-[40px] px-3 py-1.5";
  switch (action) {
    case "practice":
      return <Link href="/practice" onClick={onNavigate} className={cls}>Start practising</Link>;
    case "debrief":
      return <Link href="/debrief" onClick={onNavigate} className={cls}>Try Debrief</Link>;
    case "privacy":
      return <Link href="/privacy" onClick={onNavigate} className={cls}>Privacy notice</Link>;
    case "email":
      return <a href={SUPPORT_MAILTO} className={cls}>Email support</a>;
    case "whatsapp":
      return whatsappHelpHref ? (
        <a href={whatsappHelpHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp min-h-[40px] px-3 py-1.5">
          <WhatsAppIcon />
          WhatsApp
        </a>
      ) : null;
    default:
      return null;
  }
}
