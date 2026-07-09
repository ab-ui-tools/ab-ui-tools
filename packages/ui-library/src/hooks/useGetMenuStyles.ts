import { useMemo } from 'react';

import { useGetElemSizes } from './useGetElemSizes';
import { useGetElemPositions } from './useGetElemPositions';

const MENU_DIRECTIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

const MENU_CORNER_POSITIONS = [
  `${MENU_DIRECTIONS.TOP}-${MENU_DIRECTIONS.LEFT}`,
  `${MENU_DIRECTIONS.TOP}-${MENU_DIRECTIONS.RIGHT}`,
  `${MENU_DIRECTIONS.BOTTOM}-${MENU_DIRECTIONS.LEFT}`,
  `${MENU_DIRECTIONS.BOTTOM}-${MENU_DIRECTIONS.RIGHT}`,
] as const;

export type TMenuCornerPosition = (typeof MENU_CORNER_POSITIONS)[number];

const GAP = 4;
const EDGE_BUFFER = 8;

const isCornerPosition = (value?: string): value is TMenuCornerPosition =>
  !!value && MENU_CORNER_POSITIONS.includes(value as TMenuCornerPosition);

const getPreferredPosition = (
  triggerLeft: number,
  triggerTop: number,
  windowWidth: number,
  windowHeight: number
): TMenuCornerPosition => {
  const vertical = triggerTop > windowHeight / 2 ? MENU_DIRECTIONS.TOP : MENU_DIRECTIONS.BOTTOM;
  const horizontal = triggerLeft > windowWidth / 2 ? MENU_DIRECTIONS.LEFT : MENU_DIRECTIONS.RIGHT;
  return `${vertical}-${horizontal}`;
};

type TMenuStyles = {
  top: number;
  left: number;
};

export const useGetMenuStyles = (
  parentRef: HTMLElement | null,
  menuRef: HTMLElement | null,
  position?: string
): TMenuStyles => {
  const { left, top, right, bottom } = useGetElemPositions(parentRef);
  const { width: menuWidth, height: menuHeight } = useGetElemSizes(menuRef);

  return useMemo(() => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    const preferredPosition = isCornerPosition(position)
      ? position
      : getPreferredPosition(left, top, windowWidth, windowHeight);
    const [preferredVertical, preferredHorizontal] = preferredPosition.split('-');

    const hasTopSpace = menuHeight + EDGE_BUFFER < top;
    const hasBottomSpace = menuHeight + EDGE_BUFFER < windowHeight - bottom;
    const hasSpaceToGrowRight = menuWidth + EDGE_BUFFER < windowWidth - left;
    const hasSpaceToGrowLeft = menuWidth + EDGE_BUFFER < right;

    let vertical = preferredVertical;
    if (vertical === MENU_DIRECTIONS.BOTTOM && !hasBottomSpace && hasTopSpace) {
      vertical = MENU_DIRECTIONS.TOP;
    } else if (vertical === MENU_DIRECTIONS.TOP && !hasTopSpace && hasBottomSpace) {
      vertical = MENU_DIRECTIONS.BOTTOM;
    }

    let horizontal = preferredHorizontal;
    if (horizontal === MENU_DIRECTIONS.LEFT && !hasSpaceToGrowLeft && hasSpaceToGrowRight) {
      horizontal = MENU_DIRECTIONS.RIGHT;
    } else if (horizontal === MENU_DIRECTIONS.RIGHT && !hasSpaceToGrowRight && hasSpaceToGrowLeft) {
      horizontal = MENU_DIRECTIONS.LEFT;
    }

    return {
      top: vertical === MENU_DIRECTIONS.TOP ? top - menuHeight - GAP : bottom + GAP,
      left: horizontal === MENU_DIRECTIONS.LEFT ? right - menuWidth : left + GAP,
    };
  }, [left, top, right, bottom, position, menuWidth, menuHeight]);
};
