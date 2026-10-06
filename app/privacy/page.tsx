import type { Metadata } from "next";
import Nav from "@/components/Nav";

// Placeholder until the real notice is written. Kept out of search results.
export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "https://chatbritish.ai/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <div className="mx-auto max-w-xl px-6 py-16">
        <h1 className="font-display text-2xl font-medium text-ink">Privacy notice</h1>
        <p className="mt-4 leading-relaxed text-muted">
          We&apos;re finalising our privacy notice and will publish it here. In the meantime, if you have a
          question about your information, email{" "}
          <a href="mailto:support@chatbritish.ai" className="font-medium text-primary underline underline-offset-4">
            support@chatbritish.ai
          </a>
          .
        </p>
      </div>
    </div>
  );
}
