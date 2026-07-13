import { useEffect, useLayoutEffect } from 'react';

import type { TTooltipPosition } from '../types/globalTypes';

// useLayoutEffect warns during SSR; fall back to useEffect when there is no DOM.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const GAP = 8;
// Matches --ds-tooltip-arrow-position in _tooltip.scss: the arrow's fixed CSS offset
// from the tooltip's edge for *-left / *-right variants.
const ARROW_CSS_OFFSET = 16;

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), Math.max(min, max));

type TElementRef = { readonly current: HTMLElement | null };

type TFitToViewportInfo = {
  enabled: boolean;
  elemRef: HTMLElement | null;
  tooltipRef: TElementRef;
  arrowRef?: TElementRef;
  position: TTooltipPosition;
  arrowSize?: number;
};

export const useFitToViewport = ({
  enabled,
  elemRef,
  tooltipRef,
  arrowRef,
  position,
  arrowSize = 16,
}: TFitToViewportInfo): void => {
  useIsomorphicLayoutEffect(() => {
    const node = tooltipRef.current;
    if (!enabled || !node || !elemRef) {
      return;
    }

    const anchor = elemRef.getBoundingClientRect();
    const isMiddle = position.includes('middle');
    const isRight = position.includes('right');
    const isCenter = position.includes('center');

    // Measure with full room first: a fixed element shrinks to the space on its right,
    // so its width would otherwise depend on where it lands.
    node.style.left = `${GAP}px`;
    const width = node.offsetWidth;

    // Horizontal: anchor to the trigger, then clamp inside the viewport.
    let intendedLeft = anchor.left; // *-left variants
    if (isMiddle) {
      intendedLeft = isRight ? anchor.right + GAP : anchor.left - width - GAP;
    } else if (isRight) {
      intendedLeft = anchor.right - width;
    } else if (isCenter) {
      intendedLeft = anchor.left + anchor.width / 2 - width / 2;
    }
    const left = clamp(intendedLeft, GAP, window.innerWidth - width - GAP);
    node.style.left = `${left}px`;

    // Vertical: same, measured after the width has settled.
    const height = node.offsetHeight;
    let intendedTop = position.includes('top') ? anchor.top - height - GAP : anchor.bottom + GAP;
    if (isMiddle) {
      intendedTop = anchor.top + (anchor.height - height) / 2;
    }
    const top = clamp(intendedTop, GAP, window.innerHeight - height - GAP);
    node.style.top = `${top}px`;

    const arrow = arrowRef?.current;
    if (!arrow) {
      return;
    }

    // The arrow moves along one axis: vertical for middle variants, horizontal otherwise.
    const axis = isMiddle
      ? ({
          start: 'top',
          end: 'bottom',
          from: anchor.top,
          to: anchor.bottom,
          tipStart: top,
          tipSize: height,
          intended: intendedTop,
        } as const)
      : ({
          start: 'left',
          end: 'right',
          from: anchor.left,
          to: anchor.right,
          tipStart: left,
          tipSize: width,
          intended: intendedLeft,
        } as const);

    // Where the arrow's center sits by CSS default. Middle variants center the tooltip
    // on the trigger, so their default coincides with the trigger's center.
    const triggerCenter = (axis.from + axis.to) / 2;
    const cssDefaultCenter = isMiddle
      ? triggerCenter
      : isCenter
        ? left + width / 2
        : left + (isRight ? width - ARROW_CSS_OFFSET - arrowSize / 2 : ARROW_CSS_OFFSET + arrowSize / 2);

    // Keep the design's default arrow position whenever it still points at the trigger.
    // Steer it only when it would miss (tiny trigger, or the tooltip was shifted to fit) —
    // centering on a large trigger would point at empty space instead of the default spot.
    const wasShifted = Math.round(axis.tipStart) !== Math.round(axis.intended);
    if (!wasShifted && cssDefaultCenter >= axis.from && cssDefaultCenter <= axis.to) {
      arrow.style[axis.start] = '';
      arrow.style[axis.end] = '';
      return;
    }
    const steered = clamp(triggerCenter - axis.tipStart - arrowSize / 2, GAP, axis.tipSize - arrowSize - GAP);
    arrow.style[axis.start] = `${steered}px`;
    arrow.style[axis.end] = 'auto';
  });
};
