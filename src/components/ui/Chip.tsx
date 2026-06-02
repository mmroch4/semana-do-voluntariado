import { cn } from "@/lib/cn";

type ChipVariant = "default" | "solid" | "inverse" | "accent";

const variants: Record<ChipVariant, string> = {
  default: "text-text-secondary",
  solid: "rounded-pill bg-surface-alt px-3 py-1.5 text-text-secondary",
  inverse: "text-text-inverse-muted",
  accent: "text-accent",
};

/** Small uppercase eyebrow / category label. */
export function Chip({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: ChipVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.15em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
