// Contact links. The WhatsApp and LinkedIn buttons render only when their
// variable is set; NEXT_PUBLIC_ values are inlined at build time, so a change
// needs a rebuild (on Railway, a redeploy).

export const SUPPORT_EMAIL = "support@chatbritish.ai";
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=Chat%20British`;

const WHATSAPP_TEXT = "Hi Chat British, I have a question";

// wa.me wants the number in international format, digits only
// ("+44 7700 900123" -> "447700900123").
const whatsappDigits = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
export const whatsappHref = whatsappDigits
  ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(WHATSAPP_TEXT)}`
  : null;

const linkedinUrl = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim();
export const linkedinHref = /^https:\/\//.test(linkedinUrl) ? linkedinUrl : null;
