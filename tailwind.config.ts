import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Page background; cards and panels sit on it in white.
        canvas: "#FBFAF7",
        ink: "#1C2733",
        // Brand colour: buttons, links, eyebrow labels, rules, card bands.
        primary: "#1F3A5F",
        "primary-dark": "#172D49",
        // Secondary-button hover and other light brand tints.
        sky: "#EAF1F8",
        // Decorative only: never text, never a border on a light background.
        amber: "#F2A93B",
        // Brick and sage are reserved for answer states (wrong / correct) and
        // error messages, with one decorative exception: the red-pen margin
        // note on the home hero is brick.
        brick: "#A63A2E",
        "brick-light": "#F0DAD5",
        sage: "#4B6C5E",
        "sage-light": "#DCE5DF",
        // #5B6773 was proposed, but it (like the old #5B6670) fell under 4.5:1
        // on the wrong-answer feedback bar (brick-light). This passes on
        // canvas, white, sky, brick-light and sage-light.
        muted: "#56626E",
        // Light neutral for card borders and hairlines.
        line: "#DDE1E6",
        // Text-input borders: an input needs a visible edge, so 3:1 on white.
        field: "#858F99",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Work Sans", "system-ui", "sans-serif"],
        // Handwriting, for the red-pen margin note only.
        hand: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      maxWidth: {
        prose: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
