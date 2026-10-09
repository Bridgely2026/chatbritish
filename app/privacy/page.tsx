import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import DeleteMyData from "@/components/DeleteMyData";
import Nav from "@/components/Nav";
import { PRIVACY_NOTICE, type Inline } from "@/lib/privacy-notice";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Chat British collects, uses and protects your information.",
  alternates: { canonical: "https://chatbritish.ai/privacy" },
};

// The two addresses in the notice that become links. Everything is rendered
// as React text, so the file's wording is escaped and never parsed as HTML.
const LINKS: Record<string, string> = {
  "support@chatbritish.ai": "mailto:support@chatbritish.ai",
  "ico.org.uk": "https://ico.org.uk",
};
const LINK_PATTERN = /(support@chatbritish\.ai|ico\.org\.uk)/;

function withLinks(text: string): ReactNode[] {
  return text.split(LINK_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={LINKS[part]} className="link underline">
        {part}
      </a>
    ) : (
      part
    ),
  );
}

function Text({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.bold ? (
          <strong key={i} className="font-semibold text-ink">
            {withLinks(part.text)}
          </strong>
        ) : (
          <Fragment key={i}>{withLinks(part.text)}</Fragment>
        ),
      )}
    </>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <main className="wrap py-12 sm:py-16">
        <article className="mx-auto max-w-[35rem] text-base leading-relaxed text-ink">
          {PRIVACY_NOTICE.map((block, i) => {
            switch (block.kind) {
              case "h1":
                return (
                  <h1 key={i} className="font-display text-3xl font-medium text-ink sm:text-4xl">
                    {block.text}
                  </h1>
                );
              case "h2":
                return (
                  <h2 key={i} id={block.id} className="mt-10 scroll-mt-24 font-display text-xl font-medium text-ink">
                    {block.text}
                  </h2>
                );
              case "p":
                return (
                  <p key={i} className="mt-4">
                    {block.lines.map((line, j) => (
                      <Fragment key={j}>
                        {j > 0 && <br />}
                        <Text parts={line} />
                      </Fragment>
                    ))}
                  </p>
                );
              case "ul":
                return (
                  <ul key={i} className="mt-4 list-disc space-y-2 pl-6 marker:text-muted">
                    {block.items.map((item, j) => (
                      <li key={j}>
                        <Text parts={item} />
                      </li>
                    ))}
                  </ul>
                );
            }
          })}
          <DeleteMyData />
        </article>
      </main>
    </div>
  );
}
