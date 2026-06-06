"use client";

import { pad, useCountdown, type UnitLabels } from "@/lib/useCountdown";

/**
 * Compact announcement-bar countdown, shown between the header and the
 * homepage banner.
 *
 * Inverse band styling (dark brown surface, gold digits) matching the footer
 * and share band. The ticking logic lives in `useCountdown`: dashes during
 * SSR / first paint, per-second ticks after mount, a celebratory line once
 * the event starts, and a `<noscript>` static date for no-JS visitors.
 * The digits sit in a `role="timer"` element —
 * deliberately *not* a live region, so screen readers don't announce every
 * tick.
 */
export function CountdownBar({
  targetIso,
  label,
  units,
  ariaLabel,
  noscriptMessage,
  endedMessage,
}: {
  targetIso: string;
  label: string;
  units: UnitLabels;
  ariaLabel: string;
  noscriptMessage: string;
  endedMessage: string;
}) {
  const { started, timeLeft } = useCountdown(targetIso);

  const entries: { key: keyof UnitLabels; value: number | null }[] = [
    { key: "days", value: timeLeft?.days ?? null },
    { key: "hours", value: timeLeft?.hours ?? null },
    { key: "minutes", value: timeLeft?.minutes ?? null },
    { key: "seconds", value: timeLeft?.seconds ?? null },
  ];

  return (
    <div className="bg-brown-light px-4 py-2.5 text-text-inverse md:px-6">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-baseline justify-center gap-x-5 gap-y-1.5">
        {started && timeLeft === null ? (
          <p className="m-0 text-[0.8125rem] font-medium tracking-[0.3px]">{endedMessage}</p>
        ) : (
          <>
            <span className="text-[0.6875rem] font-normal leading-none tracking-[0.15em] text-text-inverse-muted">
              {label}
            </span>
            <span role="timer" aria-label={ariaLabel} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {entries.map(({ key, value }) => (
                <span key={key} className="flex items-baseline gap-1">
                  <span className="flex items-center justify-center w-12 h-8 rounded bg-transparent font-display text-[1.5rem] font-bold leading-none tabular-nums text-white">
                    {value === null ? "—" : pad(value)}
                  </span>
                  <span className="text-[0.5625rem] font-normal leading-none tracking-[0.2em] text-text-inverse-muted">
                    {units[key]}
                  </span>
                </span>
              ))}
            </span>
            <noscript>
              <span className="text-[0.8125rem] tracking-[0.3px]">{noscriptMessage}</span>
            </noscript>
          </>
        )}
      </div>
    </div>
  );
}
