import { cn } from "@/lib/cn";

/**
 * Italic placeholder line used for "em atualização" / content-gated copy.
 * Uses `role="status"` so assistive tech announces it as a live region.
 */
export function Notice({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      role="status"
      className={cn("text-[0.8125rem] italic text-text-secondary", className)}
    >
      {children}
    </p>
  );
}
