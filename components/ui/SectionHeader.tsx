import { cn } from "@/lib/cn";
import type { SectionHeading } from "@/lib/content/types";

/**
 * Section title + optional subtitle. The `id` is applied to the heading so
 * the wrapping `<section>` can reference it via `aria-labelledby`.
 */
export function SectionHeader({
  heading,
  id,
  center = false,
}: {
  heading: SectionHeading;
  id: string;
  center?: boolean;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-2 pb-12 md:gap-3 md:pb-16",
        center && "items-center text-center",
      )}
    >
      <h2 id={id} className="text-section font-normal leading-tight text-text-primary">
        {heading.title}
      </h2>
      {heading.subtitle && (
        <p className="text-sm tracking-[0.3px] text-text-secondary">{heading.subtitle}</p>
      )}
    </header>
  );
}
