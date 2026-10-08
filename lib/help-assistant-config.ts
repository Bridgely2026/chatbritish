// The Help assistant is off unless NEXT_PUBLIC_HELP_ASSISTANT is exactly
// "on". NEXT_PUBLIC_ values are inlined at build time, so turning it on or
// off needs a rebuild (on Railway, a redeploy). When off, the button isn't
// rendered and /api/assistant returns 404.
export const helpAssistantEnabled = process.env.NEXT_PUBLIC_HELP_ASSISTANT === "on";

// The buttons a reply can carry. The model picks one; the UI turns it into a
// link, so the model never writes a URL. "whatsapp" exists only when a
// WhatsApp number is configured.
export type HelpAction = "practice" | "debrief" | "email" | "privacy" | "whatsapp" | "none";

export const HELP_INPUT_MAX = 300;
