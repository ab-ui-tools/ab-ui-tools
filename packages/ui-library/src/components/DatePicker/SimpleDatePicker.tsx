import type { ReactElement } from 'react';

import DatePicker from 'react-datepicker';
import { useMemo } from 'react';
import React, { useRef } from 'react';
import dayjs from 'dayjs';
import { format as datefnsFormat } from 'date-fns';

import type { ISimpleDatePickerProps } from './types';

import { convertFormat, dateLanguages } from './utils';
import { useImportFilesDynamically } from './hooks';
import { CustomHeader } from './CustomHeader/CustomHeader';
import IconCalendarRight from '../SVGIcons/IconCalendarRight';
import { Input } from '../Input';
import { getMonthOptions } from '../Calendar/options';
import { Label } from '../../helperComponents';

export const SimpleDatePicker = (props: ISimpleDatePickerProps): ReactElement => {
  const {
    value,
    currentDate,
    setFieldValue,
    name,
    label,
    size,
    locale = 'hy',
    changeHandler,
    format = 'M/D/YYYY',
    required = false,
    dataId,
    hasError,
    placeholderText,
    months,
    minDate,
    maxDate,
    dataIdPrefix,
    helperText,
    ...rest
  } = props;

  const monthOptions = months ?? getMonthOptions(locale as string);
  const convertedFormat = useMemo(() => convertFormat(format), [format]);

  const startYear = minDate ? minDate.getFullYear() : 1900;
  const endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5;
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean;
    setOpen: (isOpen: boolean) => void | null;
  }>(null);

  useImportFilesDynamically(locale as string);

  const selectedDate =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]' ? value : currentDate;

  const openDatepicker = () => {
    if (calendarRef.current) {
      const isOpen = calendarRef.current?.isCalendarOpen();
      calendarRef.current?.setOpen(!isOpen);
    }
  };

  const onChange = (date: Date) => {
    if (setFieldValue && name) {
      setFieldValue(name, date);
    }
    if (changeHandler) {
      changeHandler(date);
    }
  };

  return (
    <div className="picker-container">
      <Label text={label} required={required} invalid={hasError} />

      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        selected={dayjs(selectedDate).isValid() ? selectedDate : null}
        locale={locale}
        // @ts-ignore
        ref={calendarRef}
        customInput={
          <Input
            size={size}
            dataId={dataId}
            helperText={helperText}
            datePlaceHolderText={label ? '' : placeholderText}
            rightIconProps={{ Component: IconCalendarRight, onClick: openDatepicker }}
            currentValue={
              // @ts-ignore
              selectedDate ? datefnsFormat(selectedDate, convertedFormat, { locale: dateLanguages[locale] }) : ''
            }
          />
        }
        {...rest}
        onChange={onChange}
        renderCustomHeader={props => (
          <CustomHeader
            {...props}
            months={monthOptions}
            startYear={startYear}
            endYear={endYear}
            dataPrefix={dataIdPrefix}
          />
        )}
      />
    </div>
  );
};
