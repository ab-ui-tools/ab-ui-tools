import type { FocusEvent } from 'react';

import type { IFormCompProps, TFormValue, TSVGIconComponent } from '../../types/globalTypes';

export type TAmountValueType = 'string' | 'number';

/** Emitted value: a clean numeric string ("1234.5") or a number, depending on `valueType`. */
export type TAmountValue = string | number | null;

export interface TAmountChangeInfo {
  /** Clean numeric string without separators, e.g. "1234.5". Empty string when cleared. */
  value: string;
  /** Parsed number, undefined when empty. */
  floatValue?: number;
  /** Value as displayed in the field, e.g. "1,234.5". */
  formattedValue: string;
}

export interface TAmountCurrencyOption {
  /** Currency code stored in the form, e.g. "USD". Also shown in the trigger. */
  value: string;
  /** Long name shown next to the code in the dropdown, e.g. "US dollar". */
  label?: string;
  /** Flag / icon component, rendered in the trigger and the dropdown (same contract as Select's optionLeftIcon). */
  icon?: TSVGIconComponent;
  disabled?: boolean;
  /** Overrides the input's `decimalScale` while this currency is selected (e.g. 0 for JPY). */
  decimalScale?: number;
}

/**
 * Extends IFormCompProps so `<FormField As={props => <AmountInput {...props} />} />` works.
 * `onChange` is omitted on purpose: the form is written through `setFieldValue` (like Select),
 * and standalone consumers use `onValueChange`, which receives the clean value instead of a DOM event.
 */
export interface TAmountInputProps extends Omit<IFormCompProps, 'onChange'> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  /** Error text shown under the field. When used inside FormField, leave it empty — FormField renders the error. */
  error?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  autoFocus?: boolean;

  /** Numeric string or number. Anything else (e.g. null) renders an empty field. */
  value?: TFormValue;
  /** Shape of the emitted value. `string` (default) avoids float precision issues for money. */
  valueType?: TAmountValueType;
  onValueChange?: (value: TAmountValue, info: TAmountChangeInfo) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;

  /** Digits after the decimal separator. 0 makes it an integer field. Default 2. */
  decimalScale?: number;
  /** Pads the fraction with zeros on blur ("600,000" → "600,000.00"). Default true. */
  fixedDecimalScale?: boolean;
  /** Group separator. `false` disables grouping. Default ",". */
  thousandSeparator?: string | false;
  /** Default ".". */
  decimalSeparator?: string;
  /** Default false. */
  allowNegative?: boolean;
  /** Keystrokes that would push the value outside the range are rejected. */
  min?: number;
  max?: number;
  /** Maximum digits before the decimal separator. */
  maxIntegerDigits?: number;
  /** Symbol rendered before / after the number, e.g. "$" or " %". */
  prefix?: string;
  suffix?: string;
  /** Extra per-keystroke guard; runs after the built-in min / max / digit checks. */
  isAllowed?: (info: TAmountChangeInfo) => boolean;

  /** Shows the clear (×) button when the field has a value. Default true. */
  allowClear?: boolean;
  onClear?: () => void;

  currencies?: TAmountCurrencyOption[];
  currency?: string;
  onCurrencyChange?: (currency: string) => void;
  /** Form field name for the currency. When set, the currency is written with `setFieldValue`. */
  currencyName?: string;
  currencyDisabled?: boolean;
  /** Width of the currency dropdown in px. Default 240. */
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
