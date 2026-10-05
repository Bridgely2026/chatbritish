// Which practice scenarios this browser has answered, so sessions can favour
// unseen ones and bring missed ones back. Stored per scenario ID with the
// last answer's result and when it was given.

const SEEN_KEY = "chat_british_seen";

export type SeenRecord = { correct: boolean; at: number };
export type SeenMap = Record<string, SeenRecord>;

// null means localStorage is unavailable (SSR, private mode, blocked
// storage), and callers fall back to a plain random draw.
export function getSeen(): SeenMap | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SEEN_KEY);
    const parsed = raw === null ? {} : JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return null;
  }
}

export function recordAnswer(scenarioId: string, correct: boolean): void {
  const seen = getSeen();
  if (!seen) return;
  seen[scenarioId] = { correct, at: Date.now() };
  try {
    window.localStorage.setItem(SEEN_KEY, JSON.stringify(seen));
  } catch {
    // Storage full or blocked: the next session just draws less precisely.
  }
}
