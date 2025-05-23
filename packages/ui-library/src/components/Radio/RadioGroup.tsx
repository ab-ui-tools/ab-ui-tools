import type { JSX } from 'react';

import React, { forwardRef } from 'react';
import classnames from 'classnames';

import type { TRadioGroupProps, TRadioOptionItem } from './types';

import { Radio } from './Radio';
import { Label } from '../../helperComponents';

export const RadioGroup = forwardRef((props: TRadioGroupProps, ref): JSX.Element => {
  const {
    isHorizontal = false,
    name,
    options,
    setFieldValue,
    value,
    handleChange,
    label,
    required,
    disabled,
    className,
    labelAddons,
    hasError,
    selected,
  } = props;

  const onSelect = (selected: number | string) => {
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true });
    }
    if (handleChange) {
      handleChange(selected);
    }
  };

  return (
    <div
      className={classnames(
        'radio-group',
        {
          'radio-group--horizontal': isHorizontal,
          'radio-group--vertical': !isHorizontal,
        },
        className
      )}
    >
      <Label
        className="radio-group__label"
        text={label}
        invalid={hasError}
        required={required}
        disabled={disabled}
        labelAddons={labelAddons}
      />
      <div className="radio-group__inner">
        {options.map((radioOption: TRadioOptionItem) => {
          return (
            <Radio
              label={radioOption.label}
              helperText={radioOption.helperText}
              key={radioOption.value}
              name={name}
              disabled={disabled}
              className="radio-group__item"
              isSelected={radioOption.value === value || radioOption.value === selected}
              onClick={() => onSelect(radioOption.value)}
              dataId={radioOption.dataId}
            />
          );
        })}
      </div>
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';
