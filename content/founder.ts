// The founder section on the home page. It renders only when
// NEXT_PUBLIC_FOUNDER_VIDEO_ID is set (the YouTube video ID) AND `bio` below
// is non-empty. Each fact renders only when its value is filled in, so leave
// a value empty rather than guess it. Everything here is public text:
// Kianoush should write or approve it before it's filled in.
//
// Optional poster: put a 16:9 image at public/founder-poster.webp and it is
// used on the video button; otherwise a typographic poster is drawn.

export const founder = {
  // Shown on the typographic poster, e.g. "Kianoush, founder".
  name: "",
  // Two sentences in Kianoush's own words.
  bio: "",
  facts: {
    // e.g. "About 50" -> "About 50 current coaching clients"
    clients: "",
    // e.g. "12,000" -> "12,000 followers on Instagram"
    followers: "",
    // e.g. "8" -> "8 years coaching cultural communication"
    years: "",
  },
  // Optional running time shown on the poster, e.g. "1:30".
  videoDuration: "",
};
