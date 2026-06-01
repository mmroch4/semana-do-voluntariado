import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "onImage";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-pill px-8 text-base font-medium leading-none no-underline transition-colors duration-150";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-text hover:bg-accent-hover",
  secondary:
    "border-[1.5px] border-current bg-transparent text-text-accent hover:bg-text-accent hover:text-text-inverse",
  onImage:
    "border-[1.5px] border-text-inverse bg-transparent text-text-inverse hover:bg-text-inverse hover:text-text-primary",
};

/**
 * Pill button rendered as a link. Internal app routes use `next/link`;
 * hash, `mailto:` and external links fall back to a plain anchor.
 */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(base, variants[variant], className);
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
