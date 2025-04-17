import type { JSX } from 'react';

import DatePicker from 'react-datepicker';
import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';

import type { ITimePickerProps } from './types';

import { useImportFilesDynamically } from './hooks';
import IconClock from '../SVGIcons/IconClock';
import { Input } from '../Input';
import { Label } from '../../helperComponents';

export const TimePicker = (props: ITimePickerProps): JSX.Element => {
  const {
    value,
    currentTime,
    name,
    setFieldValue,
    label,
    size,
    dataId,
    changeHandler,
    required,
    format = 'HH:mm',
    locale = 'hy',
    dayjsLocale = 'hy-am',
    placeholderText,
    hasError,
    ...rest
  } = props;
  const dateInitialValue =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]' ? value : currentTime;
  const [selectedTime, setCurrentTime] = useState(dateInitialValue);
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean;
    setOpen: (isOpen: boolean) => void | null;
  }>(null);

  useImportFilesDynamically(dayjsLocale);

  const onChange = (date: Date) => {
    setCurrentTime(date);

    if (changeHandler) {
      changeHandler(date);
    }
    if (setFieldValue && name) {
      setFieldValue(name, date);
    }
  };

  const openDatepicker = () => {
    if (calendarRef.current) {
      const isOpen = calendarRef.current?.isCalendarOpen();
      calendarRef.current?.setOpen(!isOpen);
    }
  };
  console.log(dayjs(selectedTime).isValid() ? selectedTime : null, dayjs(selectedTime).isValid());
  return (
    <div className="picker-container input__inner">
      <Label text={label} required={required} invalid={hasError} />

      <DatePicker
        selected={dayjs(selectedTime).isValid() ? selectedTime : null}
        locale={locale}
        showTimeSelect
        showTimeSelectOnly
        dateFormat={format}
        // @ts-ignore
        ref={calendarRef}
        {...rest}
        onChange={onChange}
        customInput={
          <Input
            disabled={rest.disabled}
            dataId={dataId}
            size={size}
            placeholder={placeholderText}
            rightIconProps={{ Component: IconClock, onClick: openDatepicker }}
          />
        }
      />
    </div>
  );
};
