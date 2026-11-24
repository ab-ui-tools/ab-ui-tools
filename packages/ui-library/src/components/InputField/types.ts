import type { NumberFormatValues } from 'react-number-format';
import type { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

import type { PHONE_COUNTRY_DATA } from './consts';
import type { TTooltipProps } from '../Tooltip/types';
import type { TButtonIconPropTypes } from '../ButtonIcon/types';
import type { TButtonPropTypes } from '../Button/types';
import type { IFormCompProps, TSVGIconComponent } from '../../types/globalTypes';

type TNativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'prefix'
  | 'size'
  | 'children'
  | 'dangerouslySetInnerHTML'
  | 'aria-label'
  | 'aria-labelledby'
  | 'value'
  | 'defaultValue'
>;

type TInputFieldNameProps =
  | { label: string | ReactElement; 'aria-label'?: string; 'aria-labelledby'?: string }
  | { label?: never; 'aria-label': string; 'aria-labelledby'?: string }
  | { label?: never; 'aria-label'?: string; 'aria-labelledby': string };

export interface TInputFieldSelectOption {
  value: string;
  label: string;
  triggerLabel?: string;
  meta?: string;
  icon?: TSVGIconComponent;
  disabled?: boolean;
}

export type TInputFieldContentProps =
  | { type: 'icon'; iconProps: TButtonIconPropTypes['iconProps'] }
  | ({ type: 'iconButton'; 'aria-label': string } & Omit<TButtonIconPropTypes, 'size' | 'aria-label'>)
  | ({ type: 'button'; buttonText: NonNullable<TButtonPropTypes['buttonText']> } & Omit<
      TButtonPropTypes,
      'type' | 'size' | 'buttonText'
    >)
  | {
      type: 'select';
      'aria-label': string;
      id?: string;
      options: TInputFieldSelectOption[];
      value?: string;
      onValueChange: (value: string) => void;
      disabled?: boolean;
      dataId?: string;
    };

type TInputFieldOwnProps = Pick<IFormCompProps, 'hasError' | 'dataId' | 'dataAttributes'> & {
  helperText?: string | ReactElement;
  showHelperIcon?: boolean;
  error?: string | ReactElement;
  successMessage?: string | ReactElement;
  keepHelperText?: boolean;
  isLoading?: boolean;
  labelIcon?: TButtonIconPropTypes['iconProps'] & { id?: string };
  prefix?: ReactNode;
  leftContent?: ReactNode | TInputFieldContentProps;
  leftDivider?: boolean;
  rightContent?: ReactNode | TInputFieldContentProps;
};

export interface TInputFieldChangeInfo {
  formattedValue: string;
}

export interface TInputFieldNumberFormat {
  thousandSeparator?: string;
  decimalSeparator?: string;
  decimalScale?: number;
  allowNegative?: boolean;
  allowLeadingZeros?: boolean;
}

export interface TInputFieldSliderProps {
  min: number;
  max: number;
  step?: number;
  showRange?: boolean;
}

type TInputFieldValueProps = Pick<IFormCompProps, 'value' | 'isValid' | 'setFieldValue'> & {
  defaultValue?: string | number;
  format?: string;
  mask?: string;
  allowEmptyFormatting?: boolean;
  numberFormat?: TInputFieldNumberFormat;
  isAllowed?: (values: NumberFormatValues) => boolean;
  slider?: TInputFieldSliderProps;
  maxCount?: number;
  withUpperCase?: boolean;
  trimOnBlur?: boolean;
  onValueChange?: (value: string, info: TInputFieldChangeInfo) => void;
};

export type TInputFieldProps = TNativeInputProps & TInputFieldNameProps & TInputFieldOwnProps & TInputFieldValueProps;

export interface TPhoneCountryData {
  label: string;
  dialCode: string;
  format: string;
}

export type TPhoneCountryCode = keyof typeof PHONE_COUNTRY_DATA;

export interface TPhoneCountryOption extends Partial<TPhoneCountryData> {
  value: TPhoneCountryCode;
  icon?: TSVGIconComponent;
}

export type TPhoneCountry = TPhoneCountryOption & TPhoneCountryData;

export interface TPhoneNumberChangeInfo {
  formattedValue: string;
  country: TPhoneCountryCode;
  dialCode: string;
}

export type TPhoneNumberFieldProps = Omit<TNativeInputProps, 'value' | 'defaultValue' | 'type'> &
  TInputFieldNameProps &
  Omit<TInputFieldOwnProps, 'leftContent' | 'leftDivider'> &
  Pick<IFormCompProps, 'value' | 'isValid' | 'setFieldValue'> & {
    defaultValue?: string;
    onValueChange?: (value: string, info: TPhoneNumberChangeInfo) => void;
    countries?: TPhoneCountryOption[];
    country?: TPhoneCountryCode;
    defaultCountry?: TPhoneCountryCode;
    onCountryChange?: (country: TPhoneCountryCode) => void;
    countryAriaLabel?: string;
  };

export type TCardInputFieldProps = Omit<TNativeInputProps, 'type'> &
  TInputFieldNameProps &
  Omit<TInputFieldOwnProps, 'rightContent'> &
  Pick<
    TInputFieldValueProps,
    | 'value'
    | 'defaultValue'
    | 'isValid'
    | 'setFieldValue'
    | 'mask'
    | 'allowEmptyFormatting'
    | 'isAllowed'
    | 'onValueChange'
  >;

export interface TPasswordRule {
  label: string;
  test: (password: string) => boolean;
  dataId?: string;
}

export type TPasswordFieldProps = Omit<TNativeInputProps, 'type'> &
  TInputFieldNameProps &
  Omit<TInputFieldOwnProps, 'rightContent'> &
  Pick<TInputFieldValueProps, 'value' | 'defaultValue' | 'isValid' | 'setFieldValue' | 'maxCount' | 'onValueChange'> & {
    validations?: TPasswordRule[];
    onValidationChange?: (isValid: boolean) => void;
    onPasswordShow?: (isShown: boolean) => void;
    capsLockText?: string;
    eyeTooltip?: Omit<TTooltipProps, 'id'>;
    eyeAriaLabel?: string;
  };
