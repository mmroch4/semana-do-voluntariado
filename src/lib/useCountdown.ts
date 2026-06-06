"use client";

import { useEffect, useState } from "react";

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number } | null;

/** Localized label for each countdown unit. */
export interface UnitLabels {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

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

export const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Ticking countdown state for `CountdownBar` (announcement bar), reusable by
 * any future countdown presentation.
 *
 * All time computation is deferred to the client: the server has no stable
 * "now", so consumers render placeholder dashes until mount (`started` is
 * false), then tick every second. Once the target passes, `timeLeft` is null
 * while `started` is true — the "event has begun" state.
 */
export function useCountdown(targetIso: string): { started: boolean; timeLeft: TimeLeft } {
  const targetMs = new Date(targetIso).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // The synchronous setState-on-mount is intentional and matches the rule's
    // documented exception for syncing from an external system (the clock).
    /* eslint-disable react-hooks/set-state-in-effect */
    setStarted(true);
    setTimeLeft(computeTimeLeft(targetMs));
    /* eslint-enable react-hooks/set-state-in-effect */
    const id = setInterval(() => setTimeLeft(computeTimeLeft(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return { started, timeLeft };
}
