import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import NormCard from "@/components/NormCard";
import StepIcon, { type StepIconName } from "@/components/StepIcon";
import { taxonomy, type NormEntry } from "@/lib/mock-data";
import { generatedScenarios } from "@/lib/scenarios-generated";

// One approved entry per category for the field guide, chosen by hand. Text
// is read from the taxonomy at render time, so it stays verbatim: the first
// quoted phrase of Surface Markers, and the full "What It Actually Means".
const FIELD_GUIDE_NORM_IDS = [
  "WP-17-lets-take-this-offline",
  "HC-4-pharmacist-first-point-of-contact",
  "HL-1-landlord-vague-commitment",
  "SO-8-reflexive-sorry-no-fault-apology",
  "DR-2-lets-see-where-this-goes-ambiguity",
  "CS-1-no-worries-service-staff-filler",
];

function firstQuotedPhrase(surfaceMarkers: string): string | null {
  return surfaceMarkers.match(/["\u201C]([^"\u201D]+)["\u201D]/)?.[1] ?? null;
}

const fieldGuide = FIELD_GUIDE_NORM_IDS.map((id) => taxonomy.find((e) => e.normId === id))
  .filter((e): e is NormEntry => e?.status === "Approved")
  .map((e) => ({ normId: e.normId, category: e.category, phrase: firstQuotedPhrase(e.surfaceMarkers), meaning: e.whatItMeans }))
  .filter((row): row is typeof row & { phrase: string } => row.phrase !== null);

// Read from the generated data at build time (the page is static), so the
// figures follow the spreadsheets and can't go stale.
const approvedNorms = taxonomy.filter((e) => e.status === "Approved");
const PROOF_FIGURES = [
  { figure: approvedNorms.length, label: "communication norms" },
  { figure: new Set(approvedNorms.map((e) => e.category)).size, label: "everyday situations" },
  { figure: generatedScenarios.filter((s) => s.status === "Approved").length, label: "practice scenarios" },
];

const STEPS: { icon: StepIconName; lead: string; rest: string }[] = [
  { icon: "profile", lead: "Tell us where you're starting from", rest: "a two-minute profile." },
  { icon: "practice", lead: "Practise before it happens", rest: "short tap-based scenarios." },
  { icon: "debrief", lead: "Debrief after it happens", rest: "describe a confusing moment and learn what was meant." },
];

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />

      {/* Hero */}
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <div className="rule-double mb-6" aria-hidden="true" />
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-ink md:text-5xl">
            You understood every word.
            <br />
            You still missed what they meant.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            Chat British teaches the unwritten rules of British communication — the hedges, the
            understatements, the &ldquo;let&rsquo;s see how it goes&rdquo; that actually means no.
            Practise before it happens. Get a straight answer after it already has.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/onboarding" className="btn-primary">
              Start your profile
            </Link>
            <Link href="/debrief" className="btn-secondary">
              Try the debrief tool
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <NormCard entry={taxonomy[0]} stamp annotation="i.e. probably not." />
        </div>
      </section>

      {/* Proof strip: figures come from the generated data at build time. */}
      <section aria-label="Chat British in numbers" className="border-y border-line bg-white">
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-4">
          {PROOF_FIGURES.map((item) => (
            <li key={item.label}>
              <span className="block font-display text-3xl font-medium text-ink">{item.figure}</span>
              <span className="mt-1 block text-sm text-muted">{item.label}</span>
            </li>
          ))}
          <li>
            <StepIcon name="reviewed" className="h-9 w-9 text-primary" />
            <span className="mt-1 block text-sm text-muted">Every norm reviewed by a working coach</span>
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
        <h2 className="font-display text-2xl font-medium text-ink">How it works</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.icon} className="flex gap-4 md:flex-col">
              <StepIcon name={step.icon} className="h-11 w-11 shrink-0 text-ink" />
              <p className="text-muted">
                <span className="mr-2 font-display text-lg font-medium text-primary" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="font-medium text-ink">{step.lead}:</span> {step.rest}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <SectionDivider />

      {/* Product cards, with real screenshots */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <ProductCard
            label="Before it happens"
            title="Practice"
            image={{
              src: "/home-practice.webp",
              width: 750,
              height: 1334,
              alt: "A Practice question on a phone. The manager says a promotion is \u201cdefinitely something we can look at\u201d with no date. The chosen answer, \u201cTake it as a near-term commitment and wait\u201d, is marked wrong, the right answer is highlighted, and the feedback bar explains that it\u2019s a deferral, not a promise.",
            }}
            href="/practice"
            cta="Start practising"
          />
          <ProductCard
            label="After it happens"
            title="Debrief"
            image={{
              src: "/home-debrief.webp",
              width: 654,
              height: 1456,
              alt: "A Debrief answer card on a phone, filed under Money & transactions. The surface signal is agreeing to split a group dinner bill evenly after having only a starter and water. It explains that an even split is a casual UK default and that raising it isn\u2019t inappropriate, and suggests saying \u201cI only had a starter and water, would you mind if I paid a bit less?\u201d Below are the buttons Practise this norm, Save to my log and Describe another moment.",
            }}
            href="/debrief"
            cta="Try Debrief"
          />
        </div>
      </section>

      <SectionDivider />

      {/* Credibility */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <h2 className="font-display text-2xl font-medium text-ink">Built on real coaching, not guesses</h2>
          <div className="space-y-4 text-muted">
            <p>
              Every entry in Chat British&rsquo;s library comes from a real client case, reviewed and
              written by a working cultural-communication coach — the same methodology behind
              years of 1:1 sessions, now built into software instead of replaced by it.
            </p>
            <p>
              Nothing gets published without review. The library grows the same way it always has:
              one grounded, specific case at a time.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Field guide */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-medium text-ink">A short field guide</h2>
        <div aria-hidden="true" className="mt-10 hidden grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-10 pb-3 sm:grid">
          <p className="eyebrow text-muted">What they say</p>
          <p className="eyebrow text-muted">What it means</p>
        </div>
        <dl className="mt-8 border-t border-line sm:mt-0">
          {fieldGuide.map((row) => (
            <div
              key={row.normId}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-x-10"
            >
              <dt>
                <span className="eyebrow block text-primary">{row.category}</span>
                <span className="mt-1.5 block font-display text-lg italic text-ink">&ldquo;{row.phrase}&rdquo;</span>
              </dt>
              <dd className="text-sm leading-relaxed text-muted sm:pt-6">{row.meaning}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8">
          <Link href="/debrief" className="link text-sm">
            Try the debrief tool
          </Link>
        </p>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-medium text-ink">Questions</h2>
        <div className="mt-8 max-w-prose border-t border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-45"
                >
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="pb-5 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tweed bg-primary">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-2xl font-medium text-white">
            Stop guessing what people mean.
          </h2>
          <Link href="/onboarding" className="btn-secondary focus-visible:outline-white">
            Start your profile
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  label,
  title,
  image,
  href,
  cta,
}: {
  label: string;
  title: string;
  image: { src: string; width: number; height: number; alt: string };
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-line bg-white p-6">
      <p className="eyebrow text-primary">{label}</p>
      <h2 className="mt-2 font-display text-2xl font-medium text-ink">{title}</h2>
      {/* Screenshot in a plain rounded frame. width/height reserve the space,
          so nothing shifts as it loads; next/image lazy-loads by default. */}
      <div className="mx-auto mt-6 w-full max-w-[300px] overflow-hidden rounded-xl border border-line bg-canvas">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="300px"
          className="block h-auto w-full"
        />
      </div>
      <div className="mt-auto pt-6">
        <Link href={href} className="btn-primary">
          {cta}
        </Link>
      </div>
    </div>
  );
}

// Double rule with a small centred diamond, between home sections.
function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex items-center gap-3 text-primary">
      <div className="rule-double flex-1" />
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 shrink-0">
        <path d="M5 .5 9.5 5 5 9.5.5 5Z" fill="currentColor" />
      </svg>
      <div className="rule-double flex-1" />
    </div>
  );
}
