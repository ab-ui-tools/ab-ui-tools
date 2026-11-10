import type { FocusEvent, MouseEvent } from 'react';

import { useCallback, useEffect, useId, useState } from 'react';

import type { TToastDevice } from '../types';

import { useDocumentHidden, useOnOutsideClick } from '../../../hooks';

interface TStackHandlers {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
  onTouchCancel: () => void;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

interface TUseStackInteractionResult {
  /** Callback ref for the stack element (tap outside it collapses the stack on mobile). */
  stackRef: (node: HTMLElement | null) => void;
  /** The stack is open: every toast is fully visible. */
  isExpanded: boolean;
  /** Timers are paused: hover, keyboard focus, touch, tap-expanded or a hidden tab. */
  isPaused: boolean;
  handlers: TStackHandlers;
}

/**
 * Web: hover or focus opens the stack. Mobile: tap opens it, tap outside closes it.
 * It closes by itself when the stack empties.
 */
export const useStackInteraction = (device: TToastDevice, count: number): TUseStackInteractionResult => {
  const [stackNode, setStackNode] = useState<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isTapExpanded, setIsTapExpanded] = useState(false);
  const isDocumentHidden = useDocumentHidden();
  const isMobile = device === 'mobile';

  const collapse = useCallback(() => setIsTapExpanded(false), []);

  useOnOutsideClick(stackNode, collapse, isTapExpanded, useId());

  useEffect(() => {
    if (!count) {
      setIsHovered(false);
      setIsFocused(false);
      setIsTapExpanded(false);
    }
  }, [count]);

  const handlers: TStackHandlers = {
    onMouseEnter: () => !isMobile && setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsFocused(true),
    onBlur: event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
        setIsFocused(false);
      }
    },
    onTouchStart: () => setIsTouching(true),
    onTouchEnd: () => setIsTouching(false),
    onTouchCancel: () => setIsTouching(false),
    onClick: event => {
      if (!isMobile || isTapExpanded || count < 2 || (event.target as HTMLElement).closest('button')) {
        return;
      }
      setIsTapExpanded(true);
    },
  };

  return {
    stackRef: setStackNode,
    isExpanded: count > 1 && (isMobile ? isTapExpanded : isHovered || isFocused),
    isPaused: isHovered || isFocused || isTouching || isTapExpanded || isDocumentHidden,
    handlers,
  };
};
