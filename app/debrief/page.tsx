"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
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

export default function DebriefPage() {
  const [description, setDescription] = useState("");
  const [followUpAnswer, setFollowUpAnswer] = useState("");
  const [phase, setPhase] = useState<Phase>({ kind: "form" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

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
        setError(data.message ?? "Something went wrong. Please try again.");
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
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!description.trim() || loading) return;
    setSaved(false);
    callDebrief();
  }

  function handleFollowUpSubmit(e: FormEvent, question: string) {
    e.preventDefault();
    if (!followUpAnswer.trim() || loading) return;
    callDebrief({ question, answer: followUpAnswer });
  }

  function startOver() {
    setPhase({ kind: "form" });
    setDescription("");
    setFollowUpAnswer("");
    setError(null);
    setSaved(false);
  }

  const matchedCategory =
    phase.kind === "matched" ? taxonomy.find((e) => e.normId === phase.result.likely_norm)?.category : undefined;
  // Opens Practice on this norm's scenario when an approved one exists;
  // otherwise the plain picker, as before.
  const practiceHref =
    phase.kind === "matched" && hasScenarioForNorm(phase.result.likely_norm)
      ? `/practice?norm=${encodeURIComponent(phase.result.likely_norm)}`
      : "/practice";

  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <div className="mx-auto max-w-xl px-6 py-16">
        <p className="eyebrow text-primary">Debrief</p>
        <h1 className="mt-2 font-display text-2xl font-medium text-ink">What happened?</h1>
        <p className="mt-3 text-muted">
          Describe a moment that confused you — in your own words. No need to know what category it
          falls under.
        </p>

        {phase.kind === "form" && (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="relative">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="e.g. My landlord said he'd 'sort it when he gets a chance' about the broken boiler and it's been three weeks"
                className="w-full rounded-lg border border-field bg-white p-4 pr-12 text-sm text-ink placeholder:text-muted/70 focus:border-primary"
              />
              <button
                type="button"
                title="Voice input (not wired up in this shell)"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-muted"
              >
                🎤
              </button>
            </div>
            <button
              type="submit"
              disabled={loading || !description.trim()}
              className="btn-primary mt-4"
            >
              {loading ? "Thinking…" : "Explain this"}
            </button>
          </form>
        )}

        {phase.kind === "follow_up" && (
          <form
            onSubmit={(e) => handleFollowUpSubmit(e, phase.question)}
            className="mt-10 rounded-lg border border-line bg-white p-6"
          >
            <p className="eyebrow text-primary">One quick check</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{phase.question}</p>
            <textarea
              value={followUpAnswer}
              onChange={(e) => setFollowUpAnswer(e.target.value)}
              rows={3}
              placeholder="Your answer"
              className="mt-4 w-full rounded-lg border border-field bg-white p-3 text-sm text-ink placeholder:text-muted/70 focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading || !followUpAnswer.trim()}
              className="btn-primary mt-4"
            >
              {loading ? "Thinking…" : "Send"}
            </button>
          </form>
        )}

        {error && (
          <div className="mt-6 rounded-lg border border-brick bg-brick/10 p-4">
            <p className="text-sm text-ink">{error}</p>
          </div>
        )}

        {phase.kind === "no_match" && (
          <div className="mt-10 rounded-lg border border-line bg-white p-6">
            <p className="eyebrow text-primary">No close match yet</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{phase.message}</p>
            <button
              type="button"
              onClick={startOver}
              className="link mt-6 text-xs"
            >
              Try describing it differently
            </button>
          </div>
        )}

        {phase.kind === "matched" && (
          <div className="mt-10 rounded-lg border border-line bg-white p-6">
            {matchedCategory && <p className="text-xs text-muted">{matchedCategory}</p>}

            <Field label="Surface signal" value={phase.result.surface_signal} italic />
            <Field label="What it actually means" value={phase.result.what_it_means} />
            <Field label="Suggested response" value={phase.result.suggested_response} />

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
              <Link href={practiceHref} className="btn-primary px-4 py-2 text-xs">
                Practise this norm
              </Link>
              <button
                onClick={() => setSaved(true)}
                className="link text-xs"
              >
                {saved ? "Saved to your log" : "Save to my log"}
              </button>
              <button
                type="button"
                onClick={startOver}
                className="link text-xs"
              >
                Describe another moment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, italic }: { label: string; value: string; italic?: boolean }) {
  return (
    <div className="mt-4">
      <p className="eyebrow text-primary">{label}</p>
      <p className={`mt-1 text-sm leading-relaxed text-ink ${italic ? "font-display italic" : ""}`}>{value}</p>
    </div>
  );
}
