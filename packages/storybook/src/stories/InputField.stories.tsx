import type { StoryFn } from '@storybook/react';
import type {
  TInputFieldProps,
  TInputFieldSelectOption,
  TPasswordRule,
  TPhoneCountryOption,
} from '@ab.uitools/ui-library/components/InputField';

import { useEffect, useMemo, useState } from 'react';
import { Positions } from '@ab.uitools/ui-library/components/Tooltip/types';
import { Tooltip } from '@ab.uitools/ui-library/components/Tooltip';
import { IconSearch } from '@ab.uitools/ui-library/components/SVGIcons/IconSearch';
import { IconInfo } from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import { IconEyeOn } from '@ab.uitools/ui-library/components/SVGIcons/IconEyeOn';
import { IconEyeOff } from '@ab.uitools/ui-library/components/SVGIcons/IconEyeOff';
import { IconDismissCircle } from '@ab.uitools/ui-library/components/SVGIcons/IconDismissCircle';
import { IconCalendarDay } from '@ab.uitools/ui-library/components/SVGIcons/IconCalendarDay';
import {
  CardInputField as _CardInputField,
  InputField as _InputField,
  PasswordField as _PasswordField,
  PhoneNumberField as _PhoneNumberField,
} from '@ab.uitools/ui-library/components/InputField';

export default {
  title: 'InputField',
  component: _InputField,
};

const FIELD_ARG_TYPES = {
  label: { control: 'text', description: 'Set: 58px field with the label inside. Empty: 40px field without a label' },
  showHelperIcon: { control: 'boolean', description: 'Info icon before the helper text (Figma option)' },
  error: { control: 'text', description: 'Error text; also switches the field to the error state' },
  successMessage: {
    control: 'text',
    description:
      'Success text with a check icon (Figma). Works like error: hidden when disabled, read-only or when an error shows; the helper text stays under it only with keepHelperText',
  },
  keepHelperText: {
    control: 'boolean',
    description: 'Keep the helper text under the error or success message instead of replacing it',
  },
  isLoading: { control: 'boolean', description: 'Loading state: shows the Figma skeleton instead of the field' },
};

const LEFT_CONTENT_OPTIONS = ['none', 'icon', 'select'] as const;
const RIGHT_CONTENT_OPTIONS = ['none', 'text', 'icon', 'passwordToggle', 'clearButton', 'button', 'select'] as const;

const CURRENCIES: TInputFieldSelectOption[] = ['AMD', 'USD', 'EUR'].map(code => ({ value: code, label: code }));

type TInputFieldStoryArgs = {
  label: string;
  value: string;
  placeholder: string;
  helperText: string;
  showHelperIcon: boolean;
  error: string;
  successMessage: string;
  keepHelperText: boolean;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  isLoading: boolean;
  labelIcon: boolean;
  leftContent: (typeof LEFT_CONTENT_OPTIONS)[number];
  leftDivider: boolean;
  rightContent: (typeof RIGHT_CONTENT_OPTIONS)[number];
  type: 'text' | 'password' | 'email' | 'number';
  maxCount: number;
  withUpperCase: boolean;
  trimOnBlur: boolean;
  numberFormat: boolean;
  thousandSeparator: string;
  decimalScale: number;
  allowNegative: boolean;
  allowLeadingZeros: boolean;
  format: string;
  mask: string;
  allowEmptyFormatting: boolean;
  slider: boolean;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  showRange: boolean;
  maxAllowed: number;
};

const INPUT_FIELD_ARGS: TInputFieldStoryArgs = {
  label: 'Label',
  value: '',
  placeholder: 'Placeholder',
  helperText: 'This is your helper text',
  showHelperIcon: false,
  error: '',
  successMessage: '',
  keepHelperText: false,
  disabled: false,
  readOnly: false,
  required: false,
  isLoading: false,
  labelIcon: false,
  leftContent: 'none',
  leftDivider: false,
  rightContent: 'none',
  type: 'text',
  maxCount: 0,
  withUpperCase: false,
  trimOnBlur: false,
  numberFormat: false,
  thousandSeparator: ',',
  decimalScale: 2,
  allowNegative: false,
  allowLeadingZeros: false,
  format: '',
  mask: '',
  allowEmptyFormatting: false,
  slider: false,
  sliderMin: 0,
  sliderMax: 12000000,
  sliderStep: 1000,
  showRange: true,
  maxAllowed: 0,
};

