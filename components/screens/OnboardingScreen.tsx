"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import En from "@/components/En";
import Nav from "@/components/Nav";
import { FA_ENABLED, fmt, fmtNodes, getMessages, localeHref, type Locale } from "@/lib/i18n";
import { CATEGORY_LABELS, ROLES, SITUATIONS, computeStartingPoint } from "@/lib/mock-data";
import PrivacyNote from "@/components/PrivacyNote";
import { isMostlyArabicScript } from "@/lib/script-detect";
import { ensureAnonymousUserId, getSupabaseBrowser } from "@/lib/supabase-browser";

const TIME_IN_UK = ["Just arrived", "Under 1 year", "1–3 years", "3+ years"];
const HOUSEHOLD = ["Living alone", "With a partner", "With family or kids", "With flatmates or housemates"];
const SECTORS = ["Tech", "Healthcare", "Hospitality", "Education", "Trades", "Other"];
// Goal is stored on the users row but not scored into computeStartingPoint()
// — an unchanged decision from earlier, still true with this longer list.
// Each goal's stored value is the full English sentence, in both languages.
// The chip shows a short bold label above a sentence, both display only,
// from messages (onboarding.goals, keyed by the stored sentence).
const GOALS = [
  "Feel more confident in day-to-day conversations",
  "Excel in professional & workplace settings",
  "Blend in socially and master British humour",
  "Prepare for an upcoming event or relocation",
  "Learn indirect language, etiquette, and polite phrasing",
  "Switch from American English to British equivalents",
  "Understand something specific that confused me",
];

// Sector is only collected when one of these situations was picked in step 1.
// Canonical category names, matching what `situations` stores.
const SECTOR_SITUATIONS: string[] = [CATEGORY_LABELS.WP, CATEGORY_LABELS.JS];

const TOTAL_STEPS = 3;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Floor on /api/classify-struggle's similarity score below which the result
// is treated as no classification at all (same as a failed/null response) —
// too low to trust as a signal into computeStartingPoint(). [struggle-classify]
// still logs every score unconditionally server-side regardless of this floor,
// so real usage data keeps accumulating for a future recalibration pass.
const STRUGGLE_CATEGORY_FLOOR = 0.3;

// The Persian starting-point summary, built from the same inputs as the
// English one in computeStartingPoint() (which stays the scoring source).
// Situations are listed in SITUATIONS order, as the English summary does.
function persianSummary(situations: string[], timeInUk: string, rankedCategories: string[]): string {
  const m = getMessages("fa");
  const join = (items: string[]) =>
    items.length <= 1
      ? (items[0] ?? "")
      : `${items.slice(0, -1).join(m.onboarding.listSeparator)}${m.onboarding.listAnd}${items[items.length - 1]}`;
  const situationLabels = SITUATIONS.filter((s) => situations.includes(CATEGORY_LABELS[s.category])).map(
    (s) => m.onboarding.situations[s.category].label
  );
  const categoryLabels = rankedCategories.map(
    (c) => m.categories[c as keyof typeof m.categories] ?? c
  );
  const template =
    timeInUk === "Just arrived"
      ? m.onboarding.summaryJustArrived
      : timeInUk === "Under 1 year"
        ? m.onboarding.summaryUnderOneYear
        : timeInUk === "3+ years"
          ? m.onboarding.summaryThreePlus
          : m.onboarding.summaryOther;
  return fmt(template, { situations: join(situationLabels), categories: join(categoryLabels) });
}

function Chip({
  selected,
  onClick,
  title,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={selected}
      className={`rounded-lg border px-4 py-2 text-sm transition ${
        selected
          ? "border-primary bg-primary text-on-primary"
          : "border-line bg-surface text-ink hover:border-primary hover:shadow-md"
      }`}
    >
      {children}
    </button>
  );
}

