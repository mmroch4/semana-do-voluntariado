import { cn } from "@/lib/cn";

type Pad = "default" | "tight" | "none";

const padding: Record<Pad, string> = {
  default: "py-[clamp(3rem,6vw,7.5rem)]",
  tight: "py-[clamp(2.25rem,4vw,5rem)]",
  none: "py-0",
};

/**
 * Page section with consistent vertical rhythm and an optional alternate
 * (darker cream) background. Pass either `labelledby` (id of a heading inside)
 * or `label` for an accessible name.
 */
export function Section({
  children,
  pad = "default",
  alt = false,
  labelledby,
  label,
  id,
  className,
}: {
  children: React.ReactNode;
  pad?: Pad;
  alt?: boolean;
  labelledby?: string;
  label?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledby}
      aria-label={label}
      className={cn(padding[pad], alt && "bg-surface-alt", className)}
    >
      {children}
    </section>
  );
}