const InputFieldTemplate: StoryFn<TInputFieldStoryArgs> = ({
  label,
  value,
  type,
  labelIcon,
  leftContent,
  rightContent,
  maxCount,
  numberFormat,
  thousandSeparator,
  decimalScale,
  allowNegative,
  allowLeadingZeros,
  format,
  mask,
  slider,
  sliderMin,
  sliderMax,
  sliderStep,
  showRange,
  maxAllowed,
  ...args
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currency, setCurrency] = useState('AMD');
  const [leftCurrency, setLeftCurrency] = useState('AMD');

  useEffect(() => setInputValue(value), [value]);
  useEffect(() => setIsPasswordVisible(false), [rightContent]);

  const leftContentProps: Record<TInputFieldStoryArgs['leftContent'], TInputFieldProps['leftContent']> = {
    none: undefined,
    icon: { type: 'icon', iconProps: { Component: IconSearch } },
    select: {
      type: 'select',
      'aria-label': 'Currency',
      options: CURRENCIES,
      value: leftCurrency,
      onValueChange: setLeftCurrency,
    },
  };

  const rightContentProps: Record<TInputFieldStoryArgs['rightContent'], TInputFieldProps['rightContent']> = {
    none: undefined,
    text: 'AMD',
    icon: { type: 'icon', iconProps: { Component: IconCalendarDay } },
    passwordToggle: {
      type: 'iconButton',
      iconProps: { Component: isPasswordVisible ? IconEyeOff : IconEyeOn },
      'aria-label': 'Show password',
      'aria-pressed': isPasswordVisible,
      onClick: () => setIsPasswordVisible(visible => !visible),
    },
    clearButton: {
      type: 'iconButton',
      iconProps: { Component: IconDismissCircle },
      'aria-label': 'Clear',
      onClick: () => setInputValue(''),
    },
    button: { type: 'button', buttonText: 'Copy' },
    select: {
      type: 'select',
      'aria-label': 'Currency',
      options: CURRENCIES,
      value: currency,
      onValueChange: setCurrency,
    },
  };

  const fieldProps = {
    ...args,
    type: rightContent === 'passwordToggle' ? (isPasswordVisible ? 'text' : 'password') : type,
    maxCount: maxCount || undefined,
    labelIcon: labelIcon ? { Component: IconInfo, id: 'input-field-label-info' } : undefined,
    leftContent: leftContentProps[leftContent],
    rightContent: rightContentProps[rightContent],
    numberFormat: numberFormat
      ? {
          thousandSeparator,
          decimalSeparator: thousandSeparator === '.' ? ',' : '.',
          decimalScale,
          allowNegative,
          allowLeadingZeros,
        }
      : undefined,
    format: format || undefined,
    mask: mask || undefined,
    slider: slider ? { min: sliderMin, max: sliderMax, step: sliderStep, showRange } : undefined,
    isAllowed: maxAllowed
      ? ({ floatValue }: { floatValue?: number }) => floatValue === undefined || floatValue <= maxAllowed
      : undefined,
    value: inputValue,
    onValueChange: (next: string) => setInputValue(next),
  };

  return (
    <div style={{ maxWidth: 300, paddingTop: labelIcon && label ? 48 : 0 }}>
      {label ? <_InputField {...fieldProps} label={label} /> : <_InputField {...fieldProps} aria-label="Input field" />}
      {labelIcon && label ? (
        <Tooltip id="input-field-label-info" text="Extra info about this field" position={Positions.TOP_CENTER} />
      ) : null}
    </div>
  );
};

export const InputField = InputFieldTemplate.bind({});

InputField.args = INPUT_FIELD_ARGS;

const FIELD = { table: { category: 'Field' } };
const TEXT = { table: { category: 'Text' } };
const NUMBER = { table: { category: 'Number (numberFormat)' }, if: { arg: 'numberFormat' } };
const PATTERN = { table: { category: 'Pattern (format)' } };
const SLIDER = { table: { category: 'Slider' }, if: { arg: 'slider' } };

