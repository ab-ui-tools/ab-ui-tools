import type { ChangeMeta } from 'react-number-format';

import type { TPhoneCountry } from './types';

const DIGIT_SLOT = '#';
const TRUNK_PREFIX = '0';

const onlyDigits = (value: string): string => value.replace(/\D/g, '');

export const toUpperCase = (input: HTMLInputElement) => {
  const { selectionStart, selectionEnd } = input;
  input.value = input.value.toUpperCase();
  if (selectionStart !== null) {
    input.setSelectionRange(selectionStart, selectionEnd);
  }
};

export const withInputValue = (input: HTMLInputElement, value: string, callback: () => void) => {
  if (value === input.value) {
    callback();
    return;
  }

  const { value: shownValue, selectionStart, selectionEnd } = input;
  input.value = value;
  callback();
  input.value = shownValue;

  if (input === input.ownerDocument.activeElement) {
    input.setSelectionRange(selectionStart, selectionEnd);
  }
};

export const getPhoneLength = (format: string): number => format.split(DIGIT_SLOT).length - 1;

export const getPhonePlaceholder = (format: string): string => format.split(DIGIT_SLOT).join('0');

export const formatPhoneNumber = (digits: string, format: string): string => {
  let result = '';
  let digitIndex = 0;

  for (let index = 0; index < format.length && digitIndex < digits.length; index += 1) {
    if (format[index] === DIGIT_SLOT) {
      result += digits[digitIndex];
      digitIndex += 1;
    } else {
      result += format[index];
    }
  }

  return result;
};

export const toPhoneDigits = (value: string, { dialCode, format }: TPhoneCountry): string => {
  const length = getPhoneLength(format);
  const digits = onlyDigits(value);
  const prefix = digits.length > length ? ([dialCode, TRUNK_PREFIX].find(code => digits.startsWith(code)) ?? '') : '';

  return digits.slice(prefix.length, prefix.length + length);
};

export const getPhoneDigits = (input: string, changeMeta: ChangeMeta | undefined, country: TPhoneCountry): string => {
  const digits = onlyDigits(input);
  const inserted = changeMeta ? input.slice(changeMeta.to.start, changeMeta.to.end) : input;
  const isPasted = onlyDigits(inserted).length > 1;

  return isPasted ? toPhoneDigits(digits, country) : digits.slice(0, getPhoneLength(country.format));
};
