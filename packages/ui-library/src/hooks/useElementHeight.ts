import type { RefObject } from 'react';

import { useLayoutEffect, useRef } from 'react';

/** Calls `onChange` with the element height now and whenever it resizes. */
export const useElementHeight = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onChange: (height: number) => void
): void => {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const report = () => onChangeRef.current(node.getBoundingClientRect().height);
    report();

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver(report);
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);
};
