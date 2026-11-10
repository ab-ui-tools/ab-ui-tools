import type { RefObject } from 'react';

import { useEffect } from 'react';

/** Adds the `inert` attribute while `isInert` is true: the element stays visible but cannot be clicked, focused or read by screen readers. */
export const useInert = <T extends HTMLElement>(ref: RefObject<T | null>, isInert: boolean): void => {
  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (isInert) {
      node.setAttribute('inert', '');
    } else {
      node.removeAttribute('inert');
    }
  }, [ref, isInert]);
};
