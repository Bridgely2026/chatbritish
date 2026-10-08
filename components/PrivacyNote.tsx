import Link from "next/link";

// A short line under a field that collects personal information, saying how
// it's used, with a link to the privacy page. Give it an id and point the
// field's aria-describedby at it, so screen readers hear it with the field.
export default function PrivacyNote({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="mt-2 text-xs leading-relaxed text-muted">
      {children}{" "}
      <Link href="/privacy" className="link">
        How we use your information
      </Link>
    </p>
  );
}
