import Image from "next/image";
import { cn } from "@/lib/cn";
import { Chip } from "./Chip";

/**
 * Image hero with a dark overlay for legible text.
 *
 * - `compact` (default) renders the short page-banner used on inner pages.
 * - The full homepage hero passes `children` (countdown + CTAs), shown below
 *   an accent rule.
 */
export function Hero({
  image,
  chip,
  title,
  subtitle,
  titleId = "page-title",
  compact = true,
  children,
}: {
  image: string;
  chip: string;
  title: string;
  subtitle: string;
  titleId?: string;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "relative flex items-center overflow-hidden bg-surface-dark px-4 md:px-6",
        compact
          ? "min-h-60 py-[clamp(2.5rem,5vw,4rem)] md:min-h-80"
          : "min-h-[32rem] py-16 md:min-h-[40rem] md:py-24",
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-overlay-hero" aria-hidden="true" />

      <div
        className={cn(
          "relative z-[2] mx-auto flex max-w-[56rem] flex-col items-center text-center",
          compact ? "gap-4" : "gap-7 md:gap-8",
        )}
      >
        <div className={cn("flex flex-col items-center", compact ? "gap-2.5" : "gap-2.5 md:gap-3")}>
          <Chip variant="inverse">{chip}</Chip>
          <h1
            id={titleId}
            className={cn(
              "font-normal leading-[1.05] text-text-inverse",
              compact ? "text-[clamp(2.25rem,1.5rem+2vw,3.25rem)]" : "text-hero",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "max-w-[38rem] leading-snug text-text-inverse-soft",
              compact
                ? "text-[clamp(0.875rem,0.8rem+0.3vw,1rem)]"
                : "text-[clamp(0.8125rem,0.7rem+0.4vw,0.9375rem)]",
            )}
          >
            {subtitle}
          </p>
        </div>

        {children && (
          <>
            <hr className="m-0 h-[1.5px] w-10 border-0 bg-accent" aria-hidden="true" />
            {children}
          </>
        )}
      </div>
    </section>
  );
}
