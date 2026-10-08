// Server error logging that can't leak user data: a fixed label, the error's
// name, and an HTTP status or error code when the error carries one. Never
// the message, response body, Postgres details or any input, because those
// can quote what the user wrote (a Postgres constraint error, for example,
// includes the failing row).
export function logError(label: string, err: unknown): void {
  const e = (typeof err === "object" && err !== null ? err : {}) as {
    name?: unknown;
    status?: unknown;
    code?: unknown;
  };
  const fields: Record<string, string | number> = {
    name: typeof e.name === "string" && /^[A-Za-z]{1,40}$/.test(e.name) ? e.name : typeof err,
  };
  if (typeof e.status === "number") fields.status = e.status;
  // Codes are short identifiers (Postgres "23502", PostgREST "PGRST116");
  // anything else is dropped rather than risk logging text.
  if (typeof e.code === "string" && /^[A-Za-z0-9_]{1,16}$/.test(e.code)) fields.code = e.code;
  console.error(`${label} ${JSON.stringify(fields)}`);
}
