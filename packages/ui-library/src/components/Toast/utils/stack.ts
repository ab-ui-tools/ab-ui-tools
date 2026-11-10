import type { TToastId, TToastRecord } from '../types';

import { TOAST_GAP, TOAST_MAX_STACK, TOAST_PEEK, TOAST_STATE } from '../consts';

export type TToastHeights = Record<string, number>;

export interface TStackLayout {
  /** Distance of each active toast from the anchored edge. */
  offsets: Record<string, number>;
  frontHeight: number;
  height: number;
}

/** Newest in front. Errors stay in front until closed; newer toasts go behind them. */
export const orderFrontFirst = (records: TToastRecord[]): TToastRecord[] =>
  [...records].sort((a, b) => {
    const aError = a.state === TOAST_STATE.ERROR ? 1 : 0;
    const bError = b.state === TOAST_STATE.ERROR ? 1 : 0;
    return bError - aError || b.createdAt - a.createdAt;
  });

/** Depth of a toast behind the front one, capped at the last visible peek. */
export const getStackDepth = (index: number): number => Math.min(index, TOAST_MAX_STACK - 1);

/**
 * Collapsed: older toasts peek 8px behind the front one (max 3 visible).
 * Expanded: toasts are laid out one after another with a 12px gap.
 */
export const getStackLayout = (active: TToastRecord[], heights: TToastHeights, expanded: boolean): TStackLayout => {
  const heightOf = (id: TToastId) => heights[id] ?? 0;
  const offsets: Record<string, number> = {};
  let running = 0;

  active.forEach((record, index) => {
    offsets[record.id] = expanded ? running : getStackDepth(index) * TOAST_PEEK;
    running += heightOf(record.id) + TOAST_GAP;
  });

  const frontHeight = active[0] ? heightOf(active[0].id) : 0;

  if (!active.length) {
    return { offsets, frontHeight, height: 0 };
  }

  const height = expanded
    ? Math.max(0, running - TOAST_GAP)
    : frontHeight + (Math.min(active.length, TOAST_MAX_STACK) - 1) * TOAST_PEEK;

  return { offsets, frontHeight, height };
};
