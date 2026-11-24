import type { JSX } from 'react';

import { NumberFormatBase } from 'react-number-format';
import { forwardRef, useId } from 'react';

import type { TInputFieldProps, TPhoneNumberFieldProps } from './types';

import { InputField } from './InputField';
import { usePhoneNumber } from './hooks';
import { getLazyCountryFlag } from '../SVGIcons/Flags/lazyCountryFlags';

export const PhoneNumberField = forwardRef<HTMLInputElement, TPhoneNumberFieldProps>(
  (
    {
      countries,
      country,
      defaultCountry,
      onCountryChange,
      countryAriaLabel = 'Country code',
      value,
      defaultValue,
      onValueChange,
      onChange,
      setFieldValue,
      placeholder,
      disabled = false,
      readOnly = false,
      dataId = '',
      'aria-describedby': ariaDescribedBy,
      ...fieldProps
    },
    ref
  ): JSX.Element => {
    const countryId = `phone-country-${useId()}`;
    const phone = usePhoneNumber({
      countries,
      country,
      defaultCountry,
      onCountryChange,
      value: value === undefined ? undefined : String(value ?? ''),
      defaultValue,
      onValueChange,
      onChange,
      name: fieldProps.name,
      setFieldValue,
      shouldValidate: !disabled && !readOnly && (fieldProps.hasError ?? !!fieldProps.error),
    });
    const { countries: phoneCountries, activeCountry, changeCountry } = phone;
    const isSingleCountry = phoneCountries.length === 1;
    const leftContent = isSingleCountry
      ? undefined
      : {
          type: 'select' as const,
          id: countryId,
          'aria-label': countryAriaLabel,
          options: phoneCountries.map(item => ({
            value: item.value,
            label: item.label,
            meta: `+${item.dialCode}`,
            triggerLabel: `+${item.dialCode}`,
            icon: item.icon ?? getLazyCountryFlag(item.value),
          })),
          value: activeCountry.value,
          onValueChange: changeCountry,
          dataId: dataId ? `${dataId}-country` : '',
        };

    return (
      <NumberFormatBase<TInputFieldProps>
        inputMode="tel"
        autoComplete="tel-national"
        {...fieldProps}
        customInput={InputField}
        getInputRef={ref}
        type="tel"
        valueIsNumericString
        value={phone.digits}
        format={phone.format}
        removeFormatting={phone.removeFormatting}
        onValueChange={phone.handleValueChange}
        placeholder={placeholder ?? phone.placeholder}
        disabled={disabled}
        readOnly={readOnly}
        dataId={dataId}
        aria-describedby={[leftContent && countryId, ariaDescribedBy].filter(Boolean).join(' ')}
        leftContent={leftContent}
        leftDivider
        prefix={isSingleCountry ? `+${activeCountry.dialCode}` : undefined}
      />
    );
  }
);

PhoneNumberField.displayName = 'PhoneNumberField';
