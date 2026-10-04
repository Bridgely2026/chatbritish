import { createHash, timingSafeEqual } from "node:crypto";

// Checks the x-admin-secret header against ADMIN_SYNC_SECRET for the
// app/api/admin routes. Both sides are hashed first so timingSafeEqual always
// compares equal-length buffers and the comparison leaks nothing about the
// secret's length. Fails closed if ADMIN_SYNC_SECRET isn't set.
export function isAdminRequest(request: Request): boolean {
  const expected = process.env.ADMIN_SYNC_SECRET;
  const provided = request.headers.get("x-admin-secret");
  if (!expected || !provided) return false;

  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(provided), digest(expected));
}
