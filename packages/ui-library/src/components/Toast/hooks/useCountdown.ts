import { useEffect, useRef, useState } from 'react';

import { TOAST_COUNTDOWN_TICK } from '../consts';

export const useCountdown = (total: number, isPaused: boolean, onExpire: () => void): number => {
  const [remaining, setRemaining] = useState(total);
  const remainingRef = useRef(total);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!total || isPaused) {
      return;
    }

    const startedAt = Date.now();
    const left = remainingRef.current;
    const getLeft = () => Math.max(0, left - (Date.now() - startedAt));

    const timeout = setTimeout(() => onExpireRef.current(), left);
    const interval = setInterval(() => setRemaining(getLeft()), TOAST_COUNTDOWN_TICK);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      remainingRef.current = getLeft();
      setRemaining(remainingRef.current);
    };
  }, [total, isPaused]);

  return remaining;
};
