import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import type { TStackLayout, TToastHeights } from '../utils';
import type { TToastId, TToastRecord } from '../types';

import { getStackLayout } from '../utils';

interface TStackPosition {
  index: number;
  offset: number;
}

interface TUseStackLayoutResult extends TStackLayout {
  onHeight: (id: TToastId, height: number) => void;
  getPosition: (record: TToastRecord) => TStackPosition;
}

const pickHeights = (heights: TToastHeights, records: TToastRecord[]): TToastHeights => {
  const next = records.reduce<TToastHeights>((acc, { id }) => {
    if (heights[id] !== undefined) {
      acc[id] = heights[id];
    }
    return acc;
  }, {});
  return Object.keys(next).length === Object.keys(heights).length ? heights : next;
};

/** Measures every toast and works out the stack offsets and height. */
export const useStackLayout = (
  records: TToastRecord[],
  active: TToastRecord[],
  isExpanded: boolean
): TUseStackLayoutResult => {
  const [heights, setHeights] = useState<TToastHeights>({});
  const lastPositions = useRef<Record<string, TStackPosition>>({});

  const onHeight = useCallback((id: TToastId, height: number) => {
    setHeights(prev => (prev[id] === height ? prev : { ...prev, [id]: height }));
  }, []);

  const layout = useMemo(() => getStackLayout(active, heights, isExpanded), [active, heights, isExpanded]);

  // Remember where every toast was after this render — used when it gets dismissed in the next one.
  useLayoutEffect(() => {
    const next: Record<string, TStackPosition> = {};
    records.forEach(record => {
      const index = active.indexOf(record);
      if (index >= 0) {
        next[record.id] = { index, offset: layout.offsets[record.id] ?? 0 };
      } else if (lastPositions.current[record.id]) {
        next[record.id] = lastPositions.current[record.id];
      }
    });
    lastPositions.current = next;
  });

  // Forget the heights of removed toasts.
  useEffect(() => {
    setHeights(prev => pickHeights(prev, records));
  }, [records]);

  const getPosition = (record: TToastRecord): TStackPosition => {
    const index = active.indexOf(record);
    if (index >= 0) {
      return { index, offset: layout.offsets[record.id] ?? 0 };
    }
    return lastPositions.current[record.id] ?? { index: 0, offset: 0 };
  };

  return { ...layout, onHeight, getPosition };
};
