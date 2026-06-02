import { cn } from "@/lib/cn";

/**
 * Centered content column, capped at the design's container width with the
 * responsive gutter (1.5rem mobile → 3rem from 768px). Mirrors the legacy
 * `.container` rule.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[var(--container-max)] px-6 md:px-12", className)}>
      {children}
    </div>
  );
}
