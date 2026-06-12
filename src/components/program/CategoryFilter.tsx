import { cn } from "@/lib/cn";
import type { CategoryKey } from "@/lib/content/activities";
import { categoryStyles } from "./categoryStyles";
import { CheckIcon } from "./icons";

const chipBase =
  "cursor-pointer inline-flex items-center gap-1.5 rounded-pill border px-3.5 py-2 text-[0.6875rem] font-bold uppercase leading-none tracking-[0.15em] transition-colors";

/**
 * Toggle-chip filter for activity categories, each chip in its category
 * color: soft tint when off, solid (plus a check mark, so state never relies
 * on color alone) when on. An empty selection means "show everything"; the
 * leading "All" chip clears it. Filtering applies to the timeline and pins.
 */
export function CategoryFilter({
  categories,
  active,
  onToggle,
  onClear,
  label,
  allLabel,
}: {
  categories: { key: CategoryKey; label: string }[];
  active: readonly CategoryKey[];
  onToggle: (key: CategoryKey) => void;
  onClear: () => void;
  label: string;
  allLabel: string;
}) {
  const allActive = active.length === 0;
  return (
    <fieldset className="mt-6">
      <legend className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={allActive}
          onClick={onClear}
          className={cn(
            chipBase,
            allActive
              ? "border-brown bg-brown text-text-inverse"
              : "border-border bg-surface text-text-secondary hover:bg-surface-alt",
          )}
        >
          {allActive && <CheckIcon className="h-3 w-3" />}
          {allLabel}
        </button>
        {categories.map((c) => {
          const isActive = active.includes(c.key);
          const style = categoryStyles[c.key];
          return (
            <button
              key={c.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(c.key)}
              className={cn(
                chipBase,
                "border-transparent",
                isActive ? style.solid : cn(style.soft, style.text, "hover:brightness-95"),
              )}
            >
              {isActive && <CheckIcon className="h-3 w-3" />}
              {c.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
