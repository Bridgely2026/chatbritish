import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { embedCategoryReferences } from "@/scripts/lib/category-references.mjs";

// Embeds the twelve category reference texts from Railway (where Voyage calls
// work) and returns the [{ category, embedding }] JSON in the response body —
// not written to disk, since Railway's disk resets on deploy. Save the body
// as lib/category-reference-embeddings.json and commit it.

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const voyageApiKey = process.env.VOYAGE_API_KEY;
  if (!voyageApiKey) {
    return NextResponse.json({ error: "Missing required env var: VOYAGE_API_KEY" }, { status: 500 });
  }

  try {
    const results = await embedCategoryReferences({
      voyageApiKey,
      log: (line: string) => console.log(`[admin/embed-category-refs] ${line}`),
    });
    return NextResponse.json(results);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[admin/embed-category-refs] failed:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
