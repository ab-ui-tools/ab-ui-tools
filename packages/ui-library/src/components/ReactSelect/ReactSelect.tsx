import CreatableSelect from 'react-select/creatable';
import Select, { type ActionMeta } from 'react-select';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import type { TOption, TReactSelectProps, TSelectValue, SingleValue } from './types';
import type { TItemValue } from '../../types/globalTypes';

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
  handleChange,
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
  name,
  value,
  helperText,
  ...selectProps
}: TReactSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<TSelectValue>();
  const [isMounted, setIsMounted] = useState(false);

  const handleChangeOption = (selectedOption: TSelectValue, actionMeta?: ActionMeta<TOption>) => {
    const val = !Array.isArray(selectedOption)
      ? (selectedOption as SingleValue<TOption>)?.value
      : selectedOption.map(option => option.value);

    setSelectedOption(selectedOption);
    if (name && setFieldValue) {
      setFieldValue(name, val as string);
    }
    setSelectedValue?.(val as string);
    handleChange?.(selectedOption, actionMeta);
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

    const existsInOptions = flatOptions.some(opt => normalize(`${opt.label}`) === normalizedInput);

    const currentValues = Array.isArray(selectedOption) ? selectedOption : selectedOption ? [selectedOption] : [];

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

    handleChangeOption(newValue);
  };

  const getSelectedOptions = (value: TItemValue | TItemValue[]) => {
    const flatOptions = getFlatOptions();
    if (Array.isArray(value)) {
      return flatOptions.filter(opt => value.includes(opt.value));
    } else {
      return flatOptions.filter(opt => value === opt.value);
    }
  };

  const generateCreatableSelectedOptions = (value: TItemValue) => {
    const flatOptions = getFlatOptions();
    const selectedOption = flatOptions.find(opt => opt.value === value);
    return selectedOption || { value: value, label: `${value}` };
  };

  const getCreatableSelectedOptions = (value: TItemValue | TItemValue[]) => {
    if (Array.isArray(value)) {
      return value.map(val => {
        return generateCreatableSelectedOptions(val);
      });
    }
    return generateCreatableSelectedOptions(value);
  };

  useEffect(() => {
    const currentValue = selectedValue || value;
    if (options.length && currentValue && !isMounted) {
      setIsMounted(true);
      let selectedOptions;
      if (isCreatable) {
        selectedOptions = getCreatableSelectedOptions(currentValue as TItemValue | TItemValue[]);
      } else {
        selectedOptions = getSelectedOptions(currentValue as TItemValue | TItemValue[]);
      }
      setSelectedOption(selectedOptions);
    }
  }, [selectedValue, options, value]);

  const SelectComponent = isCreatable ? CreatableSelect : Select;

  return (
    <div data-id={dataId} className="react-select-wrapper">
      <Label text={label} required={required} disabled={isDisabled} labelAddons={labelAddons} />
      <SelectComponent
        {...selectProps}
        onChange={handleChangeOption}
        options={options}
        value={selectedOption}
        name={name}
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
