import type { Metadata } from "next";
import "./globals.css";

const title = "Chat British \u2014 Speak the language. Understand the culture. Belong.";
const description =
  "Chat British turns the unwritten rules of British communication into something you can actually learn \u2014 practice before it happens, diagnosis after.";

// Absolute URLs for the share image need a base. Set NEXT_PUBLIC_SITE_URL in
// the deploy environment; without it, metadataBase is left out and Next falls
// back to its own default.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
