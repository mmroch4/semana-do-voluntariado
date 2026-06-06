import type { CategoryKey } from "@/lib/content/activities";

/**
 * Tailwind class sets per activity category. Kept as literal strings (not
 * template-built `bg-cat-${key}`) so Tailwind's source scanner generates
 * every utility. Tokens live in globals.css under "activity categories".
 */
export interface CategoryStyle {
  /** Solid surface: active filter chips and category badges. */
  solid: string;
  /** Soft tint surface: icon circles and inactive filter chips. */
  soft: string;
  /** Category-colored text/icons on light surfaces. */
  text: string;
  /** Card accent border. */
  border: string;
}

export const categoryStyles: Record<CategoryKey, CategoryStyle> = {
  conference: {
    solid: "bg-cat-conference text-text-inverse",
    soft: "bg-cat-conference-soft",
    text: "text-cat-conference",
    border: "border-cat-conference",
  },
  volunteering: {
    solid: "bg-cat-volunteering text-text-inverse",
    soft: "bg-cat-volunteering-soft",
    text: "text-cat-volunteering",
    border: "border-cat-volunteering",
  },
  workshop: {
    solid: "bg-cat-workshop text-text-inverse",
    soft: "bg-cat-workshop-soft",
    text: "text-cat-workshop",
    border: "border-cat-workshop",
  },
  sport: {
    solid: "bg-cat-sport text-text-inverse",
    soft: "bg-cat-sport-soft",
    text: "text-cat-sport",
    border: "border-cat-sport",
  },
  culture: {
    solid: "bg-cat-culture text-text-inverse",
    soft: "bg-cat-culture-soft",
    text: "text-cat-culture",
    border: "border-cat-culture",
  },
};
