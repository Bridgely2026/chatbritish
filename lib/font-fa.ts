import { Vazirmatn } from "next/font/google";

// The Persian font, self-hosted at build time like the other fonts. Shared by
// app/fa/layout.tsx and the footer (which the root layout renders outside the
// /fa wrapper). Not preloaded, so English pages never download it: the file
// is fetched only when Persian text is drawn with it. globals.css puts it
// after the English fonts, so it draws only Arabic-script characters; Latin
// text and digits keep Fraunces or Work Sans.
export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-vazirmatn",
});
