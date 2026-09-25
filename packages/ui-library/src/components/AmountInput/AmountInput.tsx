import type { FocusEvent, JSX } from 'react';

import { NumericFormat, numericFormatter } from 'react-number-format';
import { forwardRef, useCallback, useId, useRef, useState } from 'react';
import classNames from 'classnames';

import type { TAmountInputProps } from './types';

import { buildPlaceholder, getDisplayText, isAmountAllowed, limitScale } from './utils';
import { useAmountValue, useCurrency } from './hooks';
import { AmountDisplay, CurrencySelect } from './components';
import { Text } from '../Text';
import { IconDismissCircle } from '../SVGIcons/IconDismissCircle';
import { ButtonIcon } from '../ButtonIcon';
import { ErrorMessage } from '../../helperComponents';

const DEFAULT_DECIMAL_SCALE = 2;

export const AmountInput = forwardRef<HTMLInputElement, TAmountInputProps>(
  (
    {
      label,
      placeholder,
      helperText,
      error,
      hasError,
      disabled = false,
      readonly = false,
      required = false,
      className,
      id,
      autoFocus,
      name,
      dataId = '',
      dataAttributes,
      value,
      valueType,
      onValueChange,
      onBlur,
      onFocus,
      setFieldValue,
      decimalScale = DEFAULT_DECIMAL_SCALE,
      fixedDecimalScale = true,
      thousandSeparator,
      decimalSeparator = '.',
      allowNegative = false,
      min,
      max,
      maxIntegerDigits,
      prefix,
      suffix,
      isAllowed,
      allowClear = true,
      onClear,
      currencies,
      currency,
      onCurrencyChange,
      currencyName,
      currencyDisabled = false,
      currencyDropdownWidth,
    },
    ref
  ): JSX.Element => {
    const generatedId = useId();
    const inputId = id ?? `amount-input-${generatedId}`;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const isInvalid = hasError ?? !!error;
    const isInteractive = !disabled && !readonly;

    const amount = useAmountValue({ value, valueType, name, setFieldValue, onValueChange, shouldValidate: isInvalid });
    const currencyState = useCurrency({ currencies, currency, decimalScale });
    const { scale } = currencyState;
    const groupSeparator = (thousandSeparator ?? (decimalSeparator === ',' ? ' ' : ',')) || undefined;

    const formatAmount = (text: string, decimals = scale, padDecimals = fixedDecimalScale) =>
      numericFormatter(text, {
        thousandSeparator: groupSeparator,
        decimalSeparator,
        decimalScale: decimals,
        fixedDecimalScale: padDecimals,
        prefix,
        suffix,
      });

    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    const handleClear = () => {
      amount.commit('', '');
      onClear?.();
      inputRef.current?.focus();
    };

    const handleCurrencyChange = (nextCurrency: string) => {
      currencyState.setCurrency(nextCurrency);
      onCurrencyChange?.(nextCurrency);
      if (currencyName && setFieldValue) {
        setFieldValue(currencyName, nextCurrency);
      }

      const nextScale = currencyState.getScale(nextCurrency);
      const trimmed = limitScale(amount.text, nextScale);
      if (trimmed !== amount.text) {
        amount.commit(trimmed, formatAmount(trimmed, nextScale, false));
      }
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const displayText = getDisplayText(
      amount.text,
      placeholder || buildPlaceholder(decimalSeparator, scale, prefix, suffix),
      formatAmount
    );
    const showDisplay = amount.isEmpty || !isFocused;
    const showClear = allowClear && amount.hasValue && isInteractive;
    const hasCurrencies = currencyState.currencies.length > 0;
    const message = isInvalid && error ? error : undefined;

    return (
      <div
        className={classNames('amount-input', className, {
          'amount-input--focused': isFocused,
          'amount-input--invalid': isInvalid,
          'amount-input--disabled': disabled,
          'amount-input--readonly': readonly,
        })}
      >
        <div className="amount-input__field">
          <div className="amount-input__main" onClick={() => inputRef.current?.focus()}>
            {label ? (
              <label className="amount-input__label" htmlFor={inputId}>
                {label}
                {required ? <span className="amount-input__required">*</span> : null}
              </label>
            ) : null}

            <div className="amount-input__control">
              <NumericFormat
                {...dataAttributes}
                id={inputId}
                name={name}
                getInputRef={setRefs}
                className={classNames('amount-input__input', { 'amount-input__input--masked': showDisplay })}
                value={amount.text}
                valueIsNumericString
                thousandSeparator={groupSeparator}
                decimalSeparator={decimalSeparator}
                decimalScale={scale}
                fixedDecimalScale={fixedDecimalScale && !isFocused}
                prefix={prefix}
                suffix={suffix}
                allowNegative={allowNegative && !(min !== undefined && min >= 0)}
                isAllowed={values => isAmountAllowed(values, { min, max, maxIntegerDigits, isAllowed })}
                onValueChange={amount.handleValueChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readonly}
                autoFocus={autoFocus}
                autoComplete="off"
                inputMode={scale > 0 ? 'decimal' : 'numeric'}
                aria-invalid={isInvalid}
                aria-required={required}
                data-id={dataId || undefined}
              />
              {showDisplay ? (
                <AmountDisplay
                  text={displayText}
                  isPlaceholder={amount.isEmpty}
                  decimalSeparator={decimalSeparator}
                  decimalScale={scale}
                />
              ) : null}
            </div>
          </div>

          {showClear || hasCurrencies ? (
            <div className="amount-input__actions">
              {showClear ? (
                <ButtonIcon
                  size="small"
                  iconProps={{ Component: IconDismissCircle }}
                  aria-label="Clear amount"
                  onMouseDown={event => event.preventDefault()}
                  onClick={handleClear}
                  dataId={dataId ? `${dataId}-clear` : ''}
                />
              ) : null}
              {showClear && hasCurrencies ? <span className="amount-input__divider" /> : null}
              {hasCurrencies ? (
                <CurrencySelect
                  options={currencyState.currencies}
                  value={currencyState.activeCurrency}
                  onChange={handleCurrencyChange}
                  disabled={!isInteractive || currencyDisabled}
                  dropdownWidth={currencyDropdownWidth}
                  dataId={dataId}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        {message || helperText ? (
          <div className="mt-8">
            {message ? (
              <ErrorMessage message={message} icon="infoFilled" dataId={dataId} />
            ) : (
              <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
                {helperText}
              </Text>
            )}
          </div>
        ) : null}
      </div>
    );
  }
);

AmountInput.displayName = 'AmountInput';
