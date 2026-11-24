import type { OnValueChange } from 'react-number-format';
import type { CSSProperties, FocusEvent, JSX, SyntheticEvent } from 'react';

import { NumericFormat, numericFormatter, PatternFormat, removeNumericFormat } from 'react-number-format';
import Skeleton from 'react-loading-skeleton';
import { forwardRef, useId, useState } from 'react';
import classNames from 'classnames';

import type { TInputFieldProps } from './types';

import { toUpperCase, withInputValue } from './utils';
import { useSlider } from './hooks/useSlider';
import { FieldContent } from './FieldContent';
import { Text } from '../Text';
import { IconInfo } from '../SVGIcons/IconInfo';
import { IconCheckmarkCircle } from '../SVGIcons/IconCheckmarkCircle';
import { Divider } from '../Divider';
import { ErrorMessage } from '../../helperComponents';

import 'react-loading-skeleton/dist/skeleton.css';

export const InputField = forwardRef<HTMLInputElement, TInputFieldProps>(
  (
    {
      label,
      helperText,
      showHelperIcon = false,
      error,
      successMessage,
      hasError,
      keepHelperText = false,
      isLoading = false,
      labelIcon,
      prefix,
      leftContent,
      leftDivider = false,
      rightContent,
      disabled = false,
      readOnly = false,
      required = false,
      className,
      id,
      dataId = '',
      dataAttributes,
      'aria-describedby': ariaDescribedBy,
      type,
      name,
      value,
      defaultValue,
      isValid: _isValid,
      setFieldValue,
      format,
      mask,
      allowEmptyFormatting,
      numberFormat,
      isAllowed,
      slider,
      maxCount,
      withUpperCase = false,
      trimOnBlur = false,
      onChange,
      onBlur,
      onValueChange,
      ...inputProps
    },
    ref
  ): JSX.Element => {
    const generatedId = useId();
    const fieldValue = value === undefined || typeof value === 'number' ? value : String(value ?? '');
    const sliderState = useSlider(slider, fieldValue, defaultValue);
    const [typedLength, setTypedLength] = useState(String(defaultValue ?? '').length);

    const inputId = id ?? `input-field-${generatedId}`;
    const labelId = `${inputId}-label`;
    const prefixId = `${inputId}-prefix`;
    const suffixId = `${inputId}-suffix`;
    const errorId = `${inputId}-error`;
    const successId = `${inputId}-success`;
    const helperId = `${inputId}-helper`;
    const countId = `${inputId}-count`;

    const numeric = sliderState ? { ...sliderState.numberFormat, ...numberFormat } : numberFormat;
    const formatNumber = (input: string | number) => numericFormatter(String(input), { ...numeric });
    const cleanNumber = (shown: string) => {
      const wholeText = { from: { start: 0, end: 0 }, to: { start: 0, end: shown.length }, lastValue: '' };
      return numeric ? removeNumericFormat(shown, wholeText, numeric) : shown;
    };

    const isInvalid = !disabled && !readOnly && (hasError ?? !!error);
    const isRequired = required && !disabled && !readOnly;
    const showError = isInvalid && !!error;
    const showSuccess = !disabled && !readOnly && !showError && !!successMessage;
    const showHelper = !!helperText && ((!showError && !showSuccess) || keepHelperText);
    const showCount = maxCount !== undefined && !numeric && !format;
    const count = fieldValue === undefined ? typedLength : String(fieldValue).length;
    const isTextRightContent = typeof rightContent === 'string';
    const footnoteTextType = disabled || readOnly ? 'disabled' : 'tertiary';

    const renderContent = (content: TInputFieldProps['leftContent'], side: 'left' | 'right') => (
      <FieldContent
        content={content}
        side={side}
        isLarge={!!label}
        disabled={disabled}
        readOnly={readOnly}
        dataId={dataId}
      />
    );

    const describedBy =
      [
        prefix && prefixId,
        isTextRightContent && suffixId,
        ariaDescribedBy,
        showError && errorId,
        showSuccess && successId,
        showHelper && helperId,
        showCount && countId,
      ]
        .filter(Boolean)
        .join(' ') || undefined;

    const changeValue = (next: string, formattedValue: string, event?: SyntheticEvent) => {
      sliderState?.setValue(next);
      if (showCount) {
        setTypedLength(formattedValue.length);
      }
      onValueChange?.(next, { formattedValue });

      // Sends the change to onChange (number/pattern typing, slider moves, blur fixes).
      // Finds the text input (getRootNode() also works in a Shadow DOM), shows the new text,
      // and calls onChange with a copy of the event pointing to that input, so forms like
      // react-hook-form `register` see it. Number fields get the clean number while onChange runs.
      if (event) {
        const root = event.currentTarget.getRootNode() as Document | ShadowRoot;
        const input = root.getElementById(inputId) as HTMLInputElement;
        input.value = formattedValue;
        withInputValue(input, cleanNumber(formattedValue), () =>
          onChange?.(
            Object.create(event, {
              type: { value: 'change' },
              target: { value: input },
              currentTarget: { value: input },
            })
          )
        );
      }

      if (name && setFieldValue) {
        setFieldValue(name, next, isInvalid ? { shouldValidate: true } : undefined);
      }
    };

    const handleFormattedChange: OnValueChange = ({ value: next, formattedValue }, { event, source }) => {
      if (source === 'event') {
        changeValue(next, formattedValue, event);
      }
    };

    const inputAttributes = {
      ...dataAttributes,
      ...inputProps,
      ...(sliderState ? { value: sliderState.value } : { value: fieldValue, defaultValue }),
      id: inputId,
      name,
      className: classNames('input-field__input', { 'input-field__input--pattern': format }),
      disabled,
      readOnly,
      required: isRequired,
      'aria-invalid': isInvalid || undefined,
      'aria-describedby': describedBy,
      'data-id': dataId || undefined,
      onBlur: (event: FocusEvent<HTMLInputElement>) => {
        const trimmed = event.target.value.trim();
        if (trimOnBlur && trimmed !== event.target.value) {
          changeValue(trimmed, trimmed, event);
        }
        if (sliderState?.snappedValue) {
          changeValue(sliderState.snappedValue, formatNumber(sliderState.snappedValue), event);
        }
        withInputValue(event.target, cleanNumber(event.target.value), () => onBlur?.(event));
      },
    };

    if (isLoading) {
      const bar = (part: string) => (
        <Skeleton inline containerClassName={`input-field__skeleton input-field__skeleton--${part}`} />
      );

      return (
        <div
          className={classNames('input-field', 'input-field--skeleton', { 'input-field--large': !!label }, className)}
          data-id={dataId ? `${dataId}-skeleton` : undefined}
        >
          <div className="input-field__control">
            <div className="input-field__main">
              {label ? bar('label') : null}
              {bar('value')}
            </div>
          </div>
          {helperText ? <div className="input-field__footnote">{bar('helper')}</div> : null}
        </div>
      );
    }

    return (
      <div
        className={classNames(
          'input-field',
          {
            'input-field--large': !!label,
            'input-field--invalid': isInvalid,
            'input-field--disabled': disabled,
            'input-field--readonly': readOnly,
          },
          className
        )}
      >
        <div className="input-field__control">
          {leftContent ? (
            <div className={classNames('input-field__left', { 'input-field__left--divider': leftDivider })}>
              {renderContent(leftContent, 'left')}
              {leftDivider ? <Divider isHorizontal={false} color="light" /> : null}
            </div>
          ) : null}

          <div className="input-field__main">
            {label ? (
              <div className="input-field__label-row">
                <label id={labelId} className="input-field__label" htmlFor={inputId}>
                  {label}
                  {isRequired ? (
                    <span className="input-field__required" aria-hidden="true">
                      *
                    </span>
                  ) : null}
                </label>
                {labelIcon ? (
                  <labelIcon.Component
                    id={labelIcon.id}
                    size="xsmall"
                    type={disabled ? 'disabled' : labelIcon.type || 'tertiary'}
                    className="input-field__label-icon"
                    dataId={dataId ? `${dataId}-label-icon` : ''}
                  />
                ) : null}
              </div>
            ) : null}

            <div className="input-field__value">
              {prefix ? (
                <>
                  <Text
                    as="span"
                    id={prefixId}
                    size="standard"
                    type={disabled ? 'disabled' : readOnly ? 'quaternary' : 'primary'}
                    className="input-field__prefix"
                  >
                    {prefix}
                  </Text>
                  <Divider isHorizontal={false} color="light" className="input-field__prefix-divider" />
                </>
              ) : null}
              {numeric ? (
                <NumericFormat
                  inputMode={numeric.allowNegative ? 'text' : numeric.decimalScale === 0 ? 'numeric' : 'decimal'}
                  {...inputAttributes}
                  {...numeric}
                  allowNegative={!!numeric.allowNegative}
                  isAllowed={isAllowed}
                  valueIsNumericString
                  getInputRef={ref}
                  onValueChange={handleFormattedChange}
                />
              ) : format ? (
                <PatternFormat
                  {...inputAttributes}
                  format={format}
                  mask={mask}
                  allowEmptyFormatting={allowEmptyFormatting}
                  isAllowed={isAllowed}
                  valueIsNumericString
                  getInputRef={ref}
                  onValueChange={handleFormattedChange}
                />
              ) : (
                <input
                  {...inputAttributes}
                  ref={ref}
                  type={type}
                  maxLength={maxCount ?? inputProps.maxLength}
                  onChange={event => {
                    if (withUpperCase) {
                      toUpperCase(event.target);
                    }
                    onChange?.(event);
                    changeValue(event.target.value, event.target.value);
                  }}
                />
              )}
            </div>
          </div>

          {rightContent ? (
            <div className="input-field__right">
              {isTextRightContent ? (
                <Text
                  as="span"
                  id={suffixId}
                  size="standard"
                  type={disabled || readOnly ? 'disabled' : 'primary'}
                  className="input-field__suffix"
                >
                  {rightContent}
                </Text>
              ) : (
                renderContent(rightContent, 'right')
              )}
            </div>
          ) : null}

          {sliderState ? (
            <input
              type="range"
              className="input-field__slider"
              min={sliderState.min}
              max={sliderState.max}
              step={sliderState.step}
              value={sliderState.rangeValue}
              disabled={disabled || readOnly}
              aria-label={inputProps['aria-label']}
              aria-labelledby={label ? labelId : inputProps['aria-labelledby']}
              aria-valuetext={formatNumber(sliderState.rangeValue)}
              data-id={dataId ? `${dataId}-slider` : undefined}
              style={{ '--ds-input-field-slider-progress': sliderState.progress } as CSSProperties}
              onChange={event => changeValue(event.target.value, formatNumber(event.target.value), event)}
            />
          ) : null}
        </div>

        {showError || showSuccess || showHelper || showCount || slider?.showRange ? (
          <div className={classNames('input-field__footnote', { 'input-field__footnote--count': showCount })}>
            {slider?.showRange ? (
              <div className="input-field__range">
                {[slider.min, (slider.min + slider.max) / 2, slider.max].map((item, index) => (
                  <Text key={index} size="small" type={footnoteTextType}>
                    {formatNumber(item)}
                  </Text>
                ))}
              </div>
            ) : null}
            {showError ? (
              <div id={errorId} className="input-field__error">
                <ErrorMessage message={error} icon="infoFilled" dataId={dataId} />
              </div>
            ) : null}
            {showSuccess ? (
              <Text
                id={successId}
                size="small"
                type="brand-light"
                className="input-field__success"
                dataId={dataId ? `${dataId}-success-message` : ''}
              >
                <IconCheckmarkCircle size="xsmall" type="brand-light" />
                {successMessage}
              </Text>
            ) : null}
            {showHelper ? (
              <Text
                id={helperId}
                size="small"
                type={footnoteTextType}
                className={classNames('input-field__helper', { 'input-field__helper--icon': showHelperIcon })}
                dataId={dataId ? `${dataId}-helper-text` : ''}
              >
                {showHelperIcon ? (
                  <>
                    <IconInfo size="xsmall" type={footnoteTextType} />
                    <span>{helperText}</span>
                  </>
                ) : (
                  helperText
                )}
              </Text>
            ) : null}
            {showCount ? (
              <Text
                id={countId}
                size="small"
                type={footnoteTextType}
                className="input-field__count"
                dataId={dataId ? `${dataId}-count` : ''}
              >
                {`${count}/${maxCount}`}
              </Text>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
