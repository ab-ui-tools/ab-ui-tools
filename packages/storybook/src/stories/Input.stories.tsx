import type { StoryFn } from '@storybook/react';
import type { InputPasswordsProps } from '@ab.uitools/ui-library/components/Input/types';
import type { InputCustomProps } from '@ab.uitools/ui-library/components/Input/types';
import type {
  TAmountCurrencyOption,
  TAmountInputProps,
  TAmountValue,
} from '@ab.uitools/ui-library/components/AmountInput';

import { useEffect, useState } from 'react';
import { Positions } from '@ab.uitools/ui-library/components/Tooltip/types';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import IconCalendarRight from '@ab.uitools/ui-library/components/SVGIcons/IconCalendarRight';
import { getCurrencyFlagIcon } from '@ab.uitools/ui-library/components/SVGIcons/Flags';
import { Popover } from '@ab.uitools/ui-library/components/Popover';
import { Input as _Input, InputPassword as _InputPassword } from '@ab.uitools/ui-library/components/Input';
import { AmountInput as _AmountInput } from '@ab.uitools/ui-library/components/AmountInput';

export default {
  title: 'Input',
  component: _Input,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};

const passwordValidations = [
  { label: '8+ characters', test: (pwd: string) => pwd.length >= 8 },
  { label: 'Uppercase', test: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: 'Lowercase', test: (pwd: string) => /[a-z]/.test(pwd) },
  { label: 'Number', test: (pwd: string) => /\d/.test(pwd) },
  { label: 'Symbol', test: (pwd: string) => /[^a-zA-Z0-9]/.test(pwd) },
];

const Template: StoryFn<InputCustomProps> = args => {
  const [value, setValue] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const changeHandler = (e: TChangeEventType, value: string) => {
    setValue(value);
    setIsErrorVisible(true);
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <_Input
        {...args}
        type={'text'}
        error={!value && isErrorVisible ? 'requeired field' : ''}
        currentValue={value}
        handleChange={changeHandler}
      />
    </div>
  );
};

export const Input = Template.bind({});

const InputPasswordTemplate: StoryFn<InputPasswordsProps> = args => {
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const tooltipAddons = !showPassword
    ? {
        id: 'test',
        text: 'Show',
        position: Positions.TOP_CENTER,
        timer: 1000,
      }
    : {
        id: 'test',
        text: 'hide',
        position: Positions.TOP_CENTER,
        timer: 1000,
      };

  const [isCapsLockOn, setCapsLockState] = useState<boolean>(false);
  const [isCapsLockOn1, setCapsLockState1] = useState<boolean>(false);

  return (
    <div style={{ marginLeft: 200, maxWidth: 400 }}>
      <_InputPassword
        {...args}
        className={'mb-24'}
        id="sk,"
        name="pass"
        isCapsLockOn={isCapsLockOn}
        setIsCapsLockOn={setCapsLockState}
        capsLockText={'Caps Lock is On'}
        validations={passwordValidations}
        onValidationChange={setIsPasswordValid}
        label={'Password'}
        placeholder={'Create password'}
        hasError={false}
        tooltipAddons={tooltipAddons}
        onPasswordShow={setShowPassword}
      />
      <_InputPassword
        {...args}
        id="4"
        name="pass-1"
        isCapsLockOn={isCapsLockOn1}
        setIsCapsLockOn={setCapsLockState1}
        capsLockText={'Caps Lock is On'}
        validations={passwordValidations}
        onValidationChange={setIsPasswordValid}
        label={'Password'}
        placeholder={'Create password'}
        hasError={false}
        tooltipAddons={tooltipAddons}
        onPasswordShow={setShowPassword}
      />
    </div>
  );
};
export const InputPassword = InputPasswordTemplate.bind({});

Input.args = {
  type: 'text',
  label: 'Some text',
  size: 'large',
  mask: '',
  maskChar: '',
  leftIconProps: {
    Component: IconInfo,
  },
  rightIconProps: {
    Component: IconCalendarRight,
  },
  disabled: false,
  required: true,
  readonly: true,
  maxCount: 15,
  witUpperCase: false,
  placeholder: 'Some text',
  labelAddons: (
    <Popover
      linkAddons={{ url: 'link', beforeLink: 'text before link' }}
      id="beneficiary-tooltip"
      text={'data'}
      position="top-center"
    >
      <div id="beneficiary-tooltip">
        <IconInfo type="information-light" size="xsmall" className={'ml-4 pointer'} />
      </div>
    </Popover>
  ),
  helperText: 'This is your helper text',
  successMessage: 'Success message',
};

InputPassword.args = {
  size: 'large',
};

