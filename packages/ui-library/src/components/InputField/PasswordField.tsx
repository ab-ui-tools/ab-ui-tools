import type { JSX, KeyboardEvent } from 'react';

import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import classNames from 'classnames';

import type { TPasswordFieldProps } from './types';

import { InputField } from './InputField';
import { Tooltip } from '../Tooltip';
import { Text } from '../Text';
import { IconWarningFilled } from '../SVGIcons/IconWarningFilled';
import { IconEyeOn } from '../SVGIcons/IconEyeOn';
import { IconEyeOff } from '../SVGIcons/IconEyeOff';
import { IconDismissCircleFilled } from '../SVGIcons/IconDismissCircleFilled';
import { IconCheckmarkCircleFilled } from '../SVGIcons/IconCheckmarkCircleFilled';
import { IconCheckmarkCircle } from '../SVGIcons/IconCheckmarkCircle';

const RULE_LOOKS = {
  default: { Icon: IconCheckmarkCircle, type: 'tertiary', weight: 'regular' },
  validated: { Icon: IconCheckmarkCircleFilled, type: 'success-light', weight: 'semibold' },
  invalid: { Icon: IconDismissCircleFilled, type: 'danger-light', weight: 'semibold' },
} as const;

export const PasswordField = forwardRef<HTMLInputElement, TPasswordFieldProps>(
  (
    {
      validations = [],
      onValidationChange,
      onPasswordShow,
      capsLockText,
      eyeTooltip,
      eyeAriaLabel = 'Show password',
      id,
      className,
      dataId = '',
      disabled = false,
      readOnly = false,
      isLoading = false,
      value,
      defaultValue,
      'aria-describedby': ariaDescribedBy,
      onValueChange,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      ...fieldProps
    },
    ref
  ): JSX.Element => {
    const generatedId = useId();
    const [typedPassword, setTypedPassword] = useState(String(defaultValue ?? ''));
    const [isShown, setIsShown] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const inputId = id ?? `password-field-${generatedId}`;
    const eyeId = `${inputId}-eye`;
    const capsLockId = `${inputId}-caps-lock`;
    const rulesId = `${inputId}-rules`;

    const password = value === undefined ? typedPassword : String(value ?? '');
    const results = validations.map(rule => rule.test(password));
    const isPasswordValid = results.every(Boolean);
    const showCapsLock = !!capsLockText && isCapsLockOn && !isShown && !isLoading;
    const showRules = validations.length > 0 && !isLoading;
    const describedBy =
      [ariaDescribedBy, showCapsLock && capsLockId, showRules && rulesId].filter(Boolean).join(' ') || undefined;

    const onValidationChangeRef = useRef(onValidationChange);
    useEffect(() => {
      onValidationChangeRef.current = onValidationChange;
    });
    useEffect(() => {
      onValidationChangeRef.current?.(isPasswordValid);
    }, [isPasswordValid]);

    const detectCapsLock = (event: KeyboardEvent<HTMLInputElement>) => {
      setIsCapsLockOn(event.getModifierState('CapsLock'));
    };

    return (
      <div className={classNames('password-field', { 'password-field--large': !!fieldProps.label }, className)}>
        <InputField
          {...fieldProps}
          ref={ref}
          id={inputId}
          type={isShown ? 'text' : 'password'}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          isLoading={isLoading}
          dataId={dataId}
          aria-describedby={describedBy}
          onValueChange={(next, info) => {
            setTypedPassword(next);
            onValueChange?.(next, info);
          }}
          onFocus={event => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={event => {
            setIsFocused(false);
            setIsCapsLockOn(false);
            onBlur?.(event);
          }}
          onKeyDown={event => {
            detectCapsLock(event);
            onKeyDown?.(event);
          }}
          onKeyUp={event => {
            detectCapsLock(event);
            onKeyUp?.(event);
          }}
          rightContent={{
            type: 'iconButton',
            id: eyeId,
            'aria-label': eyeAriaLabel,
            'aria-pressed': isShown,
            iconProps: { Component: isShown ? IconEyeOff : IconEyeOn },
            onMouseDown: event => event.preventDefault(),
            onClick: () => {
              setIsShown(!isShown);
              onPasswordShow?.(!isShown);
            },
          }}
        />
        {eyeTooltip && !isLoading ? <Tooltip {...eyeTooltip} id={eyeId} /> : null}
        {showCapsLock ? (
          <Text
            id={capsLockId}
            size="small"
            type="warning-dark"
            className="password-field__caps-lock"
            dataId={dataId ? `${dataId}-caps-lock` : ''}
          >
            <IconWarningFilled size="xsmall" type="warning-light" />
            <span>{capsLockText}</span>
          </Text>
        ) : null}
        {showRules ? (
          <ul id={rulesId} className="password-field__rules">
            {validations.map((rule, index) => {
              const look = RULE_LOOKS[results[index] ? 'validated' : isFocused || !password ? 'default' : 'invalid'];
              const type = disabled || readOnly ? 'disabled' : look.type;

              return (
                <li key={rule.label} className="password-field__rule">
                  <look.Icon size="xsmall" type={type} />
                  <Text as="span" size="small" type={type} weight={look.weight} dataId={rule.dataId ?? ''}>
                    {rule.label}
                  </Text>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';
