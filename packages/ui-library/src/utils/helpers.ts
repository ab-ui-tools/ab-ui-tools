import {
  isSameDay as isSameDayFns,
  format as formatDateFns,
  isEqual,
  addMonths,
  startOfMonth,
  parse,
  isValid,
  isBefore,
  startOfDay,
} from 'date-fns';

import type { TCombineDateProp, TDateFormat, TDateValidationProp, TTimeFormat } from '../components/Calendar/types';

export const noop = (): void => {
  return undefined;
};

export const checkIsAllowedFileSize = (allowedSize: number, fileSize: number): boolean => {
  return fileSize <= allowedSize;
};

export const openFileInNewWindow = ({
  e,
  file,
  handleFileClick,
}: {
  e: TClickEventType;
  file: File;
  handleFileClick?: (file: File) => void;
}): void => {
  e.preventDefault();

  if (handleFileClick) {
    handleFileClick(file);
  }

  if (file) {
    if (file instanceof Blob) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } else {
      console.error('The provided object is not a File or Blob.');
    }
  } else {
    console.error('No file provided.');
  }
};

export const getFormattedValues = (files: File[]): FileReader[] => {
  const readers: FileReader[] = [];

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
    };
    reader.readAsDataURL(files[i]);
    readers.push(reader);
  }

  return readers;
};

export const uniqueFiles = (files: File[]): File[] =>
  files.filter((file, index, self) => {
    return index === self.findIndex(f => f.name === file.name);
  });

export const checkIsAllowedTypes = (allowedTypes: string, mimeType: string): boolean => {
  return allowedTypes.includes(mimeType);
};

export const getStringWidth = (text: string, fontSize: number): number => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    return 0;
  }
  context.font = fontSize + 'px Arial';

  return context.measureText(text).width;
};

export const setTranslationValue = (translation: string, value: string | number): string => {
  return translation.replace('%s', value.toString());
};

export const getYearOptions = (startYear: number, lastYear: number): TSelectOptions => {
  const years = [];

  while (startYear <= lastYear) {
    years.push({ value: lastYear, label: lastYear });
    lastYear--;
  }
  return years;
};

export const isSameDay = (date1?: Date, date2?: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return isSameDayFns(date1, date2);
};

export const isSameRange = (r1: [Date | null, Date | null], r2: [Date | null, Date | null]) => {
  const [start1, end1] = r1;
  const [start2, end2] = r2;

  const startEqual = start1 && start2 ? isEqual(start1, start2) : start1 === start2;
  const endEqual = end1 && end2 ? isEqual(end1, end2) : end1 === end2;

  return startEqual && endEqual;
};

export const getMonthByIndex = (index: number, base: Date = new Date()): Date => {
  return startOfMonth(addMonths(base, index));
};

export const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
    /Tablet/i,
    /Mobile/i,
  ];

  const isMatchedDevice = toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem);
  });

  const isIPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.platform === 'iPad';

  const isTouchMac = /Mac/.test(navigator.userAgent) && 'ontouchend' in document;

  return isMatchedDevice || isIPad || isTouchMac;
};

export const formatDateByPattern = (value: string, format?: TDateFormat) => {
  if (!value) return '';

  const dateFormat = format || 'dd/MM/yyyy';
  const digits = value.replace(/\D/g, ''); // keep only numbers

  const separatorMatch = dateFormat.match(/[^A-Za-z]/);
  const separator = separatorMatch ? separatorMatch[0] : '/';

  const partLengthsMap: Record<TDateFormat, number[]> = {
    'MM/dd/yyyy': [2, 2, 4],
    'dd/MM/yyyy': [2, 2, 4],
    'yyyy-MM-dd': [4, 2, 2],
    'MM.dd.yyyy': [2, 2, 4],
    'dd.MM.yyyy': [2, 2, 4],
  };

  const lengths = partLengthsMap[dateFormat];
  if (!lengths) return value;

  const parts: string[] = [];
  let cursor = 0;

  for (const len of lengths) {
    if (cursor >= digits.length) break;

    const part = digits.slice(cursor, cursor + len);
    parts.push(part);
    cursor += part.length;
  }

  return parts.join(separator);
};

export const normalizeTimeString = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (!digits) return '';

  const hours = digits.slice(0, 2);
  const minutes = digits.slice(2, 4);

  if (digits.length <= 2) {
    return hours;
  }
  return `${hours}:${minutes}`;
};

export const isValidDate = ({ date, format, minDate, maxDate }: TDateValidationProp) => {
  if (!date) return false;
  const dateFormat = format || 'dd/MM/yyyy';
  const parsed = parse(date, dateFormat, new Date());

  if (!isValid(parsed) || formatDateFns(parsed, dateFormat) !== date) {
    return false;
  }
  const dateTimestamp = parsed.getTime();
  const minDateTimestamp = new Date(minDate || '01-01-1971').getTime();
  const maxDateTimestamp = new Date(maxDate || '01-01-2050').getTime();

  return dateTimestamp >= minDateTimestamp && dateTimestamp <= maxDateTimestamp;
};

export const orderRangeDate = (dates: readonly [Date | null, Date | null]): [Date | null, Date | null] => {
  const [start, end] = dates;
  const s: Date | null = start && !isNaN(start.getTime()) ? start : null;
  const e: Date | null = end && !isNaN(end.getTime()) ? end : null;

  if (!s && e) return [e, null];
  if (!e) return [s, null];

  const sDay = startOfDay(s as Date);
  const eDay = startOfDay(e);

  return isBefore(sDay, eDay) || isEqual(sDay, eDay) ? [s, e] : [e, s];
};

export const combineDateTime = ({ date, time, format }: TCombineDateProp) => {
  if (!date) return null;

  const dateFormat = format || 'dd/MM/yyyy';
  const timePart = time?.trim() || '00:00';

  const fullFormat = `${dateFormat} HH:mm`;
  const input = `${date} ${timePart}`;

  const parsed = parse(input, fullFormat, new Date());

  if (!isValid(parsed) || formatDateFns(parsed, fullFormat) !== input) {
    return null;
  }

  return parsed;
};

export const formatDate = (date: Date | string | null, format?: TDateFormat) => {
  if (!date) return '';

  const dateFormat = format || 'dd/MM/yyyy';

  const parsed = date instanceof Date ? date : new Date(date);

  if (!isValid(parsed)) return '';

  return formatDateFns(parsed, dateFormat);
};

export const formatTime = (date: Date | string | null, timeFormat?: TTimeFormat) => {
  if (!date) return '';

  const parsed = date instanceof Date ? date : new Date(date);

  if (!isValid(parsed)) return '';

  const format = timeFormat || 'HH:mm';

  return formatDateFns(parsed, format);
};
