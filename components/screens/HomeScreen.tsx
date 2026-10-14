import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import En from "@/components/En";
import MarginNote from "@/components/MarginNote";
import { WhatsAppIcon } from "@/components/SocialIcons";
import UnionJack from "@/components/UnionJack";
import DebriefSample from "@/components/home/DebriefSample";
import FounderVideo from "@/components/home/FounderVideo";
import { Phone, PracticeQuestionScreen, RecapScreen } from "@/components/home/Phone";
import SiteHeader from "@/components/home/SiteHeader";
import SituationArt, { type SituationArtName } from "@/components/home/SituationArt";
import { founder } from "@/content/founder";
import { whatsappHref } from "@/lib/contact";
import { counts, heroNorm, heroScenario, ledgerRows, numberWord } from "@/lib/home-data";
import { fmt, fmtNodes, getMessages, localeHref, type Locale } from "@/lib/i18n";
import type { NormEntry } from "@/lib/mock-data";
import { getScenariosByCategory } from "@/lib/scenarios";

const SITUATIONS: { art: SituationArtName; category: NormEntry["category"] }[] = [
  { art: "workplace", category: "Workplace" },
  { art: "housing", category: "Housing & landlord" },
  { art: "healthcare", category: "Healthcare" },
  { art: "social", category: "Social" },
  { art: "money", category: "Money & transactions" },
  { art: "transport", category: "Transport & commuting" },
];

// Practice reads ?categories= (a ranked list, as onboarding sends it) and
// starts a session in the first one that has scenarios. The category stays
// the canonical English name in both languages.
function practiceHref(locale: Locale, category: string): string {
  return getScenariosByCategory(category).length > 0
    ? localeHref(locale, `/practice?categories=${encodeURIComponent(category)}`)
    : localeHref(locale, "/practice");
}

// The founder section needs both a video and a bio; until then it isn't
// rendered at all. Facts show only when filled in content/founder.ts.
const founderVideoId = (process.env.NEXT_PUBLIC_FOUNDER_VIDEO_ID ?? "").trim();
const showFounder = founderVideoId !== "" && founder.bio.trim() !== "";
const founderPoster = fs.existsSync(path.join(process.cwd(), "public", "founder-poster.webp"))
  ? "/founder-poster.webp"
  : null;

const H2 = "font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink";
const H2_SMALL = "font-display text-[clamp(1.8rem,3.3vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink";
const H3_TOUR = "font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink";

