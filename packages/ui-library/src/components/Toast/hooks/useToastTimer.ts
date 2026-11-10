import { useEffect, useRef, useState } from 'react';

import { TOAST_COUNTDOWN_TICK, TOAST_MIN_RESUME } from '../consts';

interface TUseToastTimerArgs {
  /** `null` = no timer. */
  duration: number | null;
  paused: boolean;
  /** A new version restarts the timer from `duration`. */
  version: number;
  onExpire: () => void;
  /** Re-render with the remaining time (Pending action countdown). */
  trackRemaining?: boolean;
}

/**
 * Pausable auto-close timer. On resume the toast keeps its remaining time, but at least 2 s.
 * Returns the remaining time in ms (kept up to date only with `trackRemaining`).
 */
export const useToastTimer = ({
  duration,
  paused,
  version,
  onExpire,
  trackRemaining = false,
}: TUseToastTimerArgs): number => {
  const [remaining, setRemaining] = useState(duration ?? 0);
  const remainingRef = useRef(duration ?? 0);
  const wasPausedRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    remainingRef.current = duration ?? 0;
    wasPausedRef.current = false;
    setRemaining(duration ?? 0);
  }, [version, duration]);

  useEffect(() => {
    if (duration === null) {
      return;
    }
    if (paused) {
      wasPausedRef.current = true;
      return;
    }
    if (wasPausedRef.current) {
      remainingRef.current = Math.max(remainingRef.current, TOAST_MIN_RESUME);
      wasPausedRef.current = false;
    }

    const startedAt = Date.now();
    const left = remainingRef.current;
    const getLeft = () => Math.max(0, left - (Date.now() - startedAt));

    const timeout = setTimeout(() => onExpireRef.current(), left);
    const interval = trackRemaining ? setInterval(() => setRemaining(getLeft()), TOAST_COUNTDOWN_TICK) : undefined;

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      remainingRef.current = getLeft();
      if (trackRemaining) {
        setRemaining(remainingRef.current);
      }
    };
  }, [paused, version, duration, trackRemaining]);

  return remaining;
};
