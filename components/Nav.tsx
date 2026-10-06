import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
        <Link href="/" className="whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink">
          Chat British
        </Link>
        {/* Tighter gaps and button padding below sm keep the row inside 320px. */}
        <nav className="flex items-center gap-3 whitespace-nowrap text-sm text-muted sm:gap-6">
          <Link href="/onboarding" className="btn-primary px-3 py-2.5 sm:px-4">
            {/* Shortened below sm so the nav stays on one line at 320px. */}
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Get started</span>
          </Link>
          {/* From sm up only: below 640px the row has no room for a fourth item
              without wrapping (it's ~2px from the edge at 320 already). */}
          <Link href="/#how-it-works" className="hidden underline-offset-4 hover:text-primary hover:underline sm:inline">
            How it works
          </Link>
          <Link href="/practice" className="underline-offset-4 hover:text-primary hover:underline">
            Practice
          </Link>
          <Link href="/debrief" className="underline-offset-4 hover:text-primary hover:underline">
            Debrief
          </Link>
        </nav>
      </div>
    </header>
  );
}
