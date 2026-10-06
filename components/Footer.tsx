import Link from "next/link";

const CONTACT_HREF = "mailto:support@chatbritish.ai?subject=Chat%20British";

// Sitewide footer, mirroring the nav: the same double rule (above here rather
// than below), the wordmark a size down, and muted type (5.2:1 on paper).
// Links get a 44px-tall tap area; the row wraps on narrow phones.
export default function Footer() {
  return (
    <footer className="site-footer bg-paper">
      <div className="rule-double" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6 pb-8 pt-4 text-sm text-muted">
        <div className="flex flex-wrap items-center justify-between gap-x-6">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center whitespace-nowrap font-display text-lg font-medium tracking-tight text-ink"
          >
            Chat British
          </Link>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6">
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-ink">
              Privacy
            </Link>
            <a href={CONTACT_HREF} className="inline-flex min-h-[44px] items-center hover:text-ink">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-3 max-w-prose text-xs leading-relaxed">
          Chat British explains how people commonly communicate in Britain. It isn&apos;t legal, medical or
          financial advice.
        </p>
        {/* Static pages are prerendered, so the year is the build year. */}
        <p className="mt-2 text-xs">© {new Date().getFullYear()} Chat British</p>
      </div>
    </footer>
  );
}
