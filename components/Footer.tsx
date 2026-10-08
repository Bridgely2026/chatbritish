import Link from "next/link";
import UnionJack from "@/components/UnionJack";
import { LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { SUPPORT_EMAIL, SUPPORT_MAILTO, linkedinHref, whatsappHref } from "@/lib/contact";

const EXPLORE_LINKS = [
  { href: "/practice", label: "Practice" },
  { href: "/debrief", label: "Debrief" },
  { href: "/#how", label: "How it works" },
  { href: "/privacy", label: "Privacy" },
];

// Sitewide footer: wordmark and tagline, Explore links, and a contact column
// (WhatsApp and LinkedIn render only when their variables are set; see
// lib/contact.ts). Practice hides it while a question is on screen (see
// body[data-practice-question] in globals.css). Links get a 44px tap area.
export default function Footer() {
  return (
    <footer
      id="footer-contact"
      className="site-footer scroll-mt-[calc(env(safe-area-inset-top,0px)+72px)] border-t border-line bg-canvas pb-[max(40px,env(safe-area-inset-bottom,0px))] pt-14"
    >
      <div className="wrap">
        <div className="grid gap-11 min-[560px]:grid-cols-2 min-[980px]:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="min-[560px]:col-span-2 min-[980px]:col-span-1">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2.5 whitespace-nowrap font-display text-[21px] font-semibold tracking-tight text-ink"
            >
              <UnionJack id="footer" className="h-3.5 w-7" />
              Chat British
            </Link>
            <p className="mt-2 max-w-[19em] text-muted">Speak the language. Understand the culture. Belong.</p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="mb-2 text-[15px] font-semibold text-ink">
              Explore
            </h2>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3.5 text-[15px] font-semibold text-ink">Talk to us</h2>
            <div className="flex flex-col items-start gap-3">
              {whatsappHref && (
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              )}
              {linkedinHref && (
                <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="btn-linkedin">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
              <a href={SUPPORT_MAILTO} className="link inline-flex min-h-[44px] items-center">
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-x-7 gap-y-3 border-t border-line pt-[22px] text-sm text-muted">
          <p className="max-w-[44em]">
            Chat British explains how people commonly communicate in Britain. It isn&apos;t legal, medical or
            financial advice.
          </p>
          {/* Static pages are prerendered, so the year is the build year. */}
          <p>© {new Date().getFullYear()} Chat British</p>
        </div>
      </div>
    </footer>
  );
}
