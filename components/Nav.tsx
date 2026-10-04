import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink">
          Chat British
        </Link>
        <nav className="flex items-center gap-4 whitespace-nowrap text-sm text-muted sm:gap-6">
          <Link href="/onboarding" className="hover:text-ink">
            {/* Shortened below sm so the nav stays on one line at 360px. */}
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Get started</span>
          </Link>
          <Link href="/practice" className="hover:text-ink">
            Practice
          </Link>
          <Link href="/debrief" className="hover:text-ink">
            Debrief
          </Link>
        </nav>
      </div>
      <div className="rule-double" aria-hidden="true" />
    </header>
  );
}
