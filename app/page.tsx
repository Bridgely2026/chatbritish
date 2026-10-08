import fs from "node:fs";
import path from "node:path";
import type { Viewport } from "next";
import Link from "next/link";
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
import type { NormEntry } from "@/lib/mock-data";
import { getScenariosByCategory } from "@/lib/scenarios";

// Lets the sticky header and the footer sit under a phone's notch and home
// bar; they pad themselves with the safe-area insets.
export const viewport: Viewport = { viewportFit: "cover" };

const PROOF_FIGURES = [
  { figure: String(counts.norms), label: "communication norms" },
  { figure: String(counts.situations), label: "everyday situations" },
  { figure: String(counts.scenarios), label: "practice scenarios" },
  { figure: "Every norm", label: "reviewed by a working coach" },
];

const SITUATIONS: { art: SituationArtName; title: string; blurb: string; category: NormEntry["category"] }[] = [
  { art: "workplace", title: "Workplace", blurb: "Meetings, managers, colleagues", category: "Workplace" },
  { art: "housing", title: "Housing and landlords", blurb: "Repairs, notices, flatmates", category: "Housing & landlord" },
  { art: "healthcare", title: "Healthcare", blurb: "GPs, appointments, NHS process", category: "Healthcare" },
  { art: "social", title: "Social life", blurb: "Invitations, small talk, everyday norms", category: "Social" },
  { art: "money", title: "Money", blurb: "Bills, payments, tipping", category: "Money & transactions" },
  { art: "transport", title: "Transport and commuting", blurb: "Trains, buses, driving", category: "Transport & commuting" },
];

// Practice reads ?categories= (a ranked list, as onboarding sends it) and
// starts a session in the first one that has scenarios.
function practiceHref(category: string): string {
  return getScenariosByCategory(category).length > 0
    ? `/practice?categories=${encodeURIComponent(category)}`
    : "/practice";
}

const FAQ = [
  { q: "Is Chat British free?", a: "Chat British is free to use while we're in early access." },
  {
    q: "Is Debrief a chatbot?",
    a: "No. Debrief matches what you describe against our library of norms and explains the closest one. If nothing fits, it says so.",
  },
  {
    q: "Where do the explanations come from?",
    a: "Every norm in the library is reviewed by a working cultural-communication coach.",
  },
  {
    q: "Is this advice?",
    a: "No. Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice.",
  },
];

// The founder section needs both a video and a bio; until then it isn't
// rendered at all. Facts show only when filled in content/founder.ts.
const founderVideoId = (process.env.NEXT_PUBLIC_FOUNDER_VIDEO_ID ?? "").trim();
const showFounder = founderVideoId !== "" && founder.bio.trim() !== "";
const founderFacts = [
  { value: founder.facts.clients, label: "current coaching clients" },
  { value: founder.facts.followers, label: "followers on Instagram" },
  { value: founder.facts.years, label: "years coaching cultural communication" },
].filter((fact) => fact.value.trim() !== "");
const founderPoster = fs.existsSync(path.join(process.cwd(), "public", "founder-poster.webp"))
  ? "/founder-poster.webp"
  : null;

