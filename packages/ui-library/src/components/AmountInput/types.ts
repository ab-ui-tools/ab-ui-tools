import type { FocusEvent } from 'react';

import type { IFormCompProps, TFormValue, TSVGIconComponent } from '../../types/globalTypes';

export type TAmountValueType = 'string' | 'number';

export type TAmountValue = string | number | null;

export interface TAmountChangeInfo {
  value: string;
  floatValue?: number;
  formattedValue: string;
}

export interface TAmountCurrencyOption {
  value: string;
  label?: string;
  icon?: TSVGIconComponent;
  disabled?: boolean;
  decimalScale?: number;
}

export interface TAmountInputProps extends Omit<IFormCompProps, 'onChange'> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  autoFocus?: boolean;
  value?: TFormValue;
  valueType?: TAmountValueType;
  onValueChange?: (value: TAmountValue, info: TAmountChangeInfo) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
  thousandSeparator?: string | false;
  decimalSeparator?: string;
  allowNegative?: boolean;
  min?: number;
  max?: number;
  maxIntegerDigits?: number;
  prefix?: string;
  suffix?: string;
  isAllowed?: (info: TAmountChangeInfo) => boolean;
  allowClear?: boolean;
  onClear?: () => void;
  currencies?: TAmountCurrencyOption[];
  currency?: string;
  onCurrencyChange?: (currency: string) => void;
  currencyName?: string;
  currencyDisabled?: boolean;
  currencyDropdownWidth?: number;
}

export interface TCurrencySelectProps {
  options: TAmountCurrencyOption[];
  value?: string;
  onChange: (currency: string) => void;
  disabled?: boolean;
  dropdownWidth?: number;
  dataId?: string;
}
