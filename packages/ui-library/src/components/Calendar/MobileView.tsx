import ReactCalendar from 'react-calendar';
import React, { useEffect, useRef } from 'react';
import { enUS, hy, ru } from 'date-fns/locale';
import { differenceInMonths, startOfMonth, format } from 'date-fns';
import { useVirtualizer } from '@tanstack/react-virtual';

import type { IMobileViewProp } from './types';

import { Text } from '../Text';
import { getMonthByIndex } from '../../utils/helpers';

const MIN_YEAR = 1971;
const MIDDLE_INDEX = differenceInMonths(new Date(), new Date(`${MIN_YEAR}-01-01`));
const localeMap: Record<string, Locale> = {
  en: enUS,
  hy: hy,
  ru: ru,
};

export const MobileView = ({
  draftRange,
  draftValue,
  locale,
  dataId,
  handleDayClick,
  getTileClassName,
  maxYear,
  ...props
}: IMobileViewProp) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const didInitScrollRef = useRef<boolean>(false);

  const virtualizer = useVirtualizer({
    count: (maxYear - MIN_YEAR + 1) * 12,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 340,
    overscan: 3,
  });

  const getSelectedMonthIndex = () => {
    const baseDate = startOfMonth(new Date());
    let targetDate: Date | null = null;
    if (Array.isArray(draftRange) && draftRange[0]) {
      targetDate = new Date(draftRange[0]);
    } else if (draftValue instanceof Date) {
      targetDate = draftValue;
    }
    if (!targetDate || isNaN(targetDate.getTime())) {
      return MIDDLE_INDEX;
    }

    const monthDiff = differenceInMonths(startOfMonth(targetDate), baseDate);
    return MIDDLE_INDEX + monthDiff;
  };

  const scrollToSelectedMonth = (index: number) => {
    requestAnimationFrame(() => {
      virtualizer.scrollToIndex(index, {
        align: 'start',
      });
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const index = getSelectedMonthIndex();
    if (!index) return;

    didInitScrollRef.current = true;
    scrollToSelectedMonth(index);
  }, [draftValue, draftRange]);

  return (
    <div ref={containerRef} className="mobile-infinite-calendar">
      <div
        className="mobile-infinite-calendar-container"
        style={{
          height: virtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map(virtualRow => {
          const month = getMonthByIndex(virtualRow.index - MIDDLE_INDEX);

          return (
            <div
              key={virtualRow.key}
              ref={virtualizer.measureElement}
              data-index={virtualRow.index}
              className="mobile-calendar-month"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <Text weight="bold" className="month-title">
                {format(month, 'LLLL yyyy', { locale: localeMap[locale] || enUS })}
              </Text>
              <ReactCalendar
                {...props}
                locale={locale}
                data-id={dataId}
                allowPartialRange
                showNeighboringMonth={false}
                onClickDay={handleDayClick}
                value={draftValue || null}
                tileClassName={({ date }) => getTileClassName(date)}
                activeStartDate={month}
                showNavigation={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