export default function OnboardingScreen({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.onboarding;
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [situations, setSituations] = useState<string[]>([]);
  const [household, setHousehold] = useState("");
  const [timeInUk, setTimeInUk] = useState("");
  const [role, setRole] = useState("");
  const [sector, setSector] = useState("");
  const [city, setCity] = useState("");
  const [struggle, setStruggle] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");

  const [userId, setUserId] = useState<string | null>(null);
  // True once the anonymous auth bootstrap below has settled, success or
  // failure. Gates the final submit so it can't fire mid-bootstrap on a slow
  // connection; on failure it still flips true so the retry-on-submit path
  // in handleSubmit can kick in instead of leaving the form stuck.
  const [authChecked, setAuthChecked] = useState(false);
  const [saving, setSaving] = useState(false);
  // Belt-and-suspenders alongside the `saving` state: a ref updates
  // synchronously, so it closes the window where a rapid double-tap (common
  // on laggy mobile UI) fires handleSubmit twice before React re-renders the
  // disabled button.
  const submittingRef = useRef(false);
  const [saveFailed, setSaveFailed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [startingPoint, setStartingPoint] = useState<{ rankedCategories: string[]; summary: string } | null>(
    null
  );

  // Anonymous auth bootstrap: reuse the persisted session, or create one.
  useEffect(() => {
    let cancelled = false;
    ensureAnonymousUserId()
      .then((id) => {
        if (!cancelled) setUserId(id);
      })
      .catch((err) => {
        // Not fatal: submit retries, and falls back to an unsaved profile.
        console.error("Anonymous sign-in failed:", err);
      })
      .finally(() => {
        if (!cancelled) setAuthChecked(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const showSector = situations.some((s) => SECTOR_SITUATIONS.includes(s));
  const trimmedEmail = email.trim();
  const emailValid = trimmedEmail === "" || EMAIL_PATTERN.test(trimmedEmail);

  const canProceed =
    step === 0
      ? situations.length > 0
      : step === 1
        ? household !== "" && timeInUk !== "" && role !== ""
        : struggle.trim() !== "" && goal !== "" && emailValid;

  const isLastStep = step === TOTAL_STEPS - 1;

  // Stores the canonical category name, not the chip's display label.
  function toggleSituation(category: string) {
    setSituations((prev) => (prev.includes(category) ? prev.filter((s) => s !== category) : [...prev, category]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // authChecked guards against the upsert firing while the anonymous
    // session bootstrap (see effect above) is still in flight — plausible on
    // a slow mobile connection, where the network round trip for
    // signInAnonymously can still be pending by the time someone reaches the
    // last step.
    if (!isLastStep || !canProceed || saving || !authChecked || submittingRef.current) return;
    submittingRef.current = true;

    setSaving(true);
    setSaveFailed(false);

    // Struggle-text classification: an extra signal into computeStartingPoint(),
    // best-effort only. Isolated in its own try/catch so a failure here (network
    // issue, no match, etc.) can never block or delay the actual submission below
    // — it just falls back to computing the starting point without it.
    let struggleCategory: string | null = null;
    // Text written mostly in Arabic script (e.g. Persian) is saved as written
    // but not classified: the classifier's reference texts are English. The
    // ranking then goes without this signal, as it does on a 429.
    const skipClassify = FA_ENABLED && isMostlyArabicScript(struggle);
    try {
      const res = skipClassify
        ? null
        : await fetch("/api/classify-struggle", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ struggle: struggle.trim() }),
          });
      if (res?.ok) {
        const data = (await res.json()) as { topCategory?: string | null; similarity?: number };
        if (data.topCategory && (data.similarity ?? 0) >= STRUGGLE_CATEGORY_FLOOR) {
          struggleCategory = data.topCategory;
        }
      }
    } catch (err) {
      console.error("[struggle-classify] request failed:", err);
    }

    const computed = computeStartingPoint(situations, timeInUk, role, struggleCategory);
    try {
      const id = userId ?? (await ensureAnonymousUserId());
      setUserId(id);

      // Upsert (not insert): a returning anonymous user redoing onboarding
      // updates their existing row instead of conflicting on the primary key.
      const { error } = await getSupabaseBrowser()
        .from("users")
        .upsert(
          {
            id,
            situations,
            time_in_uk: timeInUk,
            household,
            role,
            sector: showSector && sector ? sector : null,
            city: city.trim() || null,
            struggle: struggle.trim(),
            goal,
            email: trimmedEmail || null,
            ranked_categories: computed.rankedCategories,
          },
          { onConflict: "id" }
        );
      if (error) throw error;

      setSaved(true);
      setStartingPoint(computed);
    } catch (err) {
      // Full Supabase error (code/message/details), not just the generic
      // message shown to the user below — needed to diagnose failures like
      // the slow-mobile-connection reports.
      console.error("[onboarding-upsert-failed]", err);
      setSaveFailed(true);
    } finally {
      setSaving(false);
      submittingRef.current = false;
    }
  }

  // Escape hatch when saving fails: better to let someone practice with an
  // unsaved profile than to hard-block them.
  function continueWithoutSaving() {
    setStartingPoint(computeStartingPoint(situations, timeInUk, role));
  }

  if (startingPoint) {
    return (
      <div className="min-h-screen bg-canvas">
        <Nav locale={locale} />
        <div className="mx-auto max-w-xl px-6 py-16">
          <h1 className="font-display text-3xl font-medium text-ink">{t.resultTitle}</h1>
          <p className="mt-4 max-w-prose text-muted">
            {locale === "fa"
              ? persianSummary(situations, timeInUk, startingPoint.rankedCategories)
              : startingPoint.summary}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {startingPoint.rankedCategories.map((category, i) => (
              <div key={category} className="rounded-lg border border-line bg-surface p-4">
                <p className="eyebrow text-primary">{fmtNodes(t.priority, { n: i + 1 })}</p>
                <p className="mt-1 text-sm text-ink">{m.categories[category as keyof typeof m.categories] ?? category}</p>
              </div>
            ))}
          </div>

          {!saved && (
            <p className="mt-6 text-xs text-muted">{t.notSaved}</p>
          )}

          <button
            type="button"
            onClick={() => {
              const categories = encodeURIComponent(startingPoint.rankedCategories.join(","));
              const situationsParam = encodeURIComponent(situations.join(","));
              router.push(localeHref(locale, `/practice?categories=${categories}&situations=${situationsParam}`));
            }}
            className="btn-primary mt-10"
          >
            {t.startPracticing}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Nav locale={locale} />
      <div className="mx-auto max-w-xl px-6 py-16">
        <p className="eyebrow text-primary">{fmtNodes(t.stepOf, { n: step + 1, total: TOTAL_STEPS })}</p>
        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < step ? "bg-primary" : i === step ? "bg-primary/40" : "bg-line"
              }`}
            />
          ))}
        </div>

        <h1 className="mt-6 font-display text-3xl font-medium text-ink">{t.title}</h1>
        <p className="mt-3 text-muted">{t.intro}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          {step === 0 && (
            <fieldset>
              <legend className="text-sm font-medium text-ink">{t.situationsQ}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {SITUATIONS.map((s) => (
                  <Chip
                    key={s.label}
                    selected={situations.includes(CATEGORY_LABELS[s.category])}
                    onClick={() => toggleSituation(CATEGORY_LABELS[s.category])}
                    title={t.situations[s.category].description}
                  >
                    {t.situations[s.category].label}
                  </Chip>
                ))}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <>
              <fieldset>
                <legend className="text-sm font-medium text-ink">{t.householdQ}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {HOUSEHOLD.map((h) => (
                    <Chip key={h} selected={household === h} onClick={() => setHousehold(h)}>
                      {t.household[h as keyof typeof t.household]}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-medium text-ink">{t.timeInUkQ}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TIME_IN_UK.map((v) => (
                    <Chip key={v} selected={timeInUk === v} onClick={() => setTimeInUk(v)}>
                      {t.timeInUk[v as keyof typeof t.timeInUk]}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-medium text-ink">{t.roleQ}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <Chip key={r} selected={role === r} onClick={() => setRole(r)}>
                      {t.roles[r as keyof typeof t.roles] ?? r}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              {showSector && (
                <fieldset>
                  <legend className="text-sm font-medium text-ink">
                    {`${t.sectorQ} `}
                    <span className="font-normal text-muted">{t.optional}</span>
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SECTORS.map((s) => (
                      <Chip key={s} selected={sector === s} onClick={() => setSector(sector === s ? "" : s)}>
                        {t.sectors[s as keyof typeof t.sectors]}
                      </Chip>
                    ))}
                  </div>
                </fieldset>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label htmlFor="city" className="text-sm font-medium text-ink">
                  {t.cityLabel}
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={t.cityPlaceholder}
                  {...(locale === "fa" ? { dir: "auto" } : {})}
                  className="mt-3 w-full rounded-lg border border-field bg-surface p-3 text-sm text-ink placeholder:text-muted focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="struggle" className="text-sm font-medium text-ink">
                  {t.struggleLabel}
                </label>
                <textarea
                  id="struggle"
                  value={struggle}
                  onChange={(e) => setStruggle(e.target.value)}
                  rows={3}
                  placeholder={t.strugglePlaceholder}
                  {...(locale === "fa" ? { dir: "auto" } : {})}
                  aria-describedby="struggle-privacy"
                  className="mt-3 w-full rounded-lg border border-field bg-surface p-3 text-sm text-ink placeholder:text-muted focus:border-primary"
                />
                {t.struggleLanguageNote && <p className="mt-2 text-xs leading-relaxed text-muted">{t.struggleLanguageNote}</p>}
                <En locale={locale} as="div">
                  <PrivacyNote id="struggle-privacy">We use what you write to personalise what you see.</PrivacyNote>
                </En>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-ink">{t.goalQ}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <Chip key={g} selected={goal === g} onClick={() => setGoal(g)}>
                      <span className="block text-start">
                        <span className="block font-semibold">{t.goals[g as keyof typeof t.goals].label}</span>
                        <span className="mt-0.5 block font-normal">{t.goals[g as keyof typeof t.goals].text}</span>
                      </span>
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  {t.emailLabel} <span className="font-normal text-muted">{t.optional}</span>
                </label>
                <input
                  id="email"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  {...(locale === "fa" ? { dir: "ltr" } : {})}
                  aria-invalid={!emailValid}
                  aria-describedby={!emailValid ? "email-privacy email-error" : "email-privacy"}
                  className="mt-3 w-full rounded-lg border border-field bg-surface p-3 text-sm text-ink placeholder:text-muted focus:border-primary"
                />
                <En locale={locale} as="div">
                  <PrivacyNote id="email-privacy">
                    Optional. We&apos;ll only use it to tell you about courses that might suit you, and you can ask us to stop at any time.
                  </PrivacyNote>
                </En>
                {!emailValid && (
                  <p id="email-error" className="mt-2 text-xs text-brick">
                    {t.emailError}
                  </p>
                )}
              </div>
            </>
          )}

          {saveFailed && (
            <div role="alert" className="rounded-lg border border-brick/40 bg-surface p-4 text-sm text-ink">
              <p>{t.saveFailed}</p>
              <button
                type="button"
                onClick={continueWithoutSaving}
                className="link mt-2 text-sm"
              >
                {t.continueWithoutSaving}
              </button>
            </div>
          )}

          <div className="flex items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                disabled={saving}
                className="btn-secondary"
              >
                {t.back}
              </button>
            )}
            {isLastStep ? (
              <button
                type="submit"
                disabled={!canProceed || saving || !authChecked}
                className="btn-primary"
              >
                {!authChecked ? t.preparing : saving ? t.saving : saveFailed ? t.tryAgain : t.seeStartingPoint}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed}
                className="btn-primary"
              >
                {t.next}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
