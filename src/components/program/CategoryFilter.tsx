import { cn } from "@/lib/cn";
import type { CategoryKey } from "@/lib/content/activities";

/**
 * Toggle-chip filter for activity categories. An empty selection means
 * "show everything"; the leading "All" chip clears the selection. Filtering
 * applies to both the day timeline and the map pins.
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
  const chipClass = (isActive: boolean) =>
    cn(
      "rounded-pill px-3 py-1.5 text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.15em] transition-colors",
      isActive ? "bg-brown text-text-inverse" : "bg-surface-alt text-text-secondary hover:bg-border",
    );

  return (
    <fieldset className="mt-6">
      <legend className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-text-secondary">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={active.length === 0} onClick={onClear} className={chipClass(active.length === 0)}>
          {allLabel}
        </button>
        {categories.map((c) => {
          const isActive = active.includes(c.key);
          return (
            <button
              key={c.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(c.key)}
              className={chipClass(isActive)}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