// The home page in either language. On Persian pages the hero collage, the
// two sample frames and the ledger rows stay English (they show scenario and
// taxonomy text, like screenshots), each marked lang="en" dir="ltr".
export default function HomeScreen({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const h = m.home;
  const href = (p: string) => localeHref(locale, p);

  const proofFigures = [
    { figure: String(counts.norms), label: h.proofNorms },
    { figure: String(counts.situations), label: h.proofSituations },
    { figure: String(counts.scenarios), label: h.proofScenarios },
    { figure: h.proofReviewedFigure, label: h.proofReviewedLabel },
  ];
  const founderFacts = [
    { value: founder.facts.clients, label: h.founderClients },
    { value: founder.facts.followers, label: h.founderFollowers },
    { value: founder.facts.years, label: h.founderYears },
  ].filter((fact) => fact.value.trim() !== "");
  // English spells the count out ("Twelve"); Persian uses Latin digits.
  const situationsCount = locale === "fa" ? String(counts.situations) : numberWord(counts.situations);

  return (
    <div className="min-h-screen bg-canvas text-[17px] leading-[1.6]">
      <SiteHeader locale={locale} />

      <main id="top">
        {/* Hero */}
        <div className="wrap grid gap-[34px] pb-11 pt-11 min-[980px]:grid-cols-[minmax(0,1fr)_520px] min-[980px]:items-center min-[980px]:gap-10 min-[980px]:pt-16">
          <div>
            <p className="mb-[22px] flex items-center gap-2.5 text-[15px] text-muted">
              <UnionJack id="tagline" />
              {h.tagline}
            </p>
            <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink [text-wrap:balance]">
              <span className="block">{h.heroLine1}</span>
              <span className="block">{h.heroLine2}</span>
            </h1>
            <p className="mt-[22px] max-w-[30em] text-lg text-muted">{h.heroLead}</p>
            <div className="mt-[30px] flex flex-wrap gap-3.5">
              <Link href={href("/onboarding")} className="btn-primary w-full min-[560px]:w-auto">
                {h.startProfile}
              </Link>
              <Link href={href("/debrief")} className="btn-secondary w-full min-[560px]:w-auto">
                {h.tryDebrief}
              </Link>
            </div>
            <p className="mt-4 text-[15px] text-muted">{h.noAccount}</p>
          </div>

          {/* Collage: overlapping on wide screens, stacked below 980px. */}
          <En locale={locale} as="div">
            <div className="flex flex-col items-center gap-[34px] min-[980px]:relative min-[980px]:block min-[980px]:min-h-[590px]">
              {heroNorm && <StampCard norm={heroNorm} />}
              <MarginNote className="-mt-3 ml-[8%] -rotate-[5deg] self-start min-[980px]:absolute min-[980px]:left-2 min-[980px]:top-[336px] min-[980px]:m-0">
                i.e. probably not.
              </MarginNote>
              {heroScenario && (
                <div className="min-[980px]:absolute min-[980px]:right-0 min-[980px]:top-0">
                  <Phone
                    label={`A sample Practice question on a phone, in ${heroScenario.scenario.category}: ${heroScenario.scenario.setup} The chosen answer, “${heroScenario.chosen.text}”, is marked wrong, the right answer is highlighted, and the feedback says: ${heroScenario.chosen.feedback}`}
                  >
                    <PracticeQuestionScreen {...heroScenario} />
                  </Phone>
                </div>
              )}
            </div>
          </En>
        </div>

        {/* Proof strip: figures from the generated data at build time. */}
        <section aria-label={h.proofLabel} className="mt-2 border-y border-line">
          <ul className="wrap grid grid-cols-2 min-[760px]:grid-cols-4">
            {proofFigures.map((item, i) => (
              <li
                key={item.label}
                className={`py-[22px] pe-5 ${
                  i === 0
                    ? ""
                    : i === 2
                      ? "min-[760px]:border-s min-[760px]:border-line min-[760px]:ps-5"
                      : "border-s border-line ps-5"
                } ${i >= 2 ? "border-t border-line min-[760px]:border-t-0" : ""}`}
              >
                <b className="block font-display text-[30px] font-semibold leading-[1.1] text-ink">{item.figure}</b>
                <span className="text-[15px] text-muted">{item.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {showFounder && (
          <section id="about" className="section-y scroll-mt-[72px]">
            <div className="wrap grid items-center gap-[34px] min-[980px]:grid-cols-[1.15fr_0.85fr] min-[980px]:gap-12">
              <FounderVideo
                videoId={founderVideoId}
                name={founder.name}
                duration={founder.videoDuration}
                posterSrc={founderPoster}
              />
              <div>
                <h2 className={H2_SMALL}>{h.founderTitle}</h2>
                <p className="mt-3.5 text-muted">{founder.bio}</p>
                {founderFacts.length > 0 && (
                  <ul className="mt-[22px] grid gap-2.5">
                    {founderFacts.map((fact) => (
                      <li key={fact.label} className="flex items-baseline gap-3 border-t border-line pt-2.5">
                        <b className="min-w-[96px] font-display text-[22px] font-semibold leading-none">{fact.value}</b>
                        <span>{fact.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Situations */}
        <section id="situations" className="section-y bg-sky" aria-labelledby="situations-title">
          <div className="wrap">
            <div className="mb-[38px] max-w-[36em]">
              <h2 id="situations-title" className={H2}>
                {h.situationsTitle}
              </h2>
              <p className="mt-3.5 text-lg text-muted">{fmtNodes(h.situationsLead, { n: situationsCount })}</p>
            </div>
            <div className="grid gap-[26px] min-[560px]:grid-cols-2 min-[980px]:grid-cols-3">
              {SITUATIONS.map((s) => {
                const card = h.situations[s.art];
                return (
                  <article key={s.art} className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface">
                    <SituationArt name={s.art} />
                    <div className="flex flex-1 flex-col gap-1.5 px-5 pb-[22px] pt-[18px]">
                      <h3 className="font-display text-[22px] font-semibold leading-[1.12] text-ink">{card.title}</h3>
                      <p className="text-[15.5px] text-muted">{card.blurb}</p>
                      <Link
                        href={practiceHref(locale, s.category)}
                        aria-label={fmt(h.practiseLabel, { title: card.title })}
                        className="btn-secondary mt-3 self-start px-4"
                      >
                        {h.practise}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-[30px] flex flex-wrap items-center gap-3.5">
              <Link href={href("/practice")} className="btn-primary">
                {fmtNodes(h.seeAll, { n: counts.situations })}
              </Link>
              <span className="text-muted">{h.seeAllNote}</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="section-y scroll-mt-[72px]" aria-labelledby="how-title">
          {/* The section's old anchor, kept so links to /#how-it-works still land here. */}
          <span id="how-it-works" className="block scroll-mt-[72px]" aria-hidden="true" />
          <div className="wrap">
            <div className="mb-[38px] max-w-[36em]">
              <h2 id="how-title" className={H2}>
                {h.howTitle}
              </h2>
              <p className="mt-3.5 text-lg text-muted">{h.howLead}</p>
              {h.samplesNote && <p className="mt-3 text-[15px] text-muted">{h.samplesNote}</p>}
            </div>

            <div className="grid items-center gap-[34px] py-[34px] min-[980px]:grid-cols-2 min-[980px]:gap-16">
              <div className="flex justify-center">
                <En locale={locale} as="div">
                  <Phone
                    height={436}
                    label="A sample Practice recap, styled as a rail ticket: 3 out of 5 correct in Dating & relationships, a 4 day streak, and a note that the ones you missed will come back."
                  >
                    <RecapScreen />
                  </Phone>
                </En>
              </div>
              <TourText
                title={h.practiceTourTitle}
                body={h.practiceTourBody}
                points={h.practiceTourPoints}
                note={h.practiceTourNote}
                href={href("/practice")}
                cta={h.practiceTourCta}
              />
            </div>

            <div className="grid items-center gap-[34px] py-[34px] min-[980px]:grid-cols-2 min-[980px]:gap-16">
              <div className="min-[980px]:order-2">
                <En locale={locale} as="div">
                  <DebriefSample />
                </En>
              </div>
              <TourText
                title={h.debriefTourTitle}
                body={h.debriefTourBody}
                points={[
                  fmt(h.debriefTourPointNorms, { n: counts.norms }),
                  h.debriefTourPointNoGuess,
                  h.debriefTourPointNoAccount,
                ]}
                href={href("/debrief")}
                cta={h.debriefTourCta}
              />
            </div>
          </div>
        </section>

        {/* Coach section, with three ledger rows read verbatim from the taxonomy. */}
        <section className="section-y bg-sky">
          <div className="wrap grid items-start gap-[34px] min-[980px]:grid-cols-[0.8fr_1.2fr] min-[980px]:gap-14">
            <div>
              <h2 className={H2_SMALL}>{h.coachTitle}</h2>
              <p className="mt-3.5 text-muted">{h.coachBody1}</p>
              <p className="mt-3.5 text-muted">{h.coachBody2}</p>
            </div>
            {ledgerRows.length > 0 && (
              <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-line bg-surface">
                <thead className="max-[759px]:hidden">
                  <tr>
                    <th scope="col" className="bg-sky px-[18px] py-3 text-start text-sm font-semibold text-ink">
                      {h.ledgerSay}
                    </th>
                    <th scope="col" className="bg-sky px-[18px] py-3 text-start text-sm font-semibold text-ink">
                      {h.ledgerMeans}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ledgerRows.map((row, i) => (
                    <tr
                      key={row.normId}
                      className={`max-[759px]:block max-[759px]:px-[18px] max-[759px]:py-3.5 ${
                        i > 0 ? "max-[759px]:border-t max-[759px]:border-line" : ""
                      }`}
                    >
                      <td className="w-[34%] border-t border-line px-[18px] py-4 align-top font-display text-lg font-medium italic leading-[1.3] text-ink max-[759px]:block max-[759px]:w-auto max-[759px]:border-0 max-[759px]:p-0">
                        <En locale={locale} as="p">
                          &ldquo;{row.phrase}&rdquo;
                        </En>
                      </td>
                      <td className="border-t border-line px-[18px] py-4 align-top text-[15.5px] text-ink max-[759px]:mt-1.5 max-[759px]:block max-[759px]:border-0 max-[759px]:p-0 max-[759px]:text-muted">
                        <En locale={locale} as="p">
                          {row.meaning}
                        </En>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* FAQ: the live answers, verbatim. */}
        <section className="section-y" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 id="faq-title" className={`${H2} mb-[38px]`}>
              {h.faqTitle}
            </h2>
            <div className="max-w-[760px]">
              {h.faq.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[19px] font-semibold leading-[1.3] text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="me-1.5 h-4 w-4 shrink-0 text-primary"
                    >
                      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M8 2v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="group-open:hidden" />
                    </svg>
                  </summary>
                  <p className="pb-[22px] pe-10 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Closing band: navy with white text on the dark site too (.keep-light). */}
      <section className="keep-light on-dark tweed bg-primary py-[76px]" aria-labelledby="band-title">
        <div className="wrap flex flex-wrap items-center justify-between gap-7">
          <h2 id="band-title" className="max-w-[11em] font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-on-primary">
            {h.bandTitle}
          </h2>
          <div className="flex w-full flex-wrap gap-3.5 min-[560px]:w-auto">
            <Link href={href("/onboarding")} className="btn-light w-full min-[560px]:w-auto">
              {h.startProfile}
            </Link>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full min-[560px]:w-auto"
              >
                <WhatsAppIcon />
                {h.bandWhatsapp}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// The hero's stamp card: one approved norm, verbatim, tilted like a stamp.
// Wide screens: absolutely placed, as in the mockup. Below 980px it stacks.
function StampCard({ norm }: { norm: NonNullable<typeof heroNorm> }) {
  return (
    <div className="w-[min(100%,380px)] -rotate-3 rounded bg-surface p-[22px] min-[980px]:absolute min-[980px]:left-0 min-[980px]:top-[50px] min-[980px]:w-[252px] shadow-[0_0_0_7px_rgb(var(--c-surface)),0_0_0_8px_rgb(var(--c-line)),0_18px_40px_rgb(var(--c-shadow)/0.14)]">
      <p className="mb-3 border-b border-line pb-2.5 font-mono text-xs leading-[1.3] text-muted">{norm.category}</p>
      <p className="font-display text-[19px] font-medium italic leading-[1.35] text-ink">
        {norm.phrases.map((phrase) => `“${phrase}”`).join(" / ")}
      </p>
      <p className="mt-3.5 text-[14.5px] leading-normal text-ink">
        <b className="mb-0.5 block text-[13px] font-semibold text-primary">What it actually means</b>
        {norm.meaning}
      </p>
    </div>
  );
}

function TourText({
  title,
  body,
  points,
  note = "",
  href,
  cta,
}: {
  title: string;
  body: string;
  points: string[];
  note?: string;
  href: string;
  cta: string;
}) {
  return (
    <div>
      <h3 className={H3_TOUR}>{title}</h3>
      <p className="mt-3.5 text-lg text-muted">{body}</p>
      <ul className="mb-[26px] mt-5 grid gap-2.5">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-[0.3em] h-4 w-4 shrink-0 text-primary">
              <path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {point}
          </li>
        ))}
      </ul>
      {note && <p className="-mt-2 mb-[26px] text-[15px] text-muted">{note}</p>}
      <Link href={href} className="btn-primary">
        {cta}
      </Link>
    </div>
  );
}
