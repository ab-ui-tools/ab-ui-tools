import { useState } from 'react';

import type { TInputFieldNumberFormat, TInputFieldSliderProps } from '../types';

const clamp = (input: number, min: number, max: number) => Math.min(Math.max(input, min), max);
const decimalsOf = (step: number) => (String(step).split('.')[1] ?? '').length;

export const useSlider = (
  slider: TInputFieldSliderProps | undefined,
  value: string | number | undefined,
  defaultValue: string | number | undefined
) => {
  const [innerValue, setInnerValue] = useState(String(defaultValue ?? ''));

  if (!slider) {
    return null;
  }

  const { min, max, step = 1 } = slider;
  const decimals = decimalsOf(step);
  const current = value === undefined ? innerValue : String(value);
  const numeric = Number(current) || 0;
  const rangeValue = clamp(numeric, min, max);
  const snapped = clamp(Number((Math.round((numeric - min) / step) * step + min).toFixed(decimals)), min, max);
  const numberFormat: TInputFieldNumberFormat = {
    thousandSeparator: ',',
    decimalScale: decimals,
    allowNegative: min < 0,
  };

  return {
    min,
    max,
    step,
    numberFormat,
    value: current,
    rangeValue,
    progress: (rangeValue - min) / (max - min) || 0,
    snappedValue: current && snapped !== Number(current) ? String(snapped) : undefined,
    setValue: (next: string) => {
      if (value === undefined) {
        setInnerValue(next);
      }
    },
  };
};
