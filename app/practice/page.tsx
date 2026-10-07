"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Nav from "@/components/Nav";
import CategoryIcon from "@/components/CategoryIcon";
import { CATEGORY_BLURBS } from "@/lib/mock-data";
import {
  drawSession,
  getCategoryScenarioCounts,
  getScenarioForNorm,
  getScenariosByCategory,
  shuffle,
  type Scenario,
} from "@/lib/scenarios";
import { getSeen, recordAnswer } from "@/lib/seen";
import { getStreak, incrementStreak } from "@/lib/streak";

type View = "picker" | "session" | "recap";

function pickCategoryWithScenarios(rankedCategories: string[]): string | null {
  for (const category of rankedCategories) {
    if (getScenariosByCategory(category).length > 0) return category;
  }
  return null;
}

function PracticeContent() {
  const searchParams = useSearchParams();
  const categoriesParam = searchParams.get("categories");
  const rankedCategories = categoriesParam ? categoriesParam.split(",").filter(Boolean) : [];

  // ?norm= comes from Debrief's "Practice this norm": when an approved
  // scenario exists for that norm, the session opens on it. Otherwise this
  // falls through to the onboarding ?categories= handling (or the picker).
  const normParam = searchParams.get("norm");
  const [handoffScenario] = useState(() => (normParam ? getScenarioForNorm(normParam) : undefined));

  const rankedCategory = handoffScenario ? null : pickCategoryWithScenarios(rankedCategories);
  const initialCategory = handoffScenario?.category ?? rankedCategory;
  const initialNoteCategory =
    !handoffScenario && rankedCategories.length > 0 && !rankedCategory ? rankedCategories[0] : null;

  const [view, setView] = useState<View>(initialCategory ? "session" : "picker");
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);
  const [prioritizedCategory] = useState<string | null>(rankedCategory);
  const [noteCategory, setNoteCategory] = useState<string | null>(initialNoteCategory);
  // This session's draw: up to SESSION_LENGTH random scenarios from the
  // category, fixed for the session so the progress bar and recap match it.
  const [sessionScenarios, setSessionScenarios] = useState<Scenario[]>(() =>
    initialCategory ? drawSession(initialCategory, handoffScenario, getSeen()) : []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  // The options actually rendered/answered against — a shuffled copy of the
  // current scenario's options, re-shuffled at each transition into a new
  // question (see startSession/goToNextOrRecap below) rather than derived
  // reactively, since revisiting the same (possibly single-question) category
  // can land on the same scenario object without any dependency changing.
  const [shuffledOptions, setShuffledOptions] = useState<Scenario["options"]>(() =>
    sessionScenarios[0] ? shuffle(sessionScenarios[0].options) : []
  );
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; feedback: string } | null>(null);
  const [barVisible, setBarVisible] = useState(false);

  // The feedback bar is `fixed inset-x-0 bottom-0`, so it's out of document
  // flow and can overlap the last option on narrow viewports unless the
  // scrollable content above reserves space for it. Its height varies with
  // feedback text length (longer explanations wrap to more lines on a narrow
  // phone), so it's measured via ResizeObserver rather than guessed as a
  // single fixed value — see feedbackBarHeight usage below.
  const feedbackBarRef = useRef<HTMLDivElement>(null);
  const [feedbackBarHeight, setFeedbackBarHeight] = useState(0);

  // The fixed feedback bar would sit over the sitewide footer at the bottom
  // of a question, so the footer is hidden while a question is on screen and
  // shown on the picker and recap (see body[data-practice-question] in
  // globals.css).
  useEffect(() => {
    if (view !== "session") return;
    document.body.dataset.practiceQuestion = "";
    return () => {
      delete document.body.dataset.practiceQuestion;
    };
  }, [view]);

  const [streak, setStreak] = useState(0);
  useEffect(() => {
    setStreak(getStreak());
  }, []);

  // Attaches once per session as soon as the bar first mounts (lastAnswer
  // goes null -> set on the first answered question) and stays attached for
  // the rest of the session, since the bar's DOM node persists across
  // questions (only its content/visibility change) — so this alone also
  // catches height changes from viewport resize or text rewrap, not just the
  // initial measurement.
  useEffect(() => {
    const el = feedbackBarRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setFeedbackBarHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [lastAnswer !== null]);

  // The paddingBottom above only helps once the page is actually scrolled —
  // nothing scrolled it there on its own, so right after answering, the bar
  // can still cover the option the user just chose. Auto-scroll so the chosen
  // option sits fully above the bar: fires once when a new answer lands
  // (using the pre-measurement fallback height) and again when
  // feedbackBarHeight updates to the real value shortly after — the second
  // call retargets the same in-flight smooth scroll to the corrected
  // position, so it self-corrects rather than needing exact ordering.
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    if (!lastAnswer || selected === null) return;
    const option = optionRefs.current[selected];
    if (!option) return;
    const barHeight = feedbackBarHeight > 0 ? feedbackBarHeight : 112;
    const margin = 12;
    const rect = option.getBoundingClientRect();
    const visibleBottom = window.innerHeight - barHeight - margin;
    // The nav is sticky, so the visible area starts below it, not at 0.
    const visibleTop = (document.querySelector("header")?.getBoundingClientRect().bottom ?? 0) + margin;
    let delta = 0;
    if (rect.bottom > visibleBottom) {
      // Scroll down until the option clears the bar, but never past its top.
      delta = Math.min(rect.bottom - visibleBottom, rect.top - visibleTop);
    } else if (rect.top < visibleTop) {
      delta = rect.top - visibleTop;
    }
    if (delta !== 0) window.scrollTo({ top: window.scrollY + delta, behavior: "smooth" });
    // `selected` changes in the same update as lastAnswer, so it's covered.
  }, [lastAnswer, feedbackBarHeight]);

  const categoryCounts = getCategoryScenarioCounts();
  const scenario = sessionScenarios[currentIndex];

  function startSession(category: string) {
    setActiveCategory(category);
    setCurrentIndex(0);
    setCorrectCount(0);
    setSelected(null);
    setLastAnswer(null);
    setBarVisible(false);
    setNoteCategory(null);
    setView("session");
    const draw = drawSession(category, undefined, getSeen());
    setSessionScenarios(draw);
    setShuffledOptions(draw[0] ? shuffle(draw[0].options) : []);
  }

  function choose(i: number) {
    if (selected !== null || !scenario) return;
    const opt = shuffledOptions[i];
    if (!opt) return;
    setSelected(i);
    if (opt.correct) setCorrectCount((c) => c + 1);
    setLastAnswer({ correct: opt.correct, feedback: opt.feedback });
    // Recorded per answer, not at the recap, so a session quit midway still
    // shapes the next draw.
    recordAnswer(scenario.id, opt.correct);
    requestAnimationFrame(() => setBarVisible(true));
  }

  function goToNextOrRecap() {
    setBarVisible(false);
    if (currentIndex + 1 < sessionScenarios.length) {
      const nextScenario = sessionScenarios[currentIndex + 1];
      setShuffledOptions(shuffle(nextScenario.options));
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    } else {
      setStreak(incrementStreak());
      setView("recap");
    }
  }

  function practiceAnotherCategory() {
    setActiveCategory(null);
    setNoteCategory(null);
    setBarVisible(false);
    setView("picker");
  }

  function restartCategory() {
    if (activeCategory) startSession(activeCategory);
  }

  const streakLine = <p className="text-sm text-muted">🔥 {streak} day streak</p>;

  if (view === "picker") {
    return (
      <div className="mx-auto max-w-xl px-6 py-16">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-primary">Practice</p>
          {streakLine}
        </div>

        <div className="rule-double mt-3" aria-hidden="true" />
        <h1 className="mt-3 font-display text-2xl font-medium text-ink">Choose a category</h1>

        {noteCategory && (
          <p className="mt-4 eyebrow text-primary">
            We don&apos;t have practice scenarios for {noteCategory} yet — pick another to get started
          </p>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {categoryCounts.map(({ category, count }) => {
            const disabled = count === 0;
            return (
              <button
                key={category}
                type="button"
                disabled={disabled}
                onClick={() => !disabled && startSession(category)}
                className={`flex flex-col overflow-hidden rounded-lg border text-left transition ${
                  disabled ? "cursor-not-allowed border-line bg-white/50" : "border-line bg-white hover:shadow-md"
                }`}
              >
                {/* Coming-soon cards get a muted band instead of primary. */}
                <p className={`eyebrow px-4 py-2.5 text-white ${disabled ? "bg-muted" : "bg-primary"}`}>{category}</p>
                <div className="flex flex-1 items-start gap-4 p-4">
                  <CategoryIcon
                    category={category}
                    className={`h-11 w-11 shrink-0 ${disabled ? "text-muted" : "text-ink"}`}
                  />
                  <div>
                    <p className="text-sm text-muted">{CATEGORY_BLURBS[category]}</p>
                    <p className={`mt-3 eyebrow ${disabled ? "text-muted" : "text-primary"}`}>
                      {disabled
                        ? "No scenarios yet — coming soon"
                        : `${count} scenario${count === 1 ? "" : "s"}`}
                    </p>
                  </div>
                </div>
                <div className={`h-0.5 ${disabled ? "bg-line" : "bg-primary"}`} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (view === "recap") {
    const total = sessionScenarios.length;
    const ratio = total > 0 ? correctCount / total : 0;
    const message =
      ratio === 1
        ? "All correct — that's exactly the instinct you want here."
        : ratio === 0
          ? "Worth another look — everyone needs a few passes at these."
          : "Good start — a couple worth revisiting when you're ready.";
    const missedAny = correctCount < total;

    return (
      <div className="mx-auto max-w-xl px-6 py-16">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-primary">Practice</p>
          {streakLine}
        </div>

        {/* Rail-ticket stub: score above the tear line, record below it. The
            notches are masks, so the outline is a drop-shadow on the wrapper. */}
        <div className="cut-outline mt-6">
          <div className="ticket-top bg-white">
            <div className="flex min-h-[2.25rem] items-center bg-primary px-6 py-2.5">
              {activeCategory && <p className="eyebrow text-white">{activeCategory}</p>}
            </div>
            <div className="px-6 pb-6 pt-5">
              <h1 className="font-display text-2xl font-medium text-ink">Session complete</h1>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-6xl font-medium text-ink">{correctCount}</span>
                <span className="text-lg text-muted">/ {total} correct</span>
              </div>

              <p className="mt-3 text-muted">{message}</p>
            </div>
          </div>
          <div className="ticket-stub bg-white px-6 pb-5">
            <div className="mx-2 border-t-2 border-dashed border-line" aria-hidden="true" />
            <div className="space-y-1 pt-4">
              <p className="text-sm text-muted">🔥 {streak} day streak</p>
              {missedAny && <p className="text-sm text-muted">The ones you missed will come back first.</p>}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            type="button"
            onClick={practiceAnotherCategory}
            className="btn-primary w-full sm:w-auto"
          >
            Practise another category
          </button>
          <button
            type="button"
            onClick={restartCategory}
            className="btn-secondary w-full sm:w-auto"
          >
            Back to this category
          </button>
        </div>
      </div>
    );
  }

  if (!scenario) return null;

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <div className="flex items-center justify-between">
        <p className="eyebrow text-primary">Practice</p>
        {streakLine}
      </div>

      {activeCategory && prioritizedCategory === activeCategory && (
        <p className="mt-2 eyebrow text-primary">
          Prioritized for you: {activeCategory}
        </p>
      )}

      <div className="mt-4 flex gap-1.5">
        {sessionScenarios.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i < currentIndex ? "bg-primary" : i === currentIndex ? "bg-primary/40" : "bg-line"
            }`}
          />
        ))}
      </div>

      {/* The spreadsheet has no per-scenario title, so the heading is the category. */}
      <h1 className="mt-4 font-display text-2xl font-medium text-ink">{scenario.category}</h1>

      <div
        className="mt-8 rounded-lg border border-line bg-white p-6"
        // Reserves room for the fixed feedback bar below once it's shown, so
        // the last option never ends up hidden behind it — see
        // feedbackBarHeight's ResizeObserver setup above. 112px matches the
        // bar's typical single-line height as a fallback before the first
        // measurement resolves; +24 is breathing room above the bar itself.
        style={lastAnswer ? { paddingBottom: (feedbackBarHeight > 0 ? feedbackBarHeight + 24 : 112) + "px" } : undefined}
      >
        <p className="text-sm leading-relaxed text-muted">{scenario.setup}</p>
        <p className="mt-4 font-display text-lg italic text-ink">{scenario.prompt}</p>

        <div className="mt-6 space-y-3">
          {shuffledOptions.map((opt, i) => {
            const isChosen = selected === i;
            const showState = selected !== null;
            return (
              <button
                key={i}
                ref={(el) => {
                  optionRefs.current[i] = el;
                }}
                onClick={() => choose(i)}
                disabled={selected !== null}
                className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left text-sm transition ${
                  showState && opt.correct
                    ? "border-sage bg-sage-light text-ink"
                    : showState && isChosen && !opt.correct
                      ? "border-brick bg-brick-light text-ink"
                      : "border-line bg-white text-ink hover:border-primary disabled:hover:border-line"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                    showState && opt.correct
                      ? "border-sage text-sage"
                      : showState && isChosen && !opt.correct
                        ? "border-brick text-brick"
                        : "border-line"
                  }`}
                >
                  {i + 1}
                </span>
                <span>{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {lastAnswer && (
        <div
          ref={feedbackBarRef}
          className={`fixed inset-x-0 bottom-0 border-t transition-transform duration-300 ease-out ${
            barVisible ? "" : "translate-y-full"
          } ${lastAnswer.correct ? "border-sage bg-sage-light" : "border-brick bg-brick-light"}`}
        >
          {/* Below sm the layout stacks (icon + verdict, explanation, full-width
              button) so the explanation gets the full width; a
              side-by-side button squeezed it into a column tall enough to
              cover most of a phone screen. From sm up it's side by side. */}
          <div className="mx-auto grid max-w-2xl grid-cols-[auto_1fr] items-center gap-x-3 px-6 py-3 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-x-4 sm:py-5">
            <span
              className={`col-start-1 row-start-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white sm:row-span-3 ${
                lastAnswer.correct ? "bg-sage" : "bg-brick"
              }`}
            >
              {lastAnswer.correct ? "✓" : "✕"}
            </span>
            <p
              className={`col-start-2 row-start-1 text-sm font-semibold ${
                lastAnswer.correct ? "text-sage" : "text-brick"
              }`}
            >
              {lastAnswer.correct ? "That lands well" : "Not quite"}
            </p>
            <p className="col-span-2 row-start-2 mt-1.5 text-sm leading-snug text-muted sm:col-span-1 sm:col-start-2 sm:mt-1 sm:leading-relaxed">
              {lastAnswer.feedback}
            </p>
            <button
              type="button"
              onClick={goToNextOrRecap}
              className="col-span-2 row-start-3 mt-3 w-full rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark sm:col-span-1 sm:col-start-3 sm:row-span-3 sm:row-start-1 sm:mt-0 sm:w-auto sm:self-center sm:py-3"
            >
              {currentIndex + 1 < sessionScenarios.length ? "Next question" : "See results"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <Suspense fallback={null}>
        <PracticeContent />
      </Suspense>
    </div>
  );
}
