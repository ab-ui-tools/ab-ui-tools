import { useEffect } from 'react';

import type { TTooltipPosition } from '../types/globalTypes';

const GAP = 8;
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
  useEffect(() => {
    const node = tooltipRef.current;
    if (!enabled || !node || !elemRef) {
      return;
    }

    const anchor = elemRef.getBoundingClientRect();
    const isMiddle = position.includes('middle');
    const isRight = position.includes('right');

    // Measure with full room first: a fixed element shrinks to the space on its right,
    // so its width would otherwise depend on where it lands. At the left edge it reaches
    // its natural width, which stays stable once placed (its final spot always has room).
    node.style.left = `${GAP}px`;
    const width = node.offsetWidth;

    // Horizontal target from the trigger + that stable width.
    let intendedLeft = anchor.left; // *-left variants
    if (isMiddle) {
      intendedLeft = isRight ? anchor.right + GAP : anchor.left - width - GAP;
    } else if (isRight) {
      intendedLeft = anchor.right - width;
    } else if (position.includes('center')) {
      intendedLeft = anchor.left + anchor.width / 2 - width / 2;
    }
    const left = clamp(intendedLeft, GAP, window.innerWidth - width - GAP);
    node.style.left = `${left}px`;

    // Vertical target, measured after the width has settled.
    const height = node.offsetHeight;
    let intendedTop = position.includes('top') ? anchor.top - height - GAP : anchor.bottom + GAP;
    if (isMiddle) {
      intendedTop = anchor.top + (anchor.height - height) / 2;
    }
    const top = clamp(intendedTop, GAP, window.innerHeight - height - GAP);
    node.style.top = `${top}px`;

    // Steer the arrow to the trigger only when the tooltip was shifted to fit;
    // otherwise clear it so the design's default arrow position applies.
    const arrow = arrowRef?.current;
    if (!arrow) {
      return;
    }
    if (isMiddle) {
      if (Math.round(top) !== Math.round(intendedTop)) {
        const center = anchor.top + anchor.height / 2 - top - arrowSize / 2;
        arrow.style.top = `${clamp(center, GAP, height - arrowSize - GAP)}px`;
        arrow.style.bottom = 'auto';
      } else {
        arrow.style.top = '';
        arrow.style.bottom = '';
      }
    } else if (Math.round(left) !== Math.round(intendedLeft)) {
      const center = anchor.left + anchor.width / 2 - left - arrowSize / 2;
      arrow.style.left = `${clamp(center, GAP, width - arrowSize - GAP)}px`;
      arrow.style.right = 'auto';
    } else {
      arrow.style.left = '';
      arrow.style.right = '';
    }
  });
};