InputField.argTypes = {
  label: { ...FIELD_ARG_TYPES.label, ...FIELD },
  value: {
    ...FIELD,
    control: 'text',
    description: 'Start value: text, the digits of a pattern, or a plain number like "1234.5"',
  },
  placeholder: { ...FIELD, control: 'text' },
  helperText: { ...FIELD, control: 'text' },
  showHelperIcon: { ...FIELD_ARG_TYPES.showHelperIcon, ...FIELD },
  error: { ...FIELD_ARG_TYPES.error, ...FIELD },
  successMessage: { ...FIELD_ARG_TYPES.successMessage, ...FIELD },
  keepHelperText: { ...FIELD_ARG_TYPES.keepHelperText, ...FIELD },
  disabled: { ...FIELD, control: 'boolean' },
  readOnly: { ...FIELD, control: 'boolean' },
  required: {
    ...FIELD,
    control: 'boolean',
    description: 'Red asterisk after the label (hidden when disabled or read-only)',
  },
  isLoading: { ...FIELD_ARG_TYPES.isLoading, ...FIELD },
  labelIcon: {
    ...FIELD,
    control: 'boolean',
    description:
      'labelIcon={{ Component: IconInfo, id }}: 16px icon after the label (Figma). Pass an id to point a Tooltip at it',
  },
  leftContent: {
    ...FIELD,
    options: LEFT_CONTENT_OPTIONS,
    control: { type: 'select' },
    description:
      'Same props as rightContent: { type: "icon" | "iconButton" | "button" | "select", ... }, or any React node. The phone country picker is a left select',
  },
  leftDivider: {
    ...FIELD,
    if: { arg: 'leftContent', neq: 'none' },
    control: 'boolean',
    description: 'Divider after the left content. Default false; the phone country picker always has one',
  },
  rightContent: {
    ...FIELD,
    options: RIGHT_CONTENT_OPTIONS,
    control: { type: 'select' },
    description:
      'Text, or props: { type: "icon" | "iconButton" | "button" | "select", ... }. Any React node also works. passwordToggle and clearButton are iconButton examples (passwordToggle makes the field a password); select is the currency dropdown',
  },
  type: { ...TEXT, options: ['text', 'password', 'email', 'number'], control: { type: 'select' } },
  maxCount: { ...TEXT, control: 'number', description: 'Character limit with a counter under the field. 0: off' },
  withUpperCase: { ...TEXT, control: 'boolean', description: 'Turn typed letters into capitals' },
  trimOnBlur: {
    ...TEXT,
    control: 'boolean',
    description: 'Remove spaces at the start and end when the field loses focus',
  },
  numberFormat: {
    table: { category: 'Number (numberFormat)' },
    control: 'boolean',
    description:
      'Number field: numberFormat={{ thousandSeparator, decimalScale, allowNegative, allowLeadingZeros }}. onValueChange gets the clean number',
  },
  thousandSeparator: {
    ...NUMBER,
    control: 'text',
    description: 'The decimal separator becomes "," when this is "."',
  },
  decimalScale: { ...NUMBER, control: 'number', description: 'Digits after the decimal separator. 0: whole numbers' },
  allowNegative: { ...NUMBER, control: 'boolean' },
  allowLeadingZeros: { ...NUMBER, control: 'boolean' },
  format: {
    ...PATTERN,
    control: 'text',
    description: '"#" is a digit, e.g. "##/##/####". Number and slider fields win over a pattern',
  },
  mask: {
    ...PATTERN,
    if: { arg: 'format', truthy: true },
    control: 'text',
    description: 'Character for positions not typed yet, e.g. "_"',
  },
  allowEmptyFormatting: {
    ...PATTERN,
    if: { arg: 'format', truthy: true },
    control: 'boolean',
    description: 'Show the pattern with the mask even when the field is empty',
  },
  slider: {
    table: { category: 'Slider' },
    control: 'boolean',
    description: 'Amount slider on the bottom border: slider={{ min, max, step, showRange }}',
  },
  sliderMin: { ...SLIDER, control: 'number' },
  sliderMax: { ...SLIDER, control: 'number' },
  sliderStep: {
    ...SLIDER,
    control: 'number',
    description: 'Any number can be typed; on blur it snaps to the step and is kept within min and max',
  },
  showRange: { ...SLIDER, control: 'boolean', description: 'Show min, middle and max under the field' },
  maxAllowed: {
    table: { category: 'Number (numberFormat)' },
    control: 'number',
    description: 'isAllowed example for number, slider and pattern fields: blocks values above this. 0: off',
  },
};

