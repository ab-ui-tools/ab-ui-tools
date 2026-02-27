import React, { useState, useEffect, useMemo } from 'react';
import { isSameDay, isEqual, isBefore, isAfter } from 'date-fns';
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
  formatDate,
  formatTime,
  formatDateByPattern,
  normalizeTimeString,
  isSameRange,
  isValidDate,
  orderRangeDate,
} from '../../utils/helpers';

export const CalendarPopup = ({
  isRange,
  dataId,
  onChange,
  onReset,
  canControlRange,
  hasInputs,
  withTime,
  fastActions,
  selectedValue,
  showApplyButtons,
  resetButtonText = 'Reset',
  applyButtonText = 'Apply',
  rangeControlText = 'Apply range',
  dateFormat = 'dd/MM/yyyy',
  defaultValue,
  closeCalendarPopup,
  locale = 'en',
  maxYear = 2050,
  maxDate,
  minDate,
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
      const [start, end] = draftRange;
      const draftStart = new Date(start as Date).getTime();
      const defaultStart = new Date((defaultValue as Date[])?.[0]).getTime();
      const draftEnd = new Date(end as Date).getTime();
      const defaultEnd = new Date((defaultValue as Date[])?.[1]).getTime();
      return start && end && (draftStart !== defaultStart || draftEnd !== defaultEnd);
    } else {
      const draftDate = new Date(draftValue as Date).getTime();
      const defaultDate = new Date(defaultValue as Date).getTime();
      return draftValue && draftDate !== defaultDate;
    }
  }, [canRangeSelect, draftRange, draftValue, defaultValue]);

  const handleDateChange = (date: Date) => {
    const selectedDate = formatDate(date, dateFormat);
    const time = formatTime(date);
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
        const start_date = formatDate(orderedDate[0], dateFormat);
        const end_date = formatDate(orderedDate[1], dateFormat);
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
    if (end !== undefined) {
      setStartTime(formatTime(start));
      setEndTime(formatTime(end));
      setStartDate(formatDate(start, dateFormat));
      setEndDate(formatDate(end, dateFormat));
    } else {
      setStartDate(formatDate(start, dateFormat));
      setStartTime(formatTime(start));
    }
  };

  const handleReset = () => {
    setValue(null);
    if (!canRangeSelect && !Array.isArray(defaultValue)) {
      setDraftValue(defaultValue);
    } else if (canRangeSelect && Array.isArray(defaultValue)) {
      setDraftRange(defaultValue);
    } else {
      setDraftValue(null);
      setDraftRange([null, null]);
    }
    onReset?.();
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
    if (!end && isSameDay(date, start)) {
      return 'react-calendar__tile--rangeStart react-calendar__tile--rangeEnd';
    }
    if (end && isSameDay(date, start)) {
      return 'react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart';
    }
    if (end && isSameDay(date, end)) {
      return 'react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeEnd';
    }
    if (end && isAfter(date, start) && isBefore(date, end)) {
      return 'react-calendar__tile--active react-calendar__tile--range';
    }
    return null;
  };

  const onFastActionSelect = (value: Date | [Date, Date]) => {
    if (Array.isArray(value)) {
      setDraftRange(value);
      handleSetStartAndEndDateInputValues(...value);
    } else {
      setDraftValue(value);
      handleSetStartAndEndDateInputValues(value);
    }
  };

  const isSelectedFastAction = (date: Date | [Date, Date]) => {
    if (Array.isArray(date)) {
      return isSameRange(date, draftRange);
    } else {
      if (!draftValue) return false;
      return isEqual(date, draftValue as Date);
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
    const startDateTime = combineDateTime({ date: startDate, time: startTime, format: dateFormat });
    const endDateTime = combineDateTime({ date: endDate, time: endTime, format: dateFormat });
    if (!startDateTime || !isValidDate({ date: startDate, format: dateFormat, minDate, maxDate })) {
      setStartDate('');
      setStartTime('');
      return;
    }
    if (endDateTime && isBefore(endDateTime, startDateTime)) {
      setEndDate('');
      setEndTime('');
    }
    if (canRangeSelect) {
      setDraftRange([startDateTime, combineDateTime({ date: endDate, time: endTime, format: dateFormat })]);
    } else {
      setDraftValue(startDateTime);
    }
  };

  const onEndDateBlur = () => {
    const endDateTime = combineDateTime({ date: endDate, time: endTime, format: dateFormat });
    const startDateTime = combineDateTime({ date: startDate, time: startTime, format: dateFormat });
    if (!endDateTime || !isValidDate({ date: endDate, format: dateFormat, minDate, maxDate })) {
      setEndDate('');
      setEndTime('');
      return;
    }
    if (startDateTime && isAfter(startDateTime, endDateTime)) {
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
    if (selectedValue === undefined) return;
    if (Array.isArray(selectedValue) && canRangeSelect) {
      setDraftRange(selectedValue);
      handleSetStartAndEndDateInputValues(...selectedValue);
    } else if (!Array.isArray(selectedValue) && !canRangeSelect) {
      setDraftValue(selectedValue);
      handleSetStartAndEndDateInputValues(selectedValue);
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
                  placeholder={dateFormat || 'dd/MM/yyyy'}
                  value={startDate}
                  handleChange={e => setStartDate(formatDateByPattern(e.target.value, dateFormat))}
                  onBlur={onStartDateBlur}
                />
                {withTime && (
                  <Input
                    className="time-input"
                    placeholder="00:00"
                    value={startTime}
                    handleChange={e => setStartTime(normalizeTimeString(e.target.value))}
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
                      placeholder={dateFormat || 'dd/MM/yyyy'}
                      value={endDate}
                      handleChange={e => setEndDate(formatDateByPattern(e.target.value, dateFormat))}
                      onBlur={onEndDateBlur}
                    />
                    {withTime && (
                      <Input
                        className="time-input"
                        placeholder="00:00"
                        value={endTime}
                        handleChange={e => setEndTime(normalizeTimeString(e.target.value))}
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
              maxDate={maxDate}
              minDate={minDate}
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
              maxDate={maxDate}
              minDate={minDate}
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
          <Button type="tertiary" disabled={!canReset} buttonText={resetButtonText} onClick={handleReset} />
          <Button type="primary" disabled={hasPendingChanges} buttonText={applyButtonText} onClick={handleApply} />
        </div>
      )}
    </div>
  );
};
