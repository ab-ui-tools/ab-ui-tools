import type { JSX } from 'react';

import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import type { TCardInputFieldProps } from './types';
import type { TSVGIconComponent } from '../../types/globalTypes';

import { InputField } from './InputField';
import { IconVisa } from '../SVGIcons/IconVisa';
import { IconMastercard } from '../SVGIcons/IconMastercard';
import { IconArca } from '../SVGIcons/IconArca';
import { IconAmex } from '../SVGIcons/IconAmex';

const CARDS: { label: string; Icon: TSVGIconComponent; prefix: RegExp }[] = [
  { label: 'Visa', Icon: IconVisa, prefix: /^4/ },
  { label: 'Mastercard', Icon: IconMastercard, prefix: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/ },
  { label: 'ArCa', Icon: IconArca, prefix: /^9051/ },
  { label: 'American Express', Icon: IconAmex, prefix: /^3[47]/ },
];

export const CardInputField = forwardRef<HTMLInputElement, TCardInputFieldProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      autoComplete = 'cc-number',
      placeholder = '1234 1234 1234 1234',
      ...fieldProps
    },
    ref
  ): JSX.Element => {
    const [typedDigits, setTypedDigits] = useState(String(defaultValue ?? ''));
    const digits = value === undefined ? typedDigits : String(value ?? '');
    const card = CARDS.find(item => item.prefix.test(digits));

    return (
      <InputField
        {...fieldProps}
        autoComplete={autoComplete}
        placeholder={placeholder}
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        format="#### #### #### ####"
        onValueChange={(nextDigits, info) => {
          setTypedDigits(nextDigits);
          onValueChange?.(nextDigits, info);
        }}
        rightContent={
          card ? (
            <span
              role="img"
              aria-label={card.label}
              className={classNames('input-field__card', { 'input-field__card--disabled': disabled })}
            >
              <card.Icon size="xlarge" />
            </span>
          ) : undefined
        }
      />
    );
  }
);

CardInputField.displayName = 'CardInputField';
