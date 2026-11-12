import type { RefObject } from 'react';

import { useEffect } from 'react';

import { TOAST_FRONT_HEIGHT_VAR, TOAST_STACK_GAP } from '../consts';

const ACTIVE_TOAST_SELECTOR = '.Toastify__toast[data-in="true"]';

const placeExpandedToasts = (toasts: HTMLElement[]) => {
  let offset = 0;

  [...toasts].reverse().forEach((toast, index) => {
    const direction = toast.dataset.pos === 'top' ? 1 : -1;
    toast.style.setProperty('--y', `${direction * (offset + index * TOAST_STACK_GAP)}px`);
    offset += toast.offsetHeight;
  });
};

export const useStackLayout = (rootRef: RefObject<HTMLElement | null>, enabled: boolean): void => {
  useEffect(() => {
    const root = rootRef.current;
    if (!enabled || !root) {
      return;
    }

    const sync = () => {
      const toasts = Array.from(root.querySelectorAll<HTMLElement>(ACTIVE_TOAST_SELECTOR));
      const front = toasts[toasts.length - 1];

      if (!front) {
        root.style.removeProperty(TOAST_FRONT_HEIGHT_VAR);
        return;
      }
      front.removeAttribute('data-collapsed');
      root.style.setProperty(TOAST_FRONT_HEIGHT_VAR, `${front.offsetHeight}px`);

      if (toasts.some(toast => toast.dataset.collapsed === 'false')) {
        placeExpandedToasts(toasts);
      }
    };

    const observer = new MutationObserver(sync);
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['data-in', 'data-collapsed'],
    });
    window.addEventListener('resize', sync);
    sync();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [rootRef, enabled]);
};
