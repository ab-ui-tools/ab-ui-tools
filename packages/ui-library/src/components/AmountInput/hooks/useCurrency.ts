import { useState } from 'react';

import type { TAmountInputProps } from '../types';

type TUseCurrencyProps = Pick<TAmountInputProps, 'currencies' | 'currency'> & {
  decimalScale: number;
};

export const useCurrency = ({ currencies = [], currency, decimalScale }: TUseCurrencyProps) => {
  const [innerCurrency, setInnerCurrency] = useState(currency);
  const activeCurrency = currency ?? innerCurrency ?? currencies[0]?.value;

  const getScale = (code?: string) => currencies.find(option => option.value === code)?.decimalScale ?? decimalScale;

  return {
    currencies,
    activeCurrency,
    scale: getScale(activeCurrency),
    getScale,
    setCurrency: setInnerCurrency,
  };
};
