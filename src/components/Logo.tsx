export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3 L28 9 L28 23 L16 29 L4 23 L4 9 Z" />
        <path d="M16 3 L16 16 M16 16 L28 9 M16 16 L4 9 M16 16 L16 29" />
      </svg>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase">ISOC Nevada</span>
    </div>
  );
}
