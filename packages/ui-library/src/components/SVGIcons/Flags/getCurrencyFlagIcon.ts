import type { TSVGIconComponent } from '../../../types/globalTypes';

import { COUNTRY_FLAG_ICONS } from './countryFlagIcons';

const CURRENCY_COUNTRY_EXCEPTIONS: Record<string, string> = {
  EUR: 'EU',
  ANG: 'CW',
};

type TIntlWithCurrencies = { supportedValuesOf?: (key: 'currency') => string[] };

let isoCurrencies: Set<string> | null | undefined;

const getIsoCurrencies = (): Set<string> | null => {
  if (isoCurrencies === undefined) {
    const codes = (Intl as TIntlWithCurrencies).supportedValuesOf?.('currency');
    isoCurrencies = codes ? new Set(codes) : null;
  }
  return isoCurrencies;
};

export const getCurrencyFlagIcon = (currency?: string): TSVGIconComponent | undefined => {
  if (!currency) return undefined;
  const code = currency.trim().toUpperCase();

  const exception = CURRENCY_COUNTRY_EXCEPTIONS[code];
  if (exception) return COUNTRY_FLAG_ICONS[exception];

  if (code.startsWith('X')) return undefined;

  const iso = getIsoCurrencies();
  if (iso && !iso.has(code)) return undefined;

  return COUNTRY_FLAG_ICONS[code.slice(0, 2)];
};
