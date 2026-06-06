"use client";

import dynamic from "next/dynamic";
import type { ScheduleActivity } from "./types";

/**
 * Client-only wrapper around the Leaflet map. Leaflet reads `window` on
 * import, so the real map must skip SSR entirely — and `ssr: false` is only
 * allowed inside a client component, hence this thin layer. The fixed-height
 * placeholder mirrors the map size to avoid layout shift while it loads.
 */
const LeafletMap = dynamic(() => import("./LeafletMap").then((m) => m.LeafletMap), {
  ssr: false,
  loading: () => <div className="h-[420px] w-full rounded-md bg-surface-alt" aria-hidden="true" />,
});

export function ProgramMap({
  points,
  ariaLabel,
  capacityLabel,
}: {
  points: ScheduleActivity[];
  ariaLabel: string;
  capacityLabel: string;
}) {
  return (
    <div role="region" aria-label={ariaLabel} className="program-map">
      <LeafletMap points={points} capacityLabel={capacityLabel} />
    </div>
  );
}
