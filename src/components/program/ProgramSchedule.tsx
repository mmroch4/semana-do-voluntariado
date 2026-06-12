"use client";

import { useEffect, useState } from "react";
import {
    defaultDayForDate,
    parseDayParam,
    type CategoryKey,
    type DayNumber,
} from "@/lib/content/activities";
import { Notice } from "@/components/ui/Notice";
import { CategoryFilter } from "./CategoryFilter";
import { DayTabs } from "./DayTabs";
import { DayTimeline } from "./DayTimeline";
import { ProgramMap } from "./ProgramMap";
import type { ScheduleDay, ScheduleStrings } from "./types";

/**
 * Interactive day-by-day schedule: day tabs + category filter + timeline +
 * map. Owns the selected day and the active category filter.
 *
 * Day selection and the URL:
 * - The server (and first client paint) always render day 1, so prerendered
 *   HTML and hydration match — the same "defer clock reads to the client"
 *   pattern as `useCountdown`.
 * - After mount, the day comes from the `?dia=` / `?day=` query param when
 *   present (shareable deep links), otherwise from "today" while the event
 *   week is running (day 1 before, day 6 after).
 * - Picking a tab writes the param with `history.pushState` — a shallow
 *   update with no server round-trip; back/forward are handled via
 *   `popstate`. This keeps the route fully static, so all six days stay in
 *   the crawlable HTML (a `useSearchParams` approach would bail the subtree
 *   out of prerendering).
 */
export function ProgramSchedule({
    days,
    categories,
    strings,
    paramName,
}: {
    days: ScheduleDay[];
    categories: { key: CategoryKey; label: string }[];
    strings: ScheduleStrings;
    paramName: string;
}) {
    const [day, setDay] = useState<DayNumber>(1);
    const [activeCategories, setActiveCategories] = useState<readonly CategoryKey[]>([]);

    useEffect(() => {
        const dayFromUrl = () =>
            parseDayParam(new URLSearchParams(window.location.search).get(paramName));
        // Synchronous setState on mount syncs from external systems (URL, clock) —
        // the documented exception to the rule, same as `useCountdown`.
        /* eslint-disable-next-line react-hooks/set-state-in-effect */
        setDay(dayFromUrl() ?? defaultDayForDate(new Date()));
        const onPopState = () => setDay(dayFromUrl() ?? defaultDayForDate(new Date()));
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, [paramName]);

    function selectDay(next: DayNumber) {
        setDay(next);
        const params = new URLSearchParams(window.location.search);
        params.set(paramName, String(next));
        window.history.pushState(null, "", `${window.location.pathname}?${params.toString()}`);
    }

    function toggleCategory(key: CategoryKey) {
        setActiveCategories((current) =>
            current.includes(key) ? current.filter((k) => k !== key) : [...current, key],
        );
    }

    const selectedDay = days.find((d) => d.day === day) ?? days[0];
    const visibleActivities =
        activeCategories.length > 0
            ? selectedDay.activities.filter((a) => activeCategories.includes(a.category))
            : selectedDay.activities;

    const announcement = strings.dayAnnounce
        .replace("{day}", selectedDay.tab.long)
        .replace("{count}", String(visibleActivities.length));

    return (
        <div>
            <DayTabs days={days} selected={day} onSelect={selectDay} label={strings.tabsLabel} />

            <CategoryFilter
                categories={categories}
                active={activeCategories}
                onToggle={toggleCategory}
                onClear={() => setActiveCategories([])}
                label={strings.filterLabel}
                allLabel={strings.filterAllLabel}
            />

            {/* Announces day/filter changes to screen readers. */}
            <p aria-live="polite" className="sr-only">
                {announcement}
            </p>

            <DayTimeline
                days={days}
                selected={day}
                activeCategories={activeCategories}
                capacityLabel={strings.capacityLabel}
                emptyState={strings.emptyState}
            />

            <div className="mt-12 md:mt-16">
                <h3 className="text-heading font-normal leading-tight text-text-primary">
                    {strings.mapHeading.title}
                </h3>
                {strings.mapHeading.subtitle && (
                    <p className="mt-2 text-sm tracking-[0.3px] text-text-secondary">
                        {strings.mapHeading.subtitle}
                    </p>
                )}
                <div className="mt-6">
                    <ProgramMap
                        points={visibleActivities}
                        ariaLabel={strings.mapAriaLabel}
                        capacityLabel={strings.capacityLabel}
                    />
                </div>
            </div>

            <Notice className="mt-8 text-center">{strings.notice}</Notice>
        </div>
    );
}
