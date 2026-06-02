import Image from "next/image";
import { Chip } from "./Chip";
import type { MediaCard as MediaCardData } from "@/lib/content/types";

/** Responsive grid of media cards: 1 col → 2 (≥640px) → 3 (≥1024px). */
export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {children}
    </ul>
  );
}

/** Image-topped card with a category chip, title and supporting line. */
export function MediaCard({ card }: { card: MediaCardData }) {
  return (
    <li className="flex">
      <article className="flex w-full flex-col overflow-hidden rounded-md border border-border-subtle bg-surface shadow-card">
        <Image
          src={card.image}
          alt=""
          width={640}
          height={400}
          className="h-50 w-full object-cover"
        />
        <div className="flex flex-col items-start gap-2 p-6">
          <Chip variant="solid">{card.chip}</Chip>
          <h3 className="text-[1.375rem] font-medium leading-tight text-text-primary">
            {card.title}
          </h3>
          <p className="text-sm text-text-secondary">{card.text}</p>
        </div>
      </article>
    </li>
  );
}
