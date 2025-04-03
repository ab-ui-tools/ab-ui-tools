import { useCallback, useRef } from 'react';

const useDebouncedCallback = <T>(
  callback: (...args: T[]) => void,
  delay: number,
  dependencies: unknown[] = []
): ((...args: T[]) => void) => {
  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);

  return useCallback((...args: T[]) => {
    if (timeout.current != null) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, dependencies);
};

export default useDebouncedCallback;
