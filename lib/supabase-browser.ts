import { createClient, isAuthApiError, type SupabaseClient } from "@supabase/supabase-js";

// Browser-side Supabase client, safe to expose: it only carries the public anon
// key, and access to `users` is gated by RLS. Server routes keep using the
// service-role client in their own files.
//
// NEXT_PUBLIC_* vars are inlined at build time only when referenced literally,
// so don't refactor these into a dynamic process.env[name] lookup.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | undefined;

// Lazy singleton: created on first use so a missing env var surfaces as a
// handled error at the call site instead of crashing the page on import.
export function getSupabaseBrowser(): SupabaseClient {
  if (!client) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    }
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return client;
}

let pendingUserId: Promise<string> | undefined;

// Reuses the persisted session if there is one (supabase-js keeps it in
// localStorage), otherwise signs in anonymously. Concurrent callers share one
// in-flight promise, so React Strict Mode's double effect in dev can't create
// two anonymous users. A failure clears the memo so the next call retries.
export function ensureAnonymousUserId(): Promise<string> {
  if (!pendingUserId) {
    pendingUserId = (async () => {
      const supabase = getSupabaseBrowser();
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;
      if (sessionData.session) {
        // The stored session can outlive its user (deleted by a cleanup job
        // or by "Delete my data" elsewhere): check with Supabase. If the user
        // is gone, sign in fresh below; the new session replaces the stale
        // one. Any other failure (e.g. offline) keeps the stored session.
        const { error: userError } = await supabase.auth.getUser();
        const userGone =
          isAuthApiError(userError) &&
          (userError.status === 401 ||
            userError.status === 403 ||
            userError.code === "user_not_found" ||
            userError.code === "session_not_found" ||
            userError.code === "bad_jwt");
        if (!userGone) return sessionData.session.user.id;
      }

      const { data, error } = await supabase.auth.signInAnonymously();
      if (error) throw error;
      if (!data.user) throw new Error("Anonymous sign-in returned no user.");
      return data.user.id;
    })().catch((err) => {
      pendingUserId = undefined;
      throw err;
    });
  }
  return pendingUserId;
}
