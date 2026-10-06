// A pen annotation, as if a teacher marked the card (primary ink: brick is
// reserved for wrong answers and errors). Decorative only: the
// card already says the same thing in text, so it's hidden from assistive tech.
export default function MarginNote({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-block font-hand text-[1.4rem] leading-none text-primary ${className}`}>
      {children}
      <svg viewBox="0 0 120 10" fill="none" className="mt-0.5 block h-2 w-[88%]" preserveAspectRatio="none">
        <path
          d="M2 6.5C24 3.5 46 7.8 70 4.6S108 4.2 118 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
