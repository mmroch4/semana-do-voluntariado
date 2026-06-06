"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CATEGORY_KEYS, type CategoryKey } from "@/lib/content/activities";
import { categoryStyles } from "./categoryStyles";
import type { ScheduleActivity } from "./types";

/**
 * Custom pins, one per category color. Leaflet's default marker PNGs resolve
 * relative to its CSS and break under bundlers, so we use a `divIcon` with an
 * inline SVG instead — fills come from the design tokens via the
 * `.program-pin--<category>` rules in globals.css.
 */
const PIN_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" aria-hidden="true"><path class="program-pin-body" d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.27 21.73 0 14 0Z"/><circle class="program-pin-dot" cx="14" cy="14" r="5.5"/></svg>';

const pinIcons = Object.fromEntries(
  CATEGORY_KEYS.map((category) => [
    category,
    L.divIcon({
      className: `program-pin program-pin--${category}`,
      html: PIN_SVG,
      iconSize: [28, 36],
      iconAnchor: [14, 36],
      popupAnchor: [0, -32],
    }),
  ]),
) as Record<CategoryKey, L.DivIcon>;

/** Center of Porto; only shown until the first `fitBounds` runs. */
const PORTO_CENTER: [number, number] = [41.1579, -8.6291];

/**
 * Re-frames the map whenever the visible pin set changes (day switch or
 * category filter). `invalidateSize` guards against the classic grey-tiles
 * bug after layout changes; `animate: false` keeps it reduced-motion safe.
 */
function FitToPoints({ points }: { points: ScheduleActivity[] }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    if (points.length === 0) return;
    map.fitBounds(L.latLngBounds(points.map((p) => [p.lat, p.lng])), {
      padding: [40, 40],
      maxZoom: 16,
      animate: false,
    });
  }, [map, points]);
  return null;
}

/**
 * Leaflet map with one pin per visible activity. Loaded only on the client
 * (`ProgramMap` imports it with `ssr: false`) because Leaflet touches
 * `window` at module scope. Markers are keyboard-focusable (Leaflet default)
 * and Enter opens the popup.
 */
export function LeafletMap({
  points,
  capacityLabel,
}: {
  points: ScheduleActivity[];
  capacityLabel: string;
}) {
  return (
    <MapContainer
      center={PORTO_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[420px] w-full rounded-md shadow-card"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <FitToPoints points={points} />
      {points.map((p) => (
        <Marker
          key={p.id}
          position={[p.lat, p.lng]}
          icon={pinIcons[p.category]}
          title={p.title}
          alt={`${p.title} — ${p.venueName}`}
        >
          <Popup>
            <p className="program-popup-title">{p.title}</p>
            <p>
              <time dateTime={p.datetime}>{p.endTime ? `${p.time}–${p.endTime}` : p.time}</time>
              {" · "}
              <span className={`font-bold uppercase tracking-[0.1em] text-[0.6875rem] ${categoryStyles[p.category].text}`}>
                {p.categoryLabel}
              </span>
            </p>
            <p>{p.venueLabel}</p>
            <p>{capacityLabel.replace("{n}", String(p.capacity))}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
