const STREAK_KEY = "chat_british_streak";

// Storage can throw (private mode, blocked site data), so reads fall back to
// 0 and failed writes are skipped rather than crashing Practice.
export function getStreak(): number {
  if (typeof window === "undefined") return 0;
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STREAK_KEY);
  } catch {
    return 0;
  }
  const parsed = raw === null ? NaN : Number(raw);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

export function incrementStreak(): number {
  const next = getStreak() + 1;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STREAK_KEY, String(next));
    } catch {
      // Storage unavailable: the streak just isn't saved.
    }
  }
  return next;
}
