import type { TFormValue } from '../../types/globalTypes';

export const toNumericString = (value: TFormValue | undefined): string => {
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : '';
  return typeof value === 'string' ? value : '';
};

/** Parses a clean numeric string; partial input like "-" or "." counts as empty. */
export const parseNumeric = (value: string): number | null => {
  if (value === '') return null;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? null : parsed;
};

/** Splits a formatted amount so the fraction can be styled separately ("600,000" + ".00"). */
export const splitAmount = (
  formatted: string,
  decimalSeparator: string,
  decimalScale: number
): { integer: string; fraction: string } => {
  const index = decimalScale > 0 ? formatted.lastIndexOf(decimalSeparator) : -1;
  if (index === -1) return { integer: formatted, fraction: '' };
  return { integer: formatted.slice(0, index), fraction: formatted.slice(index) };
};

/** Truncates extra fraction digits, e.g. when switching from USD (2) to JPY (0). */
export const limitScale = (value: string, decimalScale: number): string => {
  const [integer, fraction] = value.split('.');
  if (fraction === undefined || fraction.length <= decimalScale) return value;
  return decimalScale > 0 ? `${integer}.${fraction.slice(0, decimalScale)}` : integer;
};

export const buildPlaceholder = (decimalSeparator: string, decimalScale: number, prefix = '', suffix = ''): string =>
  `${prefix}0${decimalScale > 0 ? decimalSeparator + '0'.repeat(decimalScale) : ''}${suffix}`;
