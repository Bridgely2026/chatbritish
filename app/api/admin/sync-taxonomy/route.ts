import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { isAdminRequest } from "@/lib/admin-auth";
import { syncTaxonomy, TaxonomyValidationError } from "@/scripts/lib/sync-taxonomy.mjs";

// Runs the same taxonomy sync as `npm run taxonomy:sync-db`, from Railway
// (where Voyage calls work) instead of locally. Dry run unless the body says
// { "dryRun": false }. A real run processes ROWS_PER_CALL rows and returns
// { done, remaining } — call again until done is true; unchanged rows skip
// by content hash.

const ROWS_PER_CALL = 40;
const SOURCE_PATH = path.join(process.cwd(), "data", "chat_british_taxonomy_template.xlsx");

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let dryRun = true;
  try {
    const body = await request.json();
    if (body?.dryRun === false) dryRun = false;
  } catch {
    // No/invalid body: keep the dry-run default.
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, VOYAGE_API_KEY } = process.env;
  const missing = Object.entries({ SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, VOYAGE_API_KEY })
    .filter(([, value]) => !value)
    .map(([name]) => name);
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing required env var(s): ${missing.join(", ")}` }, { status: 500 });
  }

  const log: string[] = [];
  try {
    const result = await syncTaxonomy({
      sourcePath: SOURCE_PATH,
      supabase: createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!),
      voyageApiKey: VOYAGE_API_KEY,
      dryRun,
      limit: ROWS_PER_CALL,
      log: (line: string) => {
        console.log(`[admin/sync-taxonomy] ${line}`);
        log.push(line);
      },
    });
    return NextResponse.json({ ...result, log });
  } catch (err) {
    if (err instanceof TaxonomyValidationError) {
      return NextResponse.json({ error: err.message, problems: err.problems, log }, { status: 422 });
    }
    const message = err instanceof Error ? err.message : String(err);
    console.error("[admin/sync-taxonomy] failed:", message);
    return NextResponse.json({ error: message, log }, { status: 500 });
  }
}
