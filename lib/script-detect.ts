// Debrief only reads English, and onboarding's struggle classifier was
// calibrated on English text. This spots text written mostly in Arabic script
// (Persian, Arabic, Urdu...) so the page can stop before calling either API.

// Arabic, Arabic Supplement, Arabic Presentation Forms-A and -B.
const ARABIC_SCRIPT_LETTER = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/u;
// Letters only (any script); digits, spaces and punctuation don't count.
const ANY_LETTER = /\p{L}/u;

// True when Arabic-script letters are 30% or more of all the letters. Text
// with no letters at all is false.
export function isMostlyArabicScript(text: string): boolean {
  let letters = 0;
  let arabic = 0;
  for (const ch of text) {
    if (ARABIC_SCRIPT_LETTER.test(ch)) {
      // The Arabic block also holds digits and punctuation (U+0660-0669,
      // U+060C...); count them only when they are letters.
      if (ANY_LETTER.test(ch)) {
        arabic++;
        letters++;
      }
    } else if (ANY_LETTER.test(ch)) {
      letters++;
    }
  }
  return letters > 0 && arabic / letters >= 0.3;
}
