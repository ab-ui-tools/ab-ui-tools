import React, { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { isSameDay } from 'date-fns';
import classNames from 'classnames';

import type { TRangeValue, TCalendarValue, TValuePiece, TCalendarPopupPropTypes } from './types';

import { MobileView } from './MobileView';
import { DesktopView } from './DesktopView';
import { Text } from '../Text';
import { Switcher } from '../Switcher';
import { IconArrowRight } from '../SVGIcons';
import { Input } from '../Input';
import { Button } from '../Button';
import {
  combineDateTime,
  formatDateByPattern,
  formatTime,
  isSameDate,
  isSameRange,
  isValidDate,
  orderRangeDate,
} from '../../utils/helpers';

export const CalendarPopup = ({
  isRange,
  dataId,
  onChange,
  canControlRange,
  hasInputs,
  withTime,
  fastActions,
  selectedValue,
  showApplyButtons,
  resetButtonText = 'Reset',
  applyButtonText = 'Apply',
  rangeControlText = 'Apply range',
  locale = 'en',
  maxYear = 2050,
  formatDate = 'DD/MM/YYYY',
  closeCalendarPopup,
  ...props
}: TCalendarPopupPropTypes) => {
  const [canRangeSelect, setCanRangeSelect] = useState(isRange);
  const [value, setValue] = useState<TCalendarValue>();
  const [draftValue, setDraftValue] = useState<TValuePiece>();
  const [draftRange, setDraftRange] = useState<TRangeValue>([null, null]);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [startDate, setStartDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const hasPendingChanges = useMemo(() => {
    if (canRangeSelect) {
      const [draftStart, draftEnd] = draftRange;
      if (Array.isArray(value)) {
        const [valueStart, valueEnd] = value;

        if (!draftStart || !draftEnd) return true;

        return isSameDay(draftStart as Date, valueStart as Date) && isSameDay(draftEnd as Date, valueEnd as Date);
      } else {
        return !draftStart || !draftEnd;
      }
    } else {
      return !draftValue || isSameDay(draftValue, value as Date);
    }
  }, [canRangeSelect, draftRange, draftValue, value]);

  const canReset = useMemo(() => {
    if (canRangeSelect) {
      const [draftStart, draftEnd] = draftRange;
      return !draftStart && !draftEnd;
    } else {
      return !draftValue;
    }
  }, [canRangeSelect, draftRange, draftValue]);

  const handleDateChange = (date: Date) => {
    const selectedDate = dayjs(date as TValuePiece).format(formatDate);
    const time = dayjs(date as TValuePiece).format('HH:mm');
    setStartDate(selectedDate);
    setStartTime(time);
    setDraftValue(date as TValuePiece);
  };

  const handleRangeChange = (date: Date) => {
    setDraftRange(([start, end]) => {
      if (!start) {
        return [date, null];
      }
      if (start && !end) {
        const orderedDate = orderRangeDate([date, start]);
        if (!showApplyButtons) {
          onChange?.([...orderedDate] as TCalendarValue);
        }
        const start_date = dayjs(orderedDate[0]).format(formatDate);
        const end_date = dayjs(orderedDate[1]).format(formatDate);
        setStartDate(start_date);
        setEndDate(end_date);
        return orderedDate;
      }
      if (!showApplyButtons) {
        onChange?.([date, null]);
      }
      return [date, null];
    });
  };

  const handleChange = (date: Date) => {
    if (canRangeSelect) {
      handleRangeChange(date);
    } else {
      handleDateChange(date);
    }
  };

  const handleSetStartAndEndDateInputValues = (start: TValuePiece, end?: TValuePiece) => {
    if (end) {
      const selectedStartDate = dayjs(start);
      const selectedEndDate = dayjs(end);

      setStartTime(selectedStartDate.format('HH:mm'));
      setEndTime(selectedEndDate.format('HH:mm'));
      setStartDate(selectedStartDate.format(formatDate));
      setEndDate(selectedEndDate.format(formatDate));
    } else if (isValidDate({ date: `${start}`, format: formatDate })) {
      setStartDate(dayjs(start).format(formatDate));
      setStartTime(dayjs(start).format('HH:mm'));
    }
  };

  const handleReset = () => {
    setValue(null);
    setDraftValue(null);
    setDraftRange([null, null]);
    closeCalendarPopup();
  };

  const handleApply = () => {
    const date = canRangeSelect ? orderRangeDate([...draftRange]) : draftValue;
    setValue(date);
    if (onChange) {
      onChange(date as TCalendarValue);
    }
    closeCalendarPopup();
  };

  const getTileClassName = (date: Date) => {
    if (!canRangeSelect) return null;
    const [start, end] = draftRange;
    if (!start) return null;
    if (!end && dayjs(date).isSame(start, 'day')) {
      return 'react-calendar__tile--rangeStart react-calendar__tile--rangeEnd';
    }
    if (end && dayjs(date).isSame(start, 'day')) {
      return 'react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart';
    }
    if (end && dayjs(date).isSame(end, 'day')) {
      return 'react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeEnd';
    }
    if (end && dayjs(date).isAfter(start, 'day') && dayjs(date).isBefore(end, 'day')) {
      return 'react-calendar__tile--active react-calendar__tile--range';
    }
    return null;
  };

  const onFastActionSelect = (value: Date | [Date, Date]) => {
    if (Array.isArray(value)) {
      setDraftRange(value);
    } else {
      setDraftValue(value);
    }
  };

  const isSelectedFastAction = (date: Date | [Date, Date]) => {
    if (Array.isArray(date)) {
      return isSameRange(date, draftRange);
    } else {
      if (!draftValue) return false;
      return isSameDate(date, draftValue as Date);
    }
  };

  const onChangeRangeControl = () => {
    setCanRangeSelect(prev => !prev);
    setValue(null);
    setDraftRange([null, null]);
    setDraftValue(null);
    setStartTime('');
    setEndTime('');
    setStartDate('');
    setEndDate('');
  };

  const onStartDateBlur = () => {
    const startDateTime = combineDateTime({ date: startDate, time: startTime, format: formatDate });
    const endDateTime = combineDateTime({ date: endDate, time: endTime, format: formatDate });
    if (!startDateTime || !isValidDate({ date: startDate, format: formatDate })) {
      setStartDate('');
      setStartTime('');
      return;
    }
    if (dayjs(endDateTime).isBefore(startDateTime)) {
      setEndDate('');
      setEndTime('');
    }
    if (canRangeSelect) {
      setDraftRange([startDateTime, combineDateTime({ date: endDate, time: endTime, format: formatDate })]);
    } else {
      setDraftValue(startDateTime);
    }
  };

  const onEndDateBlur = () => {
    const endDateTime = combineDateTime({ date: endDate, time: endTime, format: formatDate });
    const startDateTime = combineDateTime({ date: startDate, time: startTime, format: formatDate });
    if (!endDateTime || !isValidDate({ date: endDate, format: formatDate })) {
      setEndDate('');
      setEndTime('');
      return;
    }
    if (dayjs(startDateTime).isAfter(endDateTime)) {
      setStartDate('');
      setStartTime('');
    }
    if (canRangeSelect) {
      setDraftRange([startDateTime, endDateTime]);
    } else {
      setDraftValue(endDateTime);
    }
  };

  useEffect(() => {
    if (!showApplyButtons) {
      setValue(draftValue || orderRangeDate([...draftRange]));
    }
  }, [draftValue, draftRange, showApplyButtons]);

  useEffect(() => {
    if (!selectedValue) return;
    if (canRangeSelect) {
      if (Array.isArray(selectedValue)) {
        setDraftRange(selectedValue);
        handleSetStartAndEndDateInputValues(...selectedValue);
      } else {
        setDraftValue(selectedValue);
      }
    }
  }, [selectedValue]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="react-calendar-wrapper">
      {canControlRange && (
        <div className="header-control-wrapper">
          <Switcher
            size="small"
            selectedValue={canRangeSelect}
            label={rangeControlText}
            onClick={() => onChangeRangeControl()}
          />
        </div>
      )}
      <div className="react-calendar-container">
        {!!fastActions?.length && (
          <div className="calendar-fast-actions">
            {fastActions.map((item, i) => (
              <div
                key={i}
                className={classNames('fast-action', {
                  ['fast-action-active']: isSelectedFastAction(item.value),
                })}
                onClick={() => onFastActionSelect(item.value)}
              >
                <Text className="fast-action__text" type="secondary">
                  {item.label}
                </Text>
              </div>
            ))}
          </div>
        )}
        <div className="flexbox flex-direction--column calendar-wrapper">
          {hasInputs && (
            <div className="date-input-wrapper">
              <div
                className={classNames('date-input-wrapper__left flexbox flex-wrap--nowrap', {
                  ['full-left-section']: !canRangeSelect,
                })}
              >
                <Input
                  className={classNames('date-input', {
                    ['date-input-full']: !withTime,
                  })}
                  placeholder={formatDate || 'DD/MM/YYYY'}
                  value={startDate}
                  handleChange={e => setStartDate(formatDateByPattern(e.target.value, formatDate))}
                  onBlur={onStartDateBlur}
                />
                {withTime && (
                  <Input
                    className="time-input"
                    placeholder="00:00"
                    value={startTime}
                    handleChange={e => setStartTime(formatTime(e.target.value))}
                    onBlur={onStartDateBlur}
                  />
                )}
              </div>
              {canRangeSelect && (
                <>
                  <div className="date-input-middle-arrow">
                    <IconArrowRight type="tertiary" size="small" />
                  </div>
                  <div className="date-input-wrapper__right flexbox flex-wrap--nowrap">
                    <Input
                      className={classNames('date-input', {
                        ['date-input-full']: !withTime,
                      })}
                      placeholder={formatDate || 'DD/MM/YYYY'}
                      value={endDate}
                      handleChange={e => setEndDate(formatDateByPattern(e.target.value, formatDate))}
                      onBlur={onEndDateBlur}
                    />
                    {withTime && (
                      <Input
                        className="time-input"
                        placeholder="00:00"
                        value={endTime}
                        handleChange={e => setEndTime(formatTime(e.target.value))}
                        onBlur={onEndDateBlur}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          )}
          {isMobile ? (
            <MobileView
              {...props}
              locale={locale}
              dataId={dataId}
              maxYear={maxYear}
              draftRange={draftRange}
              draftValue={draftValue}
              handleDayClick={handleChange}
              getTileClassName={getTileClassName}
            />
          ) : (
            <DesktopView
              {...props}
              locale={locale}
              dataId={dataId}
              maxYear={maxYear}
              draftRange={draftRange}
              draftValue={draftValue}
              canRangeSelect={canRangeSelect}
              handleDayClick={handleChange}
              getTileClassName={getTileClassName}
            />
          )}
        </div>
      </div>
      {showApplyButtons && (
        <div className="calendar-actions">
          <Button type="tertiary" disabled={canReset} buttonText={resetButtonText} onClick={handleReset} />
          <Button type="primary" disabled={hasPendingChanges} buttonText={applyButtonText} onClick={handleApply} />
        </div>
      )}
    </div>
  );
};