InputField.parameters = {
  controls: { include: Object.keys(INPUT_FIELD_ARGS) },
};

type TPhoneNumberStoryArgs = {
  label: string;
  value: string;
  singleCountry: boolean;
  format: string;
  helperText: string;
  showHelperIcon: boolean;
  error: string;
  successMessage: string;
  keepHelperText: boolean;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  isLoading: boolean;
};

const PHONE_NUMBER_ARGS: TPhoneNumberStoryArgs = {
  label: 'Phone number',
  value: '',
  singleCountry: false,
  format: '',
  helperText: 'This is your helper text',
  showHelperIcon: false,
  error: '',
  successMessage: '',
  keepHelperText: false,
  disabled: false,
  readOnly: false,
  required: false,
  isLoading: false,
};

const PhoneNumberTemplate: StoryFn<TPhoneNumberStoryArgs> = ({ label, value, format, singleCountry, ...args }) => {
  const [phone, setPhone] = useState(value);

  useEffect(() => setPhone(value), [value]);

  const countries = useMemo<TPhoneCountryOption[]>(
    () =>
      singleCountry
        ? [{ value: 'AM', format }]
        : [
            { value: 'AM', format },
            { value: 'GE' },
            { value: 'RU' },
            { value: 'FR' },
            { value: 'IT' },
            { value: 'ES' },
          ],
    [format, singleCountry]
  );

  const fieldProps = {
    ...args,
    countries,
    value: phone,
    onValueChange: (digits: string) => setPhone(digits),
  };

  return (
    <div style={{ maxWidth: 300 }}>
      {label ? (
        <_PhoneNumberField {...fieldProps} label={label} />
      ) : (
        <_PhoneNumberField {...fieldProps} aria-label="Phone number" />
      )}
    </div>
  );
};

export const PhoneNumber = PhoneNumberTemplate.bind({});

PhoneNumber.args = PHONE_NUMBER_ARGS;

PhoneNumber.argTypes = {
  ...FIELD_ARG_TYPES,
  value: { control: 'text', description: 'Digits only, e.g. "91123456"' },
  singleCountry: {
    control: 'boolean',
    description:
      'One country: the code shows as text ("+374 |") instead of the picker (Figma). Off: the six countries from Figma',
  },
  format: {
    control: 'text',
    description:
      'Armenia format override via countries={[{ value: "AM", format }, ...]}, "#" = one digit, e.g. "(###) ###-###"',
  },
};

PhoneNumber.parameters = {
  controls: { include: Object.keys(PHONE_NUMBER_ARGS) },
};

type TCardNumberStoryArgs = {
  label: string;
  value: string;
  placeholder: string;
  mask: string;
  allowEmptyFormatting: boolean;
  helperText: string;
  showHelperIcon: boolean;
  error: string;
  successMessage: string;
  keepHelperText: boolean;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  isLoading: boolean;
};

const CARD_NUMBER_ARGS: TCardNumberStoryArgs = {
  label: 'Card number',
  value: '5555555555554444',
  placeholder: '',
  mask: '',
  allowEmptyFormatting: false,
  helperText: 'This is your helper text',
  showHelperIcon: false,
  error: '',
  successMessage: '',
  keepHelperText: false,
  disabled: false,
  readOnly: false,
  required: false,
  isLoading: false,
};

