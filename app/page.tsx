import Link from "next/link";
import Nav from "@/components/Nav";
import NormCard from "@/components/NormCard";
import { taxonomy, type NormEntry } from "@/lib/mock-data";

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
            Practice before it happens. Get a straight answer after it already has.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/onboarding" className="btn-primary">
              Start your profile
            </Link>
            <Link href="/debrief" className="link text-sm">
              Try the debrief tool
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <NormCard entry={taxonomy[0]} stamp annotation="i.e. probably not." />
        </div>
      </section>

      <SectionDivider />

      {/* Three features */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-2xl font-medium text-ink">Two moments. One method.</h2>
          <p className="mt-3 max-w-prose text-muted">
            Every feature comes from the same place: a taxonomy of real British communication
            patterns, built by a working cultural-communication coach — not generated, not scraped.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Feature
              label="Before it happens"
              title="Practice"
              body="Tap-based roleplay built from real scenarios. Respond to a manager, a landlord, a new colleague — and see, in the moment, whether your instinct was right."
            />
            <Feature
              label="After it happens"
              title="Debrief"
              body="Describe a confusing moment — by voice or text. Get back exactly what was really meant, why, and what to say next. No need to already know what category it falls under."
            />
            <Feature
              label="Ongoing"
              title="A profile that adapts"
              body="A short onboarding tells Chat British your sector, your situation, your struggle — so practice and debriefs stay relevant to your actual life, not generic advice."
            />
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

function Feature({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <p className="eyebrow text-primary">{label}</p>
      <h3 className="mt-2 font-display text-xl font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
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
