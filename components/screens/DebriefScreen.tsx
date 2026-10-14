"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import En from "@/components/En";
import PrivacyNote from "@/components/PrivacyNote";
import Nav from "@/components/Nav";
import { FA_ENABLED, getMessages, localeHref, type Locale } from "@/lib/i18n";
import { isMostlyArabicScript } from "@/lib/script-detect";
import { taxonomy } from "@/lib/mock-data";
import { hasScenarioForNorm } from "@/lib/scenarios";

type MatchedResult = {
  likely_norm: string;
  surface_signal: string;
  what_it_means: string;
  suggested_response: string;
};

type FollowUp = { question: string; answer: string };

type Phase =
  | { kind: "form" }
  | { kind: "follow_up"; question: string }
  | { kind: "matched"; result: MatchedResult }
  | { kind: "no_match"; message: string };

export default function DebriefScreen({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.debrief;
  // Debrief reads English only: text mostly in Arabic script (e.g. Persian)
  // is stopped here, before any request. Only with the Persian flag on.
  const [scriptBlocked, setScriptBlocked] = useState(false);
  const [description, setDescription] = useState("");
  const [followUpAnswer, setFollowUpAnswer] = useState("");
  const [phase, setPhase] = useState<Phase>({ kind: "form" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function callDebrief(followUp?: FollowUp) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/debrief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, followUp }),
      });
      const data = await res.json();

      if (!res.ok || data.status === "error") {
        // Persian pages show fixed Persian text; English keeps the server's message.
        setError(
          locale === "fa"
            ? res.status === 429
              ? t.rateLimited
              : t.genericError
            : (data.message ?? "Something went wrong. Please try again.")
        );
        return;
      }
      if (data.status === "needs_follow_up") {
        setFollowUpAnswer("");
        setPhase({ kind: "follow_up", question: data.question });
      } else if (data.status === "matched") {
        setPhase({ kind: "matched", result: data.result });
      } else if (data.status === "no_match") {
        setPhase({ kind: "no_match", message: data.message });
      }
    } catch {
      setError(t.genericError);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!description.trim() || loading) return;
    if (FA_ENABLED && isMostlyArabicScript(description)) {
      setScriptBlocked(true);
      return;
    }
    setScriptBlocked(false);
    callDebrief();
  }

  function handleFollowUpSubmit(e: FormEvent, question: string) {
    e.preventDefault();
    if (!followUpAnswer.trim() || loading) return;
    if (FA_ENABLED && isMostlyArabicScript(followUpAnswer)) {
      setScriptBlocked(true);
      return;
    }
    setScriptBlocked(false);
    callDebrief({ question, answer: followUpAnswer });
  }

  function startOver() {
    setPhase({ kind: "form" });
    setDescription("");
    setFollowUpAnswer("");
    setError(null);
    setScriptBlocked(false);
  }

  const matchedCategory =
    phase.kind === "matched" ? taxonomy.find((e) => e.normId === phase.result.likely_norm)?.category : undefined;
  // Opens Practice on this norm's scenario when an approved one exists;
  // otherwise the plain picker, as before.
  const practiceHref =
    phase.kind === "matched" && hasScenarioForNorm(phase.result.likely_norm)
      ? localeHref(locale, `/practice?norm=${encodeURIComponent(phase.result.likely_norm)}`)
      : localeHref(locale, "/practice");

  return (
    <div className="min-h-screen bg-canvas">
      <Nav locale={locale} />
      <div className="mx-auto max-w-xl px-6 py-16">
        <p className="eyebrow text-primary">{t.eyebrow}</p>
        <h1 className="mt-2 font-display text-2xl font-medium text-ink">{t.title}</h1>
        <p className="mt-3 text-muted">{t.intro}</p>
        {t.englishNote && <p className="mt-3 font-medium text-ink">{t.englishNote}</p>}

        {phase.kind === "form" && (
          <form onSubmit={handleSubmit} className="mt-8">
            <En locale={locale} as="div">
            <div className="relative">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="e.g. My landlord said he'd 'sort it when he gets a chance' about the broken boiler and it's been three weeks"
                aria-describedby="debrief-privacy"
                className="w-full rounded-lg border border-field bg-surface p-4 pe-12 text-sm text-ink placeholder:text-muted focus:border-primary"
              />
              <button
                type="button"
                title={t.voiceInput}
                className="absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-muted"
              >
                🎤
              </button>
            </div>
            <PrivacyNote id="debrief-privacy">What you write is sent to our AI providers to find a match.</PrivacyNote>
            </En>
            {scriptBlocked && <ScriptBlockedMessage locale={locale} />}
            <button
              type="submit"
              disabled={loading || !description.trim()}
              className="btn-primary mt-4"
            >
              {loading ? t.thinking : t.submit}
            </button>
          </form>
        )}

        {phase.kind === "follow_up" && (
          <form
            onSubmit={(e) => handleFollowUpSubmit(e, phase.question)}
            className="mt-10 rounded-lg border border-line bg-surface p-6"
          >
            <p className="eyebrow text-primary">{t.followUpEyebrow}</p>
            <En locale={locale} as="div">
              <p className="mt-2 text-sm leading-relaxed text-ink">{phase.question}</p>
            </En>
            <textarea
              value={followUpAnswer}
              onChange={(e) => setFollowUpAnswer(e.target.value)}
              rows={3}
              placeholder={t.followUpPlaceholder}
              {...(locale === "fa" ? { dir: "auto" } : {})}
              className="mt-4 w-full rounded-lg border border-field bg-surface p-3 text-sm text-ink placeholder:text-muted focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading || !followUpAnswer.trim()}
              className="btn-primary mt-4"
            >
              {loading ? t.thinking : t.send}
            </button>
            {scriptBlocked && <ScriptBlockedMessage locale={locale} />}
          </form>
        )}

        {error && (
          <div className="mt-6 rounded-lg border border-brick bg-brick/10 p-4">
            <p className="text-sm text-ink">{error}</p>
          </div>
        )}

        {phase.kind === "no_match" && (
          <div className="mt-10 rounded-lg border border-line bg-surface p-6">
            <p className="eyebrow text-primary">{t.noMatchTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{t.noMatchMessage || phase.message}</p>
            <button
              type="button"
              onClick={startOver}
              className="link mt-6 text-xs"
            >
              {t.tryDifferently}
            </button>
          </div>
        )}

        {phase.kind === "matched" && (
          <div className="mt-10 rounded-lg border border-line bg-surface p-6">
            {matchedCategory && <p className="text-xs text-muted">{m.categories[matchedCategory]}</p>}

            <Field locale={locale} label={t.surfaceSignal} value={phase.result.surface_signal} italic />
            <Field locale={locale} label={t.whatItMeans} value={phase.result.what_it_means} />
            <Field locale={locale} label={t.suggestedResponse} value={phase.result.suggested_response} />

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
              <Link href={practiceHref} className="btn-primary px-4 py-2 text-xs">
                {t.practiseNorm}
              </Link>
              <button
                type="button"
                onClick={startOver}
                className="link text-xs"
              >
                {t.describeAnother}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Answers are English on both locales.
function Field({ locale, label, value, italic }: { locale: Locale; label: string; value: string; italic?: boolean }) {
  return (
    <div className="mt-4">
      <p className="eyebrow text-primary">{label}</p>
      <p
        {...(locale === "fa" ? { lang: "en", dir: "ltr" } : {})}
        className={`mt-1 text-sm leading-relaxed text-ink ${italic ? "font-display italic" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}

// Shown instead of sending text written mostly in Arabic script. On English
// pages it also says it in Persian, for someone who typed Persian there.
function ScriptBlockedMessage({ locale }: { locale: Locale }) {
  return (
    <div role="alert" className="mt-4 rounded-lg border border-brick bg-brick/10 p-4 text-sm text-ink">
      <p>{getMessages(locale).debrief.englishOnly}</p>
      {locale === "en" && (
        <p lang="fa" dir="rtl" className="mt-2">
          {getMessages("fa").debrief.englishOnly}
        </p>
      )}
    </div>
  );
}
