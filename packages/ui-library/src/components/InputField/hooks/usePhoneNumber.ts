import type { ChangeMeta, OnValueChange } from 'react-number-format';
import type { ChangeEvent, SyntheticEvent } from 'react';

import { useMemo, useState } from 'react';

import type { TPhoneCountry, TPhoneCountryOption, TPhoneNumberFieldProps } from '../types';

import { formatPhoneNumber, getPhoneDigits, getPhoneLength, getPhonePlaceholder, toPhoneDigits } from '../utils';
import { PHONE_COUNTRIES, PHONE_COUNTRY_DATA } from '../consts';

const resolvePhoneCountries = (options: TPhoneCountryOption[]): TPhoneCountry[] =>
  options
    .filter(option => Object.prototype.hasOwnProperty.call(PHONE_COUNTRY_DATA, option.value))
    .map(({ value, label, dialCode, format, icon }) => {
      const data = PHONE_COUNTRY_DATA[value];

      return {
        value,
        label: label || data.label,
        dialCode: dialCode || data.dialCode,
        format: format || data.format,
        icon,
      };
    });

type TUsePhoneNumberProps = Pick<
  TPhoneNumberFieldProps,
  | 'countries'
  | 'country'
  | 'defaultCountry'
  | 'onCountryChange'
  | 'defaultValue'
  | 'onValueChange'
  | 'onChange'
  | 'name'
  | 'setFieldValue'
> & {
  value?: string;
  shouldValidate: boolean;
};

export const usePhoneNumber = ({
  countries: countryOptions = PHONE_COUNTRIES,
  country,
  defaultCountry,
  onCountryChange,
  value,
  defaultValue = '',
  onValueChange,
  onChange,
  name,
  setFieldValue,
  shouldValidate,
}: TUsePhoneNumberProps) => {
  const [innerCountry, setInnerCountry] = useState(defaultCountry);
  const [innerValue, setInnerValue] = useState(defaultValue);

  const countries = useMemo(() => {
    const resolved = resolvePhoneCountries(countryOptions);
    return resolved.length ? resolved : resolvePhoneCountries(PHONE_COUNTRIES);
  }, [countryOptions]);

  const activeCountry = countries.find(item => item.value === (country ?? innerCountry)) ?? countries[0];
  const digits = toPhoneDigits(value ?? innerValue, activeCountry);

  const commit = (nextDigits: string, nextCountry: TPhoneCountry, event?: SyntheticEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setInnerValue(nextDigits);
    }
    onValueChange?.(nextDigits, {
      formattedValue: formatPhoneNumber(nextDigits, nextCountry.format),
      country: nextCountry.value,
      dialCode: nextCountry.dialCode,
    });
    if (event) {
      onChange?.(event as ChangeEvent<HTMLInputElement>);
    }
    if (name && setFieldValue) {
      setFieldValue(name, nextDigits, shouldValidate ? { shouldValidate: true } : undefined);
    }
  };

  const selectCountry = (code: string) => {
    const nextCountry = countries.find(item => item.value === code);
    if (!nextCountry) return;

    if (country === undefined) {
      setInnerCountry(nextCountry.value);
    }
    onCountryChange?.(nextCountry.value);
    commit(digits.slice(0, getPhoneLength(nextCountry.format)), nextCountry);
  };

  const handleValueChange: OnValueChange = ({ value: nextDigits }, { event, source }) => {
    if (source === 'event') {
      commit(nextDigits, activeCountry, event);
    }
  };

  return {
    countries,
    activeCountry,
    digits,
    placeholder: getPhonePlaceholder(activeCountry.format),
    format: (numbers: string) => formatPhoneNumber(numbers, activeCountry.format),
    removeFormatting: (input: string, changeMeta?: ChangeMeta) => getPhoneDigits(input, changeMeta, activeCountry),
    handleValueChange,
    changeCountry: selectCountry,
  };
};
