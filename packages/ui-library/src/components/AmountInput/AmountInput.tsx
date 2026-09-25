import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import type { FocusEvent, JSX } from 'react';

import { NumericFormat, numericFormatter } from 'react-number-format';
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import classNames from 'classnames';

import type { TAmountChangeInfo, TAmountInputProps, TAmountValue } from './types';

import { buildPlaceholder, limitScale, parseNumeric, splitAmount, toNumericString } from './utils';
import { CurrencySelect } from './CurrencySelect';
import { Text } from '../Text';
import { IconDismissCircle } from '../SVGIcons/IconDismissCircle';
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
      valueType = 'string',
      onValueChange,
      onBlur,
      onFocus,
      setFieldValue,
      decimalScale = DEFAULT_DECIMAL_SCALE,
      fixedDecimalScale = true,
      thousandSeparator = ',',
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
    // Clean numeric string ("1234.5") is the source of truth while typing, so partial input
    // like "12." or "-" survives a controlled parent that only stores numbers.
    const [text, setText] = useState(() => toNumericString(value));

    useEffect(() => {
      if (value === undefined) return;
      const incoming = toNumericString(value);
      setText(current => (parseNumeric(current) === parseNumeric(incoming) ? current : incoming));
    }, [value]);

    const [innerCurrency, setInnerCurrency] = useState(currency);
    const activeCurrency = currency ?? innerCurrency ?? currencies?.[0]?.value;
    const selectedCurrency = currencies?.find(option => option.value === activeCurrency);
    const scale = selectedCurrency?.decimalScale ?? decimalScale;

    const isInvalid = hasError ?? !!error;
    const isInteractive = !disabled && !readonly;
    const hasValue = parseNumeric(text) !== null;
    const canNegate = allowNegative && !(min !== undefined && min >= 0);
    const groupSeparator = thousandSeparator === false ? undefined : thousandSeparator;

    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    const emit = (info: TAmountChangeInfo) => {
      const output: TAmountValue = valueType === 'number' ? (info.floatValue ?? null) : info.value;
      if (name && setFieldValue) {
        // While the field shows an error, re-validate on every change so the message clears
        // (or updates) as the user fixes it — otherwise it would stay stale until the next submit.
        setFieldValue(name, output, isInvalid ? { shouldValidate: true } : undefined);
      }
      onValueChange?.(output, info);
    };

    const handleValueChange = (values: NumberFormatValues, { source }: SourceInfo) => {
      // Re-formatting caused by prop changes (e.g. padding ".00" on blur) is not a user change.
      if (source !== 'event') return;
      setText(values.value);
      emit({
        value: values.floatValue === undefined ? '' : values.value.replace(/\.$/, ''),
        floatValue: values.floatValue,
        formattedValue: values.formattedValue,
      });
    };

    const checkAllowed = (values: NumberFormatValues) => {
      const { floatValue, formattedValue } = values;
      if (maxIntegerDigits !== undefined) {
        const integerDigits = values.value.replace('-', '').split('.')[0];
        if (integerDigits.length > maxIntegerDigits) return false;
      }
      if (floatValue !== undefined) {
        if (max !== undefined && floatValue > max) return false;
        // A positive minimum can't be enforced per keystroke (typing "1" on the way to "10"),
        // so only lower bounds at or below zero are blocked here; validate the rest in the form schema.
        if (min !== undefined && min <= 0 && floatValue < min) return false;
      }
      return isAllowed ? isAllowed({ value: values.value, floatValue, formattedValue }) : true;
    };

    const handleClear = () => {
      setText('');
      emit({ value: '', floatValue: undefined, formattedValue: '' });
      onClear?.();
      inputRef.current?.focus();
    };

    const handleCurrencyChange = (nextCurrency: string) => {
      setInnerCurrency(nextCurrency);
      onCurrencyChange?.(nextCurrency);
      if (currencyName && setFieldValue) {
        setFieldValue(currencyName, nextCurrency);
      }

      const nextScale = currencies?.find(option => option.value === nextCurrency)?.decimalScale ?? decimalScale;
      const trimmed = limitScale(text, nextScale);
      if (trimmed !== text) {
        setText(trimmed);
        emit({
          value: trimmed,
          floatValue: parseNumeric(trimmed) ?? undefined,
          formattedValue: numericFormatter(trimmed, { thousandSeparator: groupSeparator, decimalSeparator }),
        });
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

    const formatOptions = {
      thousandSeparator: groupSeparator,
      decimalSeparator,
      decimalScale: scale,
      // Pad the fraction only after editing, so typing "600000" doesn't jump to "600,000.00".
      fixedDecimalScale: fixedDecimalScale && !isFocused,
      prefix,
      suffix,
    };

    // The fraction is styled lighter than the integer part, which a native input can't do,
    // so an aria-hidden layer mirrors the value whenever the user isn't actively editing it.
    const isEmpty = text === '';
    let displayText = text; // partial input such as "-" is shown as typed
    if (isEmpty) displayText = placeholder ?? buildPlaceholder(decimalSeparator, scale, prefix, suffix);
    else if (hasValue) displayText = numericFormatter(text, { ...formatOptions, fixedDecimalScale });
    const display = splitAmount(displayText, decimalSeparator, scale);

    const showDisplay = isEmpty || !isFocused;
    const showClear = allowClear && hasValue && isInteractive;
    const currencyOptions = currencies ?? [];
    const hasCurrency = currencyOptions.length > 0;

    return (
      <div
        className={classNames('amount-input', className, {
          'amount-input--focused': isFocused,
          'amount-input--invalid': isInvalid,
          'amount-input--disabled': disabled,
          'amount-input--readonly': readonly,
          'amount-input--filled': hasValue,
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
                {...formatOptions}
                {...dataAttributes}
                id={inputId}
                name={name}
                getInputRef={setRefs}
                className={classNames('amount-input__input', { 'amount-input__input--masked': showDisplay })}
                value={text}
                valueIsNumericString
                allowNegative={canNegate}
                isAllowed={checkAllowed}
                onValueChange={handleValueChange}
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
                <span
                  aria-hidden="true"
                  className={classNames('amount-input__display', {
                    'amount-input__display--placeholder': isEmpty,
                  })}
                >
                  <span className="amount-input__integer">{display.integer}</span>
                  {display.fraction ? <span className="amount-input__fraction">{display.fraction}</span> : null}
                </span>
              ) : null}
            </div>
          </div>

          {showClear || hasCurrency ? (
            <div className="amount-input__actions">
              {showClear ? (
                <button
                  type="button"
                  className="amount-input__clear"
                  aria-label="Clear amount"
                  onMouseDown={event => event.preventDefault()}
                  onClick={handleClear}
                  data-id={dataId ? `${dataId}-clear` : undefined}
                >
                  <IconDismissCircle size="small" type="tertiary" />
                </button>
              ) : null}
              {showClear && hasCurrency ? <span className="amount-input__divider" /> : null}
              {hasCurrency ? (
                <CurrencySelect
                  options={currencyOptions}
                  value={activeCurrency}
                  onChange={handleCurrencyChange}
                  disabled={!isInteractive || currencyDisabled}
                  dropdownWidth={currencyDropdownWidth}
                  dataId={dataId}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        {(isInvalid && error) || helperText ? (
          <div className="amount-input__message mt-8">
            {isInvalid && error ? (
              <ErrorMessage message={error} icon="infoFilled" dataId={dataId} />
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
