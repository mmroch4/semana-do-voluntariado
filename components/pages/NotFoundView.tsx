import { ButtonLink } from "@/components/ui/ButtonLink";
import type { NotFoundContent } from "@/lib/content/types";

/**
 * Standalone centered 404 layout (no header/footer), matching the legacy
 * `404.html`. The subtitle is shown in the other language as a courtesy.
 */
export function NotFoundView({
  content,
  homeHref,
}: {
  content: NotFoundContent;
  homeHref: string;
}) {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface-warm px-6 py-12 text-center"
    >
      <p
        aria-hidden="true"
        className="m-0 select-none font-display text-error font-bold leading-[0.9] tracking-[-0.025em] text-brown opacity-15"
      >
        {content.code}
      </p>
      <h1 className="m-0 text-[clamp(1.25rem,1rem+1vw,1.75rem)] font-medium leading-tight text-text-primary">
        {content.title}
      </h1>
      <p
        lang={content.subtitleLang}
        className="m-0 text-[clamp(0.875rem,0.8rem+0.3vw,1rem)] text-text-secondary"
      >
        {content.subtitle}
      </p>
      <p className="mt-4">
        <ButtonLink href={homeHref} variant="primary">
          {content.button}
        </ButtonLink>
      </p>
    </main>
  );
}
