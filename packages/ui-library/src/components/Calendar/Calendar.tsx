import { useId, useRef, useState } from 'react';
import classNames from 'classnames';

import type { ICalendarProp } from './types';

import { CalendarPopup } from './CalendarPopup';
import { useChangePositionsOnScroll } from '../../hooks/useChangePositionsOnScroll';
import {
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace,
  useHideOnResize,
  useOnOutsideClick,
  useRecalculateDropdownPosition,
} from '../../hooks';
import { DROPDOWN_AND_INPUT_GAP } from '../../consts';

export const Calendar = ({ children, shouldRecalculatePosition = false, ...props }: ICalendarProp) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const [calendarRef, setCalendarRef] = useState<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeCalendarPopup = () => setIsOpen(false);

  const hasTopSpace = useGetHasTopSpace({
    element: calendarRef,
    input: childrenRef.current,
  });

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: calendarRef,
    input: childrenRef.current,
  });

  const { bottom, top, left } = useGetElemPositions(childrenRef.current);
  const { width: calendarWidth } = useGetElemSizes(calendarRef);

  const clampedLeft =
    typeof window !== 'undefined' && calendarWidth
      ? Math.max(0, Math.min(left, window.innerWidth - calendarWidth))
      : left;

  useChangePositionsOnScroll({
    parentElement: childrenRef?.current,
    childElement: calendarRef,
    hasBottomSpace,
  });

  useHideOnResize(closeCalendarPopup);

  useOnOutsideClick([childrenRef.current, calendarRef], closeCalendarPopup, isOpen, useId());
  useRecalculateDropdownPosition({
    shouldRecalculatePosition,
    isOpen,
    anchorRef: childrenRef,
    floatingRef: calendarRef,
  });

  return (
    <div className="calendar" ref={containerRef}>
      <div ref={childrenRef} onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen && (
        <div
          className="calendar-popup-container"
          style={{
            left: clampedLeft,
            ...(hasBottomSpace || !hasTopSpace
              ? {
                  top: bottom + DROPDOWN_AND_INPUT_GAP,
                  maxHeight: window.innerHeight - bottom - DROPDOWN_AND_INPUT_GAP,
                }
              : {
                  bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP,
                  maxHeight: top - DROPDOWN_AND_INPUT_GAP,
                }),
          }}
          ref={setCalendarRef}
        >
          <CalendarPopup {...props} closeCalendarPopup={closeCalendarPopup} />
        </div>
      )}
    </div>
  );
};
