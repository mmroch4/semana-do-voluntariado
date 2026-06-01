import Image from "next/image";

/**
 * Horizontal gallery. On small screens it scroll-snaps; from 768px the images
 * share the width as equal columns. Decorative — `role="presentation"`.
 */
export function PhotoStrip({
  images,
  className,
}: {
  images: readonly string[];
  className?: string;
}) {
  return (
    <div
      role="presentation"
      className={`photo-strip flex h-45 gap-1 overflow-x-auto overflow-y-hidden rounded-sm md:h-70 md:overflow-hidden ${className ?? ""}`}
    >
      {images.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={448}
          height={560}
          className="h-full w-56 shrink-0 snap-start object-cover md:w-0 md:min-w-0 md:flex-1"
        />
      ))}
    </div>
  );
}
