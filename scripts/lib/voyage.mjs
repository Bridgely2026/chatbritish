// Shared Voyage embeddings client, used by the taxonomy sync and the
// category-reference embedding CLI scripts.
//
// Paced for Voyage's free tier: 3 requests/min and 10K tokens/min. Texts are
// sent ~20 per request, and before each request we wait until a sliding
// 60-second window has room for it. The window lives at module level, so
// repeated calls to an admin route on the same server instance keep pacing
// against each other. A 429 still falls back to retry-with-backoff.

const VOYAGE_URL = "https://api.voyageai.com/v1/embeddings";
export const VOYAGE_MODEL = "voyage-3";

export const EMBED_BATCH_SIZE = 20;
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;
// Kept under the 10K limit to leave headroom for the token estimate below
// being slightly off.
const MAX_TOKENS_PER_WINDOW = 9_000;
const MAX_EMBED_RETRIES = 5;

// Conservative estimate (English averages ~4 chars/token) — we only see the
// real count after the request.
function estimateTokens(text) {
  return Math.ceil(text.length / 3);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// { at: timestamp, tokens } for each request sent in the last WINDOW_MS.
const recentRequests = [];

async function waitForCapacity(tokens, log) {
  for (;;) {
    const now = Date.now();
    while (recentRequests.length > 0 && now - recentRequests[0].at >= WINDOW_MS) {
      recentRequests.shift();
    }
    const usedTokens = recentRequests.reduce((sum, r) => sum + r.tokens, 0);
    if (
      recentRequests.length < MAX_REQUESTS_PER_WINDOW &&
      (recentRequests.length === 0 || usedTokens + tokens <= MAX_TOKENS_PER_WINDOW)
    ) {
      recentRequests.push({ at: now, tokens });
      return;
    }
    const delayMs = recentRequests[0].at + WINDOW_MS - now + 250;
    log(`Pacing Voyage requests for the free-tier rate limit, waiting ${Math.ceil(delayMs / 1000)}s...`);
    await sleep(delayMs);
  }
}

// Splits texts into batches of up to EMBED_BATCH_SIZE, also capped so a single
// batch never exceeds the per-minute token budget on its own.
function toBatches(texts) {
  const batches = [];
  let current = [];
  let currentTokens = 0;
  for (const text of texts) {
    const tokens = estimateTokens(text);
    if (current.length > 0 && (current.length >= EMBED_BATCH_SIZE || currentTokens + tokens > MAX_TOKENS_PER_WINDOW)) {
      batches.push(current);
      current = [];
      currentTokens = 0;
    }
    current.push(text);
    currentTokens += tokens;
  }
  if (current.length > 0) batches.push(current);
  return batches;
}

async function embedBatch(texts, { apiKey, inputType, log }, attempt = 1) {
  await waitForCapacity(
    texts.reduce((sum, t) => sum + estimateTokens(t), 0),
    log
  );

  const res = await fetch(VOYAGE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: texts, model: VOYAGE_MODEL, input_type: inputType }),
  });

  if (res.status === 429 && attempt <= MAX_EMBED_RETRIES) {
    const retryAfterHeader = res.headers.get("retry-after");
    const delayMs = retryAfterHeader ? Number(retryAfterHeader) * 1000 : Math.min(20000 * attempt, 60000);
    log(
      `Rate limited by Voyage, retrying in ${Math.round(delayMs / 1000)}s (attempt ${attempt}/${MAX_EMBED_RETRIES})...`
    );
    await sleep(delayMs);
    return embedBatch(texts, { apiKey, inputType, log }, attempt + 1);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Voyage embeddings request failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  // Voyage returns one item per input, each tagged with its input index.
  return [...data.data].sort((a, b) => a.index - b.index).map((d) => d.embedding);
}

// Embeds `texts` in paced batches and returns embeddings in the same order.
export async function embedTexts(texts, { apiKey, inputType = "document", log = console.log } = {}) {
  if (!apiKey) throw new Error("Missing required env var: VOYAGE_API_KEY");
  const embeddings = [];
  for (const batch of toBatches(texts)) {
    embeddings.push(...(await embedBatch(batch, { apiKey, inputType, log })));
  }
  return embeddings;
}