const H2 = "font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink";
const H2_SMALL = "font-display text-[clamp(1.8rem,3.3vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink";
const H3_TOUR = "font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-canvas text-[17px] leading-[1.6]">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <div className="wrap grid gap-[34px] pb-11 pt-11 min-[980px]:grid-cols-[minmax(0,1fr)_520px] min-[980px]:items-center min-[980px]:gap-10 min-[980px]:pt-16">
          <div>
            <p className="mb-[22px] flex items-center gap-2.5 text-[15px] text-muted">
              <UnionJack id="tagline" />A guide to how Britain really communicates
            </p>
            <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink [text-wrap:balance]">
              <span className="block">You understood every word.</span>
              <span className="block">You still missed what they meant.</span>
            </h1>
            <p className="mt-[22px] max-w-[30em] text-lg text-muted">
              Chat British teaches the unwritten rules of British communication — the hedges, the
              understatements, the &ldquo;let&rsquo;s see how it goes&rdquo; that actually means no.
              Practise before it happens. Get a straight answer after it already has.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3.5">
              <Link href="/onboarding" className="btn-primary w-full min-[560px]:w-auto">
                Start your profile
              </Link>
              <Link href="/debrief" className="btn-secondary w-full min-[560px]:w-auto">
                Try the debrief tool
              </Link>
            </div>
            <p className="mt-4 text-[15px] text-muted">No account needed. It takes two minutes.</p>
          </div>

          {/* Collage: overlapping on wide screens, stacked below 980px. */}
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
        </div>

        {/* Proof strip: figures from the generated data at build time. */}
        <section aria-label="Chat British in numbers" className="mt-2 border-y border-line">
          <ul className="wrap grid grid-cols-2 min-[760px]:grid-cols-4">
            {PROOF_FIGURES.map((item, i) => (
              <li
                key={item.label}
                className={`py-[22px] pr-5 ${
                  i === 0
                    ? ""
                    : i === 2
                      ? "min-[760px]:border-l min-[760px]:border-line min-[760px]:pl-5"
                      : "border-l border-line pl-5"
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
                <h2 className={H2_SMALL}>Why a coach built this</h2>
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
                Where it helps
              </h2>
              <p className="mt-3.5 text-lg text-muted">
                {numberWord(counts.situations)} everyday situations, each with practice scenarios and plain
                explanations.
              </p>
            </div>
            <div className="grid gap-[26px] min-[560px]:grid-cols-2 min-[980px]:grid-cols-3">
              {SITUATIONS.map((s) => (
                <article key={s.art} className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
                  <SituationArt name={s.art} />
                  <div className="flex flex-1 flex-col gap-1.5 px-5 pb-[22px] pt-[18px]">
                    <h3 className="font-display text-[22px] font-semibold leading-[1.12] text-ink">{s.title}</h3>
                    <p className="text-[15.5px] text-muted">{s.blurb}</p>
                    <Link
                      href={practiceHref(s.category)}
                      aria-label={`Practise ${s.title}`}
                      className="btn-secondary mt-3 self-start px-4"
                    >
                      Practise
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-[30px] flex flex-wrap items-center gap-3.5">
              <Link href="/practice" className="btn-primary">
                See all {counts.situations} situations
              </Link>
              <span className="text-muted">Education, dating, neighbours, shopping and more.</span>
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
                How it works
              </h2>
              <p className="mt-3.5 text-lg text-muted">
                Two moments, one method. Everything comes from the same library of reviewed norms.
              </p>
            </div>

            <div className="grid items-center gap-[34px] py-[34px] min-[980px]:grid-cols-2 min-[980px]:gap-16">
              <div className="flex justify-center">
                <Phone
                  height={436}
                  label="A sample Practice recap, styled as a rail ticket: 3 out of 5 correct in Dating & relationships, a 4 day streak, and a note that the ones you missed will come back first."
                >
                  <RecapScreen />
                </Phone>
              </div>
              <TourText
                title="Practise before it happens"
                body="Short, tap-based scenarios built from real British situations. Wrong answers show you the right one, and the questions you miss come back first."
                points={[
                  "Five questions a session, about two minutes",
                  "A streak to keep you coming back",
                  "New questions first, so it never feels repetitive",
                ]}
                href="/practice"
                cta="Start practising"
              />
            </div>

            <div className="grid items-center gap-[34px] py-[34px] min-[980px]:grid-cols-2 min-[980px]:gap-16">
              <div className="min-[980px]:order-2">
                <DebriefSample />
              </div>
              <TourText
                title="Debrief after it happens"
                body="Describe a confusing moment in your own words. Chat British finds the closest norm, explains what was really meant, and gives you something you could say next."
                points={[
                  `Matched against ${counts.norms} reviewed norms`,
                  "If nothing fits, it says so instead of guessing",
                  "No account needed",
                ]}
                href="/debrief"
                cta="Try Debrief"
              />
            </div>
          </div>
        </section>

        {/* Coach section, with three ledger rows read verbatim from the taxonomy. */}
        <section className="section-y bg-sky">
          <div className="wrap grid items-start gap-[34px] min-[980px]:grid-cols-[0.8fr_1.2fr] min-[980px]:gap-14">
            <div>
              <h2 className={H2_SMALL}>Built on real coaching, not guesses</h2>
              <p className="mt-3.5 text-muted">
                Every norm in the library is reviewed by a working cultural-communication coach: the same
                methodology behind years of 1:1 sessions, now built into software instead of replaced by it.
              </p>
              <p className="mt-3.5 text-muted">
                Nothing gets published without review. The library grows the same way it always has: one
                grounded, specific case at a time.
              </p>
            </div>
            {ledgerRows.length > 0 && (
              <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-line bg-white">
                <thead className="max-[759px]:hidden">
                  <tr>
                    <th scope="col" className="bg-sky px-[18px] py-3 text-left text-sm font-semibold text-ink">
                      What they say
                    </th>
                    <th scope="col" className="bg-sky px-[18px] py-3 text-left text-sm font-semibold text-ink">
                      What it means
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
                        &ldquo;{row.phrase}&rdquo;
                      </td>
                      <td className="border-t border-line px-[18px] py-4 align-top text-[15.5px] text-ink max-[759px]:mt-1.5 max-[759px]:block max-[759px]:border-0 max-[759px]:p-0 max-[759px]:text-muted">
                        {row.meaning}
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
              Questions
            </h2>
            <div className="max-w-[760px]">
              {FAQ.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[19px] font-semibold leading-[1.3] text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="mr-1.5 h-4 w-4 shrink-0 text-primary"
                    >
                      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M8 2v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="group-open:hidden" />
                    </svg>
                  </summary>
                  <p className="pb-[22px] pr-10 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Closing band */}
      <section className="on-dark tweed bg-primary py-[76px]" aria-labelledby="band-title">
        <div className="wrap flex flex-wrap items-center justify-between gap-7">
          <h2 id="band-title" className="max-w-[11em] font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-white">
            Stop guessing what people mean.
          </h2>
          <div className="flex w-full flex-wrap gap-3.5 min-[560px]:w-auto">
            <Link href="/onboarding" className="btn-light w-full min-[560px]:w-auto">
              Start your profile
            </Link>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full min-[560px]:w-auto"
              >
                <WhatsAppIcon />
                Message us on WhatsApp
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
    <div className="w-[min(100%,380px)] -rotate-3 rounded bg-white p-[22px] min-[980px]:absolute min-[980px]:left-0 min-[980px]:top-[50px] min-[980px]:w-[252px] shadow-[0_0_0_7px_#fff,0_0_0_8px_#DDE1E6,0_18px_40px_rgba(20,35,55,0.14)]">
      <p className="mb-3 border-b border-line pb-2.5 font-mono text-xs leading-[1.3] text-muted">{norm.category}</p>
      <p className="font-display text-[19px] font-medium italic leading-[1.35] text-ink">
        {norm.phrases.map((phrase) => `\u201C${phrase}\u201D`).join(" / ")}
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
  href,
  cta,
}: {
  title: string;
  body: string;
  points: string[];
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
      <Link href={href} className="btn-primary">
        {cta}
      </Link>
    </div>
  );
}
