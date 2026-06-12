import Image from "next/image";

/**
 * Event logo mark — a colourful, transparent-ground lockup that reads on both
 * light (header) and dark (footer) surfaces.
 *
 * Pass a non-empty `alt` where the logo carries the accessible name (e.g. the
 * home link); pass `alt=""` where it is decorative because a text equivalent
 * is already present nearby.
 */
export function Logo({ alt, className }: { alt: string; className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt={alt}
      width={1526}
      height={854}
      priority
      className={className}
    />
  );
}
