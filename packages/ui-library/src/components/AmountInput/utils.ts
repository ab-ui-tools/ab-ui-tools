import type { NumberFormatValues } from 'react-number-format';

import type { TAmountInputProps } from './types';
import type { TFormValue } from '../../types/globalTypes';

export const toNumericString = (value: TFormValue | undefined): string => {
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : '';
  return typeof value === 'string' ? value : '';
};

export const parseNumeric = (value: string): number | null => {
  if (value === '') return null;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? null : parsed;
};

export const splitAmount = (
  formatted: string,
  decimalSeparator: string,
  decimalScale: number
): { integer: string; fraction: string } => {
  const index = decimalScale > 0 ? formatted.lastIndexOf(decimalSeparator) : -1;
  if (index === -1) return { integer: formatted, fraction: '' };
  return { integer: formatted.slice(0, index), fraction: formatted.slice(index) };
};

export const limitScale = (value: string, decimalScale: number): string => {
  const [integer, fraction] = value.split('.');
  if (fraction === undefined || fraction.length <= decimalScale) return value;
  return decimalScale > 0 ? `${integer}.${fraction.slice(0, decimalScale)}` : integer;
};

export const buildPlaceholder = (decimalSeparator: string, decimalScale: number, prefix = '', suffix = ''): string =>
  `${prefix}0${decimalScale > 0 ? decimalSeparator + '0'.repeat(decimalScale) : ''}${suffix}`;

export const getDisplayText = (text: string, placeholder: string, format: (value: string) => string): string => {
  if (text === '') return placeholder;
  if (parseNumeric(text) === null) return text;
  return format(text);
};

type TAmountRules = Pick<TAmountInputProps, 'min' | 'max' | 'maxIntegerDigits' | 'isAllowed'>;

export const isAmountAllowed = (
  { value, floatValue, formattedValue }: NumberFormatValues,
  { min, max, maxIntegerDigits, isAllowed }: TAmountRules
): boolean => {
  if (maxIntegerDigits !== undefined && value.replace('-', '').split('.')[0].length > maxIntegerDigits) {
    return false;
  }
  if (floatValue !== undefined) {
    if (max !== undefined && floatValue > max) return false;
    if (min !== undefined && min <= 0 && floatValue < min) return false;
  }
  return isAllowed ? isAllowed({ value, floatValue, formattedValue }) : true;
};
