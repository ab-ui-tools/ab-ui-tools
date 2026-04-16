import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import type { TOption, TReactSelectProps, TSelectValue, SingleValue, TItemValue } from './types';

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
  selectedValue,
  setSelectedValue,
  onChange,
  showCount = 2,
  isClearable = false,
  components: customComponents,
  hideSelectedOptions = false,
  labelAddons,
  isDisabled,
  isCheckbox,
  isSearchable,
  isCreatable = false,
  isCreateOnOutsideClick,
  isRadio,
  isMulti,
  hasError,
  required,
  label,
  size = 'large',
  dataId,
  helperText,
  ...selectProps
}: TReactSelectProps) => {
  const [value, setValue] = useState<TSelectValue>();
  const [isMounted, setIsMounted] = useState(false);

  const handleChange = (selectedOption: TSelectValue) => {
    const val = !Array.isArray(selectedOption)
      ? (selectedOption as SingleValue<TOption>)?.value
      : selectedOption.map(option => option.value);

    setValue(selectedOption);
    setFieldValue?.(val);
    setSelectedValue?.(val);
    onChange?.(selectedOption);
  };

  const getFlatOptions = () => {
    return options.flatMap(opt => ('options' in opt ? opt.options : [opt]));
  };

  const handleCreateOnOutsideClick = (event: React.FocusEvent) => {
    if (!isCreatable || !isCreateOnOutsideClick) return;

    const inputValue = (event?.target as HTMLInputElement)?.value;
    if (!inputValue) return;

    const normalize = (str: string) => str.trim().toLowerCase();

    const flatOptions = getFlatOptions();

    const normalizedInput = normalize(inputValue);

    const existsInOptions = flatOptions.some(opt => normalize(opt.label) === normalizedInput);

    const currentValues = Array.isArray(value) ? value : value ? [value] : [];

    const existsInValue = currentValues.some(opt => normalize(opt.label) === normalizedInput);

    if (existsInOptions || existsInValue) return;

    const newOption = {
      label: inputValue,
      value: inputValue,
    };

    let newValue: TSelectValue;

    if (isMulti) {
      newValue = [...currentValues, newOption];
    } else {
      newValue = newOption;
    }

    handleChange(newValue);
  };

  const getSelectedOptions = (value: TItemValue | TItemValue[]) => {
    const flatOptions = getFlatOptions();
    if (Array.isArray(value)) {
      return flatOptions.filter(opt => value.includes(opt.value));
    } else {
      return flatOptions.filter(opt => value === opt.value);
    }
  };

  useEffect(() => {
    if (options.length && selectedValue && !isMounted) {
      setIsMounted(true);
      const selectedOptions = getSelectedOptions(selectedValue);
      setValue(selectedOptions);
    }
  }, [selectedValue, options]);

  const SelectComponent = isCreatable ? CreatableSelect : Select;

  return (
    <div data-id={dataId} className="react-select-wrapper">
      <Label text={label} required={required} disabled={isDisabled} labelAddons={labelAddons} />
      <SelectComponent
        {...selectProps}
        onChange={handleChange}
        options={options}
        value={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
        showCount={showCount}
        isClearable={isClearable}
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={hideSelectedOptions}
        isCheckbox={isCheckbox}
        isRadio={isRadio}
        isSearchable={isSearchable}
        onBlur={handleCreateOnOutsideClick}
        isValidNewOption={inputValue => {
          if (isCreatable && isCreateOnOutsideClick) return false;
          return inputValue.trim().length > 0;
        }}
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
        className={classNames(className, `react-select__${size}`, {
          'react-select__invalid': hasError,
          'react-select__dropdown': !isSearchable && !isCreatable,
        })}
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
