import type { Metadata } from "next";
import { Caveat, Fraunces, Work_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const title = "Chat British \u2014 Speak the language. Understand the culture. Belong.";
const description =
  "Chat British turns the unwritten rules of British communication into something you can actually learn \u2014 practise before it happens, diagnosis after.";

// Absolute URLs for the share image need a base. NEXT_PUBLIC_SITE_URL wins when
// set; otherwise fall back to the production domain so share images never
// point at localhost.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chatbritish.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s \u2014 Chat British" },
  description,
  // "./" resolves to each page's own path, so every route gets a
  // self-referential canonical and a matching og:url.
  alternates: { canonical: "./" },
  openGraph: { title, description, type: "website", url: "./" },
  twitter: { card: "summary_large_image", title, description },
};

// Self-hosted at build time by next/font, so the browser never requests
// anything from Google. tailwind.config.ts maps the variables to font-display,
// font-sans and font-hand.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});
const workSans = Work_Sans({ subsets: ["latin"], display: "swap", variable: "--font-work-sans" });
// Handwriting, for the red-pen margin note only.
const caveat = Caveat({ subsets: ["latin"], weight: "600", display: "swap", variable: "--font-caveat" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