const CardNumberTemplate: StoryFn<TCardNumberStoryArgs> = ({ label, value, mask, placeholder, ...args }) => {
  const [cardNumber, setCardNumber] = useState(value);

  useEffect(() => setCardNumber(value), [value]);

  const fieldProps = {
    ...args,
    mask: mask || undefined,
    placeholder: placeholder || undefined,
    value: cardNumber,
    onValueChange: (digits: string) => setCardNumber(digits),
  };

  return (
    <div style={{ maxWidth: 300 }}>
      {label ? (
        <_CardInputField {...fieldProps} label={label} />
      ) : (
        <_CardInputField {...fieldProps} aria-label="Card number" />
      )}
    </div>
  );
};

export const CardNumber = CardNumberTemplate.bind({});

CardNumber.args = CARD_NUMBER_ARGS;

CardNumber.argTypes = {
  ...FIELD_ARG_TYPES,
  value: {
    control: 'text',
    description:
      'Digits only. The logo follows the first digits. Try 4111111111111111 (Visa), 5555555555554444 (Mastercard), 9051190000000008 (ArCa), 378282246310005 (American Express)',
  },
  placeholder: {
    control: 'text',
    description: 'Empty: the default "1234 1234 1234 1234". Shown while the field is empty, so clear value to see it',
  },
  mask: { control: 'text', description: 'Character for positions not typed yet, e.g. "_" shows "1234 ____ ____ ____"' },
  allowEmptyFormatting: {
    control: 'boolean',
    description: 'Show the format with the mask even when the field is empty',
  },
};

CardNumber.parameters = {
  controls: { include: Object.keys(CARD_NUMBER_ARGS) },
};

const PASSWORD_RULES: TPasswordRule[] = [
  { label: '8+ characters', test: password => password.length >= 8 },
  { label: 'Uppercase', test: password => /[A-Z]/.test(password) },
  { label: 'Lowercase', test: password => /[a-z]/.test(password) },
  { label: 'Number', test: password => /\d/.test(password) },
  { label: 'Symbol', test: password => /[^a-zA-Z0-9]/.test(password) },
];

type TPasswordStoryArgs = {
  label: string;
  helperText: string;
  showHelperIcon: boolean;
  error: string;
  successMessage: string;
  keepHelperText: boolean;
  showRules: boolean;
  capsLockText: string;
  eyeTooltip: boolean;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  isLoading: boolean;
};

const PASSWORD_ARGS: TPasswordStoryArgs = {
  label: 'Password',
  helperText: '',
  showHelperIcon: false,
  error: '',
  successMessage: '',
  keepHelperText: false,
  showRules: true,
  capsLockText: 'Caps Lock is on',
  eyeTooltip: false,
  disabled: false,
  readOnly: false,
  required: false,
  isLoading: false,
};

const PasswordTemplate: StoryFn<TPasswordStoryArgs> = ({ label, showRules, eyeTooltip, ...args }) => {
  const [isShown, setIsShown] = useState(false);

  const fieldProps = {
    ...args,
    autoComplete: 'new-password',
    validations: showRules ? PASSWORD_RULES : undefined,
    onPasswordShow: setIsShown,
    eyeTooltip: eyeTooltip
      ? { text: isShown ? 'Hide password' : 'Show password', position: Positions.TOP_CENTER }
      : undefined,
  };

  return (
    <div style={{ maxWidth: 300, paddingTop: eyeTooltip ? 48 : 0 }}>
      {label ? (
        <_PasswordField {...fieldProps} label={label} />
      ) : (
        <_PasswordField {...fieldProps} aria-label="Password" />
      )}
    </div>
  );
};

export const Password = PasswordTemplate.bind({});

Password.args = PASSWORD_ARGS;

Password.argTypes = {
  ...FIELD_ARG_TYPES,
  showRules: {
    control: 'boolean',
    description:
      'Rules under the field (`validations`): grey while typing, green when met, red ⊗ after leaving the field (Figma). Off: no rules',
  },
  capsLockText: {
    control: 'text',
    description: 'Shown under the field while Caps Lock is on and the password is hidden. Empty: off',
  },
  eyeTooltip: { control: 'boolean', description: 'Tooltip on the eye button (`eyeTooltip`)' },
};

Password.parameters = {
  controls: { include: Object.keys(PASSWORD_ARGS) },
};
