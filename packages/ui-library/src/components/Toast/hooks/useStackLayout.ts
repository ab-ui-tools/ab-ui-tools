import type { RefObject } from 'react';

import { useEffect } from 'react';

import { TOAST_FRONT_HEIGHT_VAR, TOAST_STACK_GAP, TOAST_STACK_MAX_DEPTH, TOAST_STACK_PEEK } from '../consts';

const CONTAINER_SELECTOR = '.Toastify__toast-container';
const ACTIVE_TOAST_SELECTOR = '.Toastify__toast[data-in="true"]';

const placeToasts = (toasts: HTMLElement[], isExpanded: boolean) => {
  let offset = 0;

  [...toasts].reverse().forEach((toast, index) => {
    const direction = toast.dataset.pos === 'top' ? 1 : -1;
    const y = isExpanded ? offset + index * TOAST_STACK_GAP : Math.min(index, TOAST_STACK_MAX_DEPTH) * TOAST_STACK_PEEK;

    toast.style.setProperty('--y', `${direction * y}px`);
    offset += toast.offsetHeight;
  });
};

const syncContainer = (container: HTMLElement) => {
  const toasts = Array.from(container.querySelectorAll<HTMLElement>(ACTIVE_TOAST_SELECTOR));
  const front = toasts[toasts.length - 1];

  if (!front) {
    container.style.removeProperty(TOAST_FRONT_HEIGHT_VAR);
    return;
  }
  front.removeAttribute('data-collapsed');
  container.style.setProperty(TOAST_FRONT_HEIGHT_VAR, `${front.offsetHeight}px`);

  placeToasts(
    toasts,
    toasts.some(toast => toast.dataset.collapsed === 'false')
  );
};

export const useStackLayout = (rootRef: RefObject<HTMLElement | null>, enabled: boolean): void => {
  useEffect(() => {
    const root = rootRef.current;
    if (!enabled || !root) {
      return;
    }

    const sync = () => root.querySelectorAll<HTMLElement>(CONTAINER_SELECTOR).forEach(syncContainer);

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
