import Select, { type ActionMeta } from 'react-select';
import React, { useEffect, useState } from 'react';

import type { IReactSelectProps, TOption, TSelectValue } from './types';

import { getStyles } from './styles';
import {
  ValueContainer,
  MultiValueRemove,
  MultiValue,
  LoadingIndicator,
  IndicatorSeparator,
  DropdownIndicator,
  ClearIndicator,
  Option,
} from './components';
import { Text } from '../Text';
import { Label } from '../../helperComponents';

export const ReactSelect = ({
  options = [],
  className,
  setFieldValue,
  onChange,
  selectedOption,
  setSelectedOption,
  showCount = 2,
  isClearable = false,
  components: customComponents,
  hideSelectedOptions = false,
  labelAddons,
  isDisabled,
  isCheckbox,
  isRadio,
  isMulti,
  hasError,
  required,
  label,
  size,
  dataId,
  helperText,
  ...selectProps
}: IReactSelectProps) => {
  const [value, setValue] = useState<TSelectValue>();

  const handleChange = (value: TSelectValue, actionMeta: ActionMeta<TOption>) => {
    setValue(value);
    setFieldValue?.(value);
    setSelectedOption?.(value);
    onChange?.(value, actionMeta);
  };

  useEffect(() => {
    setValue(selectedOption);
  }, [selectedOption]);

  const styles = getStyles({ hasError, size });

  return (
    <div data-id={dataId} className="react-select-wrapper">
      <Label text={label} required={required} disabled={isDisabled} labelAddons={labelAddons} />
      <Select
        {...selectProps}
        onChange={handleChange}
        options={options}
        styles={styles}
        value={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
        showCount={showCount}
        isClearable={isClearable}
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={hideSelectedOptions}
        isCheckbox={isCheckbox}
        isRadio={isRadio}
        components={{
          MultiValue,
          ValueContainer,
          DropdownIndicator,
          ClearIndicator,
          IndicatorSeparator,
          LoadingIndicator,
          MultiValueRemove,
          Option,
          ...customComponents,
        }}
        className={className}
        classNamePrefix="react-select"
      />
      {!hasError && helperText && (
        <Text className="mt-8" size="small" type={isDisabled ? 'disabled' : 'secondary'}>
          {helperText}
        </Text>
      )}
    </div>
  );
};
