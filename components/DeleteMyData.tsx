"use client";

import { useEffect, useRef, useState } from "react";
import { getSupabaseBrowser } from "@/lib/supabase-browser";

// "Delete my data" on the privacy page. Shown only when this browser has a
// Supabase session (made by onboarding). Deletes the profile row and the
// anonymous sign-in through /api/delete-my-data, signs out, and clears this
// browser's Practice progress.

// supabase-js stores the session under sb-<project ref>-auth-token. Checking
// for the key first means a visitor without a session never causes a request
// to Supabase from this page.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const AUTH_KEY = SUPABASE_URL ? `sb-${new URL(SUPABASE_URL).hostname.split(".")[0]}-auth-token` : null;
const PRACTICE_KEYS = ["chat_british_seen", "chat_british_streak"];

type State = "hidden" | "idle" | "confirm" | "deleting" | "done" | "error";

function hasStoredSession(): boolean {
  try {
    return AUTH_KEY !== null && window.localStorage.getItem(AUTH_KEY) !== null;
  } catch {
    return false;
  }
}

function clearBrowserData() {
  try {
    for (const key of Object.keys(window.localStorage)) {
      if (PRACTICE_KEYS.includes(key) || (AUTH_KEY && key.startsWith(AUTH_KEY))) window.localStorage.removeItem(key);
    }
  } catch {
    // Storage blocked: nothing was stored there to clear.
  }
}

export default function DeleteMyData() {
  const [state, setState] = useState<State>("hidden");
  const [message, setMessage] = useState("");
  const confirmRef = useRef<HTMLParagraphElement>(null);
  const resultRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!hasStoredSession()) return;
    getSupabaseBrowser()
      .auth.getSession()
      .then(({ data }) => {
        if (data.session) setState("idle");
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (state === "confirm") confirmRef.current?.focus();
    if (state === "done" || state === "error") resultRef.current?.focus();
  }, [state]);

  async function deleteData() {
    setState("deleting");
    try {
      const supabase = getSupabaseBrowser();
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) throw new Error("no session");
      const res = await fetch("/api/delete-my-data", { method: "POST", headers: { Authorization: `Bearer ${token}` } });
      if (res.status !== 204) {
        const body = (await res.json().catch(() => ({}))) as { message?: string };
        setMessage(body.message || "We couldn't delete your data just now. Please try again, or email support@chatbritish.ai.");
        setState("error");
        return;
      }
      // The user no longer exists, so sign out locally only (no request).
      await supabase.auth.signOut({ scope: "local" }).catch(() => {});
      clearBrowserData();
      setState("done");
    } catch {
      setMessage("We couldn't delete your data just now. Please try again, or email support@chatbritish.ai.");
      setState("error");
    }
  }

  if (state === "hidden") return null;

  return (
    <section aria-label="Delete my data" className="mt-12 border-t border-line pt-8">
      {state === "done" ? (
        <p ref={resultRef} tabIndex={-1} role="status" className="text-ink outline-none">
          Your data has been deleted.
        </p>
      ) : state === "confirm" || state === "deleting" ? (
        <div>
          <p ref={confirmRef} tabIndex={-1} className="text-ink outline-none">
            This deletes your profile and sign-in. Practice progress in this browser is cleared too.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={deleteData} disabled={state === "deleting"} className="btn-primary">
              {state === "deleting" ? "Deleting…" : "Yes, delete my data"}
            </button>
            <button type="button" onClick={() => setState("idle")} disabled={state === "deleting"} className="btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          {state === "error" && (
            <p ref={resultRef} tabIndex={-1} role="alert" className="mb-4 text-sm text-brick outline-none">
              {message}
            </p>
          )}
          <button type="button" onClick={() => setState("confirm")} className="btn-secondary">
            Delete my data
          </button>
        </div>
      )}
    </section>
  );
}
