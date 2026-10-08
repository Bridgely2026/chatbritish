// A red-pen annotation, as if a teacher marked the card. The one decorative
// use of brick (see tailwind.config.ts). Decorative only: the card beside it
// already says the same thing in text, so it's hidden from assistive tech.
export default function MarginNote({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-block whitespace-nowrap font-hand text-[30px] leading-none text-brick ${className}`}>
      {children}
      <svg width="150" height="12" viewBox="0 0 150 12" fill="none" className="ml-1 mt-0.5 block">
        <path
          d="M3 8 C30 2, 60 11, 90 5 S135 4, 147 7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
