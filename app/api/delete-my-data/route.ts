import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { logError } from "@/lib/log-error";

// Deletes the caller's own data: their public.users row and their (anonymous)
// auth user. The caller proves who they are with their Supabase access token;
// it's verified here with the service-role client, so a user can only ever
// delete themselves. Logs nothing about the user: no id, no IP, no token.
//
// debrief_gaps rows carry no user id, so they can't be tied to a user and
// aren't touched.

// Same pattern as the other routes: in-memory and per instance. 5 a minute.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_SWEEP_THRESHOLD = 1000;

const requestLog = new Map<string, number[]>();

function getClientKey(request: NextRequest): string {
  // The first x-forwarded-for entry is the client.
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unknown";
}

function checkRateLimit(key: string, now: number): boolean {
  if (requestLog.size > RATE_LIMIT_SWEEP_THRESHOLD) {
    for (const [k, stamps] of requestLog) {
      if (stamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) requestLog.delete(k);
    }
  }
  const recent = (requestLog.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(key, recent);
    return false;
  }
  recent.push(now);
  requestLog.set(key, recent);
  return true;
}

function error(status: number, message: string) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: NextRequest) {
  if (!checkRateLimit(getClientKey(request), Date.now())) {
    return NextResponse.json(
      { message: "Too many requests, please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } }
    );
  }

  const token = request.headers.get("authorization")?.match(/^Bearer\s+(\S+)$/i)?.[1];
  if (!token) return error(401, "Sign-in required.");

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    logError("[delete-my-data] misconfigured", new Error());
    return error(500, "This isn't available right now. Please email support@chatbritish.ai.");
  }
  const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });

  // Verify the token with Supabase and take the user id from it, never from
  // the request body.
  const { data, error: authError } = await admin.auth.getUser(token);
  if (authError || !data.user) return error(401, "Your sign-in has expired. Please email support@chatbritish.ai.");
  const userId = data.user.id;

  const { error: rowError } = await admin.from("users").delete().eq("id", userId);
  if (rowError) {
    logError("[delete-my-data] users delete failed", rowError);
    return error(500, "We couldn't delete your data just now. Please try again, or email support@chatbritish.ai.");
  }

  const { error: userError } = await admin.auth.admin.deleteUser(userId);
  if (userError) {
    logError("[delete-my-data] auth user delete failed", userError);
    return error(500, "We couldn't delete your data just now. Please try again, or email support@chatbritish.ai.");
  }

  return new NextResponse(null, { status: 204 });
}
