import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function WordBridgeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="8" className="fill-mark" />
      <path
        d="M7.2 9.2 12 22.8h2.15L16 14.4l1.85 8.4H20L24.8 9.2h-2.2L20.05 19.4 18.1 9.2h-4.2L11.95 19.4 9.4 9.2H7.2Z"
        className="fill-mark-foreground"
      />
    </svg>
  );
}

export function WordBridgeLogo({
  className,
  to = "/",
  compact = false,
}: {
  className?: string;
  to?: "/";
  compact?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-sm text-foreground no-underline",
        className,
      )}
      aria-label="WordBridge home"
    >
      <WordBridgeMark />
      {compact ? null : (
        <span className="font-sans text-sm font-semibold tracking-tight">WordBridge</span>
      )}
    </Link>
  );
}
