import type { Config } from "tailwindcss";

// A colour read from a CSS variable in app/globals.css.
const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // The values live in app/globals.css as CSS variables (space-separated
        // RGB), so the site is dark everywhere and .keep-light can bring back
        // the light palette for the home page's device mockups and the
        // closing band. Opacity modifiers (bg-primary/40) still work.
        // Page background.
        canvas: token("canvas"),
        // Cards, panels and inputs on the canvas.
        surface: token("surface"),
        ink: token("ink"),
        // Brand colour: buttons, links, eyebrow labels, rules, card bands.
        primary: token("primary"),
        "primary-dark": token("primary-dark"),
        // Text and icons on a filled primary background.
        "on-primary": token("on-primary"),
        // Secondary-button hover and other brand tints.
        sky: token("sky"),
        // The Help assistant's reply bubble (sky is too close to surface).
        bubble: token("bubble"),
        // Decorative only: never text.
        amber: token("amber"),
        // Brick and sage are reserved for answer states (wrong / correct) and
        // error messages, with one decorative exception: the red-pen margin
        // note on the home hero is brick. The -light names are the tints the
        // answer states sit on (dark tints on the dark site).
        brick: token("brick"),
        "brick-light": token("brick-light"),
        sage: token("sage"),
        "sage-light": token("sage-light"),
        muted: token("muted"),
        // Card borders and hairlines.
        line: token("line"),
        // Text-input borders: an input needs a visible edge, so 3:1 on surface.
        field: token("field"),
        // Box-shadow colour (used with an alpha).
        shadow: token("shadow"),
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
