import { NextRequest, NextResponse } from "next/server";
import { logError } from "@/lib/log-error";
import categoryReferenceEmbeddings from "@/lib/category-reference-embeddings.json";

// Classifies onboarding's free-text "struggle" answer against the twelve fixed
// taxonomy categories via Voyage embeddings + cosine similarity, so it can
// feed an extra signal into computeStartingPoint() alongside the situations/
// timeInUk/role modifiers already collected on the same step.
//
// Calibration data only right now (see the [struggle-classify] log below) —
// no confidence floor applied yet, mirroring how app/api/debrief/route.ts's
// CONFIDENT_THRESHOLD/FLOOR_THRESHOLD were only added after a first batch of
// real similarity numbers, not guessed upfront.

const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY;
const VOYAGE_MODEL = "voyage-3";

// Same pattern as the Debrief route: in-memory and per instance, so it resets
// on redeploy and isn't shared between instances. 15 a minute per IP.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const RATE_LIMIT_SWEEP_THRESHOLD = 1000; // sweep idle IPs once the map gets this big

const requestLog = new Map<string, number[]>();

function getClientKey(request: NextRequest): string {
  // The first x-forwarded-for entry is the client.
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unknown";
}

// Returns true if this request is allowed (and records it). Fully
// synchronous, so concurrent requests can't race past it.
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

type CategoryReference = { category: string; embedding: number[] };

const REFERENCES = categoryReferenceEmbeddings as CategoryReference[];

async function embedQuery(text: string): Promise<number[]> {
  const res = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${VOYAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: [text], model: VOYAGE_MODEL, input_type: "query" }),
  });
  if (!res.ok) {
    // The status only: Voyage's response body isn't kept, so it can't be logged.
    throw Object.assign(new Error("Voyage embeddings request failed"), { name: "VoyageError", status: res.status });
  }
  const data = await res.json();
  return data.data[0].embedding;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function POST(request: NextRequest) {
  // Checked first, before any body parsing or Voyage call. Onboarding treats
  // any non-OK response as "no struggle signal" and carries on.
  if (!checkRateLimit(getClientKey(request), Date.now())) {
    return NextResponse.json(
      { topCategory: null, message: "Too many requests, please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } }
    );
  }

  try {
    if (!VOYAGE_API_KEY) {
      throw new Error("Missing required env var: VOYAGE_API_KEY");
    }

    let body: { struggle?: string };
    try {
      body = await request.json();
    } catch {
      throw new Error("Invalid request body.");
    }

    const struggle = body.struggle?.trim();
    if (!struggle) {
      throw new Error("A struggle description is required.");
    }

    const queryEmbedding = await embedQuery(struggle);

    const ranked = REFERENCES.map((ref) => ({
      category: ref.category,
      similarity: cosineSimilarity(queryEmbedding, ref.embedding),
    })).sort((a, b) => b.similarity - a.similarity);

    // Calibration data — log everything, not just the winner, same as
    // debrief's [debrief-debug] logging was used before its thresholds
    // were set from real numbers.
    console.log("[struggle-classify]", JSON.stringify(ranked, null, 2));

    const top = ranked[0];
    if (!top) {
      return NextResponse.json({ topCategory: null });
    }

    return NextResponse.json({ topCategory: top.category, similarity: top.similarity });
  } catch (err) {
    // This classification should never block onboarding submission — fail
    // gracefully with a null result instead of a 500.
    logError("[struggle-classify] failed", err);
    return NextResponse.json({ topCategory: null });
  }
}
