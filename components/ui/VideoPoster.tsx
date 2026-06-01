import Image from "next/image";

/**
 * Video poster: a large image with a dark overlay and a centered play button,
 * linking out to the video. Decorative image; the link carries the label.
 */
export function VideoPoster({
  image,
  caption,
  href,
  ariaLabel,
}: {
  image: string;
  caption: string;
  href: string;
  ariaLabel: string;
}) {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <a
        href={href}
        aria-label={ariaLabel}
        className="group relative block w-full overflow-hidden rounded-md bg-surface-dark"
      >
        <Image
          src={image}
          alt=""
          width={1280}
          height={512}
          className="h-45 w-full object-cover md:h-100 lg:h-128"
        />
        <span className="absolute inset-0 bg-overlay-hero" aria-hidden="true" />
        <span
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border-2 border-text-inverse text-text-inverse transition group-hover:scale-105 group-hover:bg-text-inverse/15 md:h-16 md:w-16"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current md:h-7 md:w-7">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </a>
      <figcaption className="text-center text-[0.8125rem] text-text-secondary">{caption}</figcaption>
    </figure>
  );
}
