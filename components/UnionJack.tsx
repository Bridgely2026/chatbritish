// The Union Jack at 2:1, drawn inline (no image request). The clip paths need
// ids that are unique on the page, so each use passes its own `id`.
// Decorative: always next to the words "Chat British" or the tagline.
export default function UnionJack({ id, className = "h-3 w-6" }: { id: string; className?: string }) {
  const s = `uk-s-${id}`;
  const t = `uk-t-${id}`;
  return (
    <svg
      viewBox="0 0 60 30"
      aria-hidden="true"
      focusable="false"
      // Hairline outline so the white edges read on a white background.
      className={`inline-block shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.18)] ${className}`}
    >
      <clipPath id={s}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={t}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${s})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${t})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
