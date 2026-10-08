const STREAK_KEY = "chat_british_streak";

// A day streak: the number of consecutive calendar days (the device's local
// date) on which at least one Practice session was finished. Stored as
// {"count": n, "lastDay": "YYYY-MM-DD"}. An older value (a plain number,
// which counted sessions rather than days) counts as no streak.
type StreakRecord = { count: number; lastDay: string };

// Storage can throw (private mode, blocked site data), so reads fall back to
// no streak and failed writes are skipped rather than crashing Practice.
function readRecord(): StreakRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STREAK_KEY);
    if (raw === null) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof (parsed as StreakRecord).count === "number" &&
      Number.isFinite((parsed as StreakRecord).count) &&
      (parsed as StreakRecord).count >= 1 &&
      typeof (parsed as StreakRecord).lastDay === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test((parsed as StreakRecord).lastDay)
    ) {
      return parsed as StreakRecord;
    }
    return null;
  } catch {
    return null;
  }
}

// The device's local calendar date as YYYY-MM-DD.
function localDay(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function today(): string {
  return localDay(new Date());
}

// Built from the calendar date rather than "now minus 24 hours", so a
// daylight-saving change can't skip or repeat a day.
function yesterday(): string {
  const now = new Date();
  return localDay(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1));
}

// The streak to show: the count if a session was finished today or
// yesterday (the streak is still alive), otherwise 0.
export function getStreak(): number {
  const record = readRecord();
  if (!record) return 0;
  return record.lastDay === today() || record.lastDay === yesterday() ? record.count : 0;
}

// Call when a session is finished. Same day: unchanged. The day after the
// last session: one more. Any gap (or no streak yet): starts again at 1.
// Returns the new count, which is shown even if it couldn't be saved.
export function recordFinishedSession(): number {
  const record = readRecord();
  const day = today();
  const count =
    record?.lastDay === day ? record.count : record?.lastDay === yesterday() ? record.count + 1 : 1;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STREAK_KEY, JSON.stringify({ count, lastDay: day } satisfies StreakRecord));
    } catch {
      // Storage unavailable: the streak just isn't saved.
    }
  }
  return count;
}
