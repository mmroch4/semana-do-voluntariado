"use client";

import { useEffect, useState } from "react";

interface UnitLabels {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number } | null;

function computeTimeLeft(targetMs: number): TimeLeft {
  const diff = targetMs - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Inverse-styled countdown to the opening ceremony (homepage hero).
 *
 * Renders dashes during SSR / first paint, then hydrates and ticks every
 * second. When the target passes it swaps to a celebratory message. A
 * `<noscript>` fallback shows the static date when JavaScript is disabled.
 */
export function Countdown({
  targetIso,
  labels,
  ariaLabel,
  noscriptMessage,
  endedMessage,
}: {
  targetIso: string;
  labels: UnitLabels;
  ariaLabel: string;
  noscriptMessage: string;
  endedMessage: string;
}) {
  const targetMs = new Date(targetIso).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
    setTimeLeft(computeTimeLeft(targetMs));
    const id = setInterval(() => setTimeLeft(computeTimeLeft(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  // The event has begun.
  if (started && timeLeft === null) {
    return (
      <p className="text-center font-display text-[1.25rem] text-text-inverse">{endedMessage}</p>
    );
  }

  const units: { key: keyof UnitLabels; value: number | null }[] = [
    { key: "days", value: timeLeft?.days ?? null },
    { key: "hours", value: timeLeft?.hours ?? null },
    { key: "minutes", value: timeLeft?.minutes ?? null },
    { key: "seconds", value: timeLeft?.seconds ?? null },
  ];

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
      aria-label={ariaLabel}
    >
      {units.map(({ key, value }) => (
        <div key={key} className="flex flex-col items-center gap-1.5">
          <span className="font-display text-[2rem] font-bold leading-none tabular-nums text-text-inverse md:text-[3rem]">
            {value === null ? "—" : pad(value)}
          </span>
          <span className="text-[0.5625rem] font-semibold uppercase leading-none tracking-[0.25em] text-text-inverse-muted md:text-[0.625rem]">
            {labels[key]}
          </span>
        </div>
      ))}
      <noscript>
        <p className="font-display text-[1.25rem] text-text-inverse">{noscriptMessage}</p>
      </noscript>
    </div>
  );
}
