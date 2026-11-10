import type { PointerEvent } from 'react';

import { useRef, useState } from 'react';

import { TOAST_SWIPE_THRESHOLD } from '../consts';

interface TSwipeHandlers {
  onPointerDown: (event: PointerEvent<HTMLElement>) => void;
  onPointerMove: (event: PointerEvent<HTMLElement>) => void;
  onPointerUp: () => void;
  onPointerCancel: () => void;
}

interface TUseSwipeToDismissResult {
  offsetX: number;
  handlers: TSwipeHandlers;
}

/** Horizontal swipe; past the threshold it calls `onDismiss`, otherwise it snaps back. Buttons don't start a swipe. */
export const useSwipeToDismiss = (enabled: boolean, onDismiss: () => void): TUseSwipeToDismissResult => {
  const [offsetX, setOffsetX] = useState(0);
  const startX = useRef<number | null>(null);

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (!enabled || (event.target as HTMLElement).closest('button')) {
      return;
    }
    startX.current = event.clientX;
    // Keep getting move/up events even if the pointer leaves the toast (mouse or pen drag).
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (startX.current !== null) {
      setOffsetX(event.clientX - startX.current);
    }
  };

  const onPointerEnd = () => {
    if (startX.current === null) {
      return;
    }
    startX.current = null;

    if (Math.abs(offsetX) > TOAST_SWIPE_THRESHOLD) {
      onDismiss();
    } else {
      setOffsetX(0);
    }
  };

  return {
    offsetX,
    handlers: { onPointerDown, onPointerMove, onPointerUp: onPointerEnd, onPointerCancel: onPointerEnd },
  };
};
