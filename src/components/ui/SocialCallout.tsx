import { cn } from "@/lib/cn";
import { ButtonLink } from "./ButtonLink";
import type { SocialCallout as SocialCalloutData } from "@/lib/content/types";

/** Color treatment for the #VoluntariadoUPorto block. */
type Tone = "dark" | "cream";

const tones: Record<Tone, { wrap: string; eyebrow: string; title: string; body: string; notice: string }> = {
  dark: {
    wrap: "bg-text-accent text-text-inverse",
    eyebrow: "text-accent",
    title: "text-text-inverse",
    body: "text-text-inverse-soft",
    notice: "text-text-inverse-muted",
  },
  cream: {
    wrap: "bg-surface-warm text-text-primary",
    eyebrow: "text-accent",
    title: "text-accent",
    body: "text-text-primary",
    notice: "text-text-secondary",
  },
};

/** Campaign callout with the event hashtag and a share CTA. */
export function SocialCallout({
  content,
  tone = "dark",
  titleId,
}: {
  content: SocialCalloutData;
  tone?: Tone;
  titleId: string;
}) {
  const t = tones[tone];
  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "flex items-center justify-center px-6 py-[clamp(3rem,6vw,6.25rem)]",
        t.wrap,
      )}
    >
      <div className="mx-auto flex w-full max-w-[36rem] flex-col items-center gap-4 text-center">
        <p className={cn("text-[0.6875rem] font-semibold uppercase tracking-[0.15em]", t.eyebrow)}>
          {content.eyebrow}
        </p>
        <h2 id={titleId} className={cn("text-callout font-bold leading-tight", t.title)}>
          {content.title}
        </h2>
        <p className={cn("text-[clamp(0.875rem,0.8rem+0.3vw,0.9375rem)] leading-relaxed", t.body)}>
          {content.body}
        </p>
        <p className="my-2">
          <ButtonLink href="#" variant="primary">
            {content.cta}
          </ButtonLink>
        </p>
        <p className={cn("text-xs italic", t.notice)}>{content.notice}</p>
      </div>
    </section>
  );
}