const EXCHANGE_RATES = [
  { From: 'AMD', To: 'USD', Buy: 379, Sell: 383.5 },
  { From: 'AMD', To: 'EUR', Buy: 387.5, Sell: 401.5 },
  { From: 'AMD', To: 'GBP', Buy: 462, Sell: 482 },
  { From: 'AMD', To: 'CHF', Buy: 408, Sell: 428 },
  { From: 'AMD', To: 'RUB', Buy: 4.15, Sell: 4.4 },
  { From: 'AMD', To: 'CAD', Buy: 252, Sell: 272 },
  { From: 'AMD', To: 'JPY', Buy: 2.33, Sell: 2.58 },
  { From: 'AMD', To: 'AUD', Buy: 226.5, Sell: 246.5 },
  { From: 'AMD', To: 'AED', Buy: 101.5, Sell: 106.5 },
  { From: 'AMD', To: 'CNY', Buy: 50, Sell: 54 },
  { From: 'AMD', To: 'SEK', Buy: 32.5, Sell: 36.5 },
  { From: 'AMD', To: 'XAU', Buy: 25520, Sell: 28520 },
];

const currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' });

const AMOUNT_CURRENCIES: TAmountCurrencyOption[] = Array.from(
  new Set(EXCHANGE_RATES.flatMap(rate => [rate.From, rate.To]))
).map(code => ({
  value: code,
  label: currencyNames.of(code),
  icon: getCurrencyFlagIcon(code),
  decimalScale: code === 'JPY' ? 0 : undefined,
}));

type TAmountInputStoryArgs = Omit<TAmountInputProps, 'thousandSeparator'> & {
  thousandSeparator: ',' | ' ' | "'" | 'none';
  withCurrencies: boolean;
};

const AmountInputTemplate: StoryFn<TAmountInputStoryArgs> = ({
  thousandSeparator,
  withCurrencies,
  currency,
  ...args
}) => {
  const [value, setValue] = useState<TAmountValue>('');
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  useEffect(() => setSelectedCurrency(currency), [currency]);

  const groupSeparator = thousandSeparator === 'none' ? false : thousandSeparator;
  if (groupSeparator === args.decimalSeparator) {
    return <p>thousandSeparator and decimalSeparator must differ.</p>;
  }

  return (
    <div style={{ maxWidth: 384 }}>
      <_AmountInput
        {...args}
        thousandSeparator={groupSeparator}
        currencies={withCurrencies ? AMOUNT_CURRENCIES : undefined}
        currency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

export const AmountInput = AmountInputTemplate.bind({});

AmountInput.args = {
  label: 'Label',
  helperText: 'This is your helper text',
  error: '',
  placeholder: '',
  disabled: false,
  readonly: false,
  required: false,
  valueType: 'string',
  decimalScale: 2,
  fixedDecimalScale: true,
  thousandSeparator: ',',
  decimalSeparator: '.',
  allowNegative: false,
  prefix: '',
  suffix: '',
  allowClear: true,
  withCurrencies: true,
  currency: 'USD',
  currencyDisabled: false,
  currencyDropdownWidth: 240,
};

AmountInput.parameters = {
  controls: { exclude: ['size'] },
};

AmountInput.argTypes = {
  error: { control: 'text', description: 'Error text; also switches the field to the error state' },
  placeholder: { control: 'text', description: 'Defaults to a zero in the current format, e.g. "0.00"' },
  valueType: { options: ['string', 'number'], control: { type: 'radio' }, description: 'Shape of the emitted value' },
  decimalScale: { control: { type: 'number', min: 0, max: 8 }, description: '0 = whole numbers only' },
  fixedDecimalScale: { control: 'boolean', description: 'Pad the decimals on blur ("600,000" → "600,000.00")' },
  thousandSeparator: { options: [',', ' ', "'", 'none'], control: { type: 'select' } },
  decimalSeparator: { options: ['.', ','], control: { type: 'radio' } },
  allowNegative: { control: 'boolean' },
  min: { control: 'number' },
  max: { control: 'number', description: 'Keystrokes above max are rejected' },
  maxIntegerDigits: { control: 'number' },
  prefix: { control: 'text', description: 'Symbol before the number, e.g. "$ "' },
  suffix: { control: 'text', description: 'Symbol after the number, e.g. " %"' },
  allowClear: { control: 'boolean', description: 'Show the clear (×) button' },
  withCurrencies: { control: 'boolean', description: 'Story only: pass a currencies list with flag icons' },
  currency: { options: AMOUNT_CURRENCIES.map(c => c.value), control: { type: 'select' } },
  currencyDisabled: { control: 'boolean' },
  currencyDropdownWidth: { control: { type: 'number', min: 104 } },
};
