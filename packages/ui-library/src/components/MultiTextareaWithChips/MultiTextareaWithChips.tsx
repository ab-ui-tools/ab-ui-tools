import type { ChangeEvent, FC } from 'react';

import { useState, useRef, useMemo, memo, useCallback } from 'react';
import classNames from 'classnames';

import type { TMultiTextareaWithChipsProps } from './types';

import { useChipManagement, useChipValidation, useDropdownLogic, useKeyboardNavigation, useOnBlurLogic } from './hooks';
import { ChipsList, CheckboxOptionsDropdown, RadioOptionsDropdown } from './components';
import { useFormProps } from '../../hooks';
import { ErrorMessage } from '../../helperComponents';

const MultiTextareaWithChipsComponent: FC<TMultiTextareaWithChipsProps> = ({
  label,
  placeholder,
  helperText,
  chips = [],
  onAddChip,
  onRemoveChip,
  className = '',
  disabled = false,
  availableOptions = [],
  allowCustomValues = true,
  allowDuplicates = false,
  searchPlaceholder,
  chipValidationSchema,
  chipValidationErrorMessage,
  allowInvalidChips = false,
  searchPlaceholderText = 'Search and select...',
  typeAndEnterPlaceholderText = 'Type and press Enter...',
  noOptionsPlaceholderText = 'No more options available',
  multiSelect = false,
  noResultsText = "Sorry, we couldn't find any results",
  fieldName = 'skills',
  formProps,
  minChipLength,
  maxChipLength,
  onBlurConfig,
  transformToUppercase = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [chipError, setChipError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { setValue } = useFormProps();

  const chipManagement = useChipManagement({
    initialChips: chips,
    fieldName,
    formProps,
    setValue,
    onAddChip,
    onRemoveChip,
  });

  const chipValidation = useChipValidation({
    validationSchema: chipValidationSchema,
    errorMessage: chipValidationErrorMessage,
    allowInvalidChips,
    minChipLength,
    maxChipLength,
  });

  const dropdownLogic = useDropdownLogic({
    availableOptions,
    chipTexts: chipManagement.getChipTexts(),
    containerRef,
    multiSelect,
  });

  const addOptionAsChip = useCallback(
    (option: string) => {
      if (!allowDuplicates && chipManagement.getChipTexts().includes(option)) return false;

      try {
        const valueToValidate = transformToUppercase ? option.toUpperCase() : option;
        const validatedChip = chipValidation.createValidatedChip(valueToValidate);
        chipManagement.addChip(validatedChip);
        setChipError('');
        return true;
      } catch (error) {
        if (!allowInvalidChips) {
          setChipError(error instanceof Error ? error.message : 'Invalid value');
        }
        return false;
      }
    },
    [chipManagement, chipValidation, allowInvalidChips, transformToUppercase, allowDuplicates]
  );

  const handleSelectOption = (option: string) => {
    if (addOptionAsChip(option)) {
      setInputValue('');
      dropdownLogic.closeDropdown();
    }
  };

  const handleToggleOption = (option: string) => {
    if (chipManagement.getChipTexts().includes(option)) {
      chipManagement.removeChipByText(option);
      setChipError('');
    } else {
      addOptionAsChip(option);
    }
    setInputValue('');
    inputRef.current?.focus();
  };

  const handleAddCustomValue = useCallback(
    (value: string) => {
      if (!allowDuplicates && chipManagement.getChipTexts().includes(value)) return;

      try {
        const valueToValidate = transformToUppercase ? value.toUpperCase() : value;
        const validatedChip = chipValidation.createValidatedChip(valueToValidate);
        chipManagement.addChip(validatedChip);
        setInputValue('');
        setChipError('');
      } catch (error) {
        if (!allowInvalidChips) {
          setChipError(error instanceof Error ? error.message : 'Invalid value');
        }
      }
    },
    [chipManagement, chipValidation, allowInvalidChips, transformToUppercase, allowDuplicates]
  );

  const onBlurLogic = useOnBlurLogic({
    inputValue,
    disabled,
    allowCustomValues,
    availableOptions,
    minChipLength,
    maxChipLength,
    onBlurConfig,
    onAddCustomValue: handleAddCustomValue,
    chipValidationSchema,
    allowInvalidChips,
  });

  const handleRemoveLastChip = () => {
    const lastChipIndex = chipManagement.chips.length - 1;
    if (lastChipIndex >= 0) {
      chipManagement.removeChip(lastChipIndex);
    }
  };

  const handleRemoveChip = useCallback(
    (index: number) => {
      chipManagement.removeChip(index);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    },
    [chipManagement]
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    let value = e.target.value;

    if (transformToUppercase) {
      value = value.toUpperCase();
    }

    setInputValue(value);
    dropdownLogic.handleInputChange(value);
  };

  const handleInputFocus = () => {
    dropdownLogic.handleInputFocus(inputValue);
  };

  const handleInputBlur = onBlurLogic.handleInputBlur;

  const keyboardNavigation = useKeyboardNavigation({
    disabled,
    inputValue,
    allowCustomValues,
    chips: chipManagement.chips,
    filteredOptions: dropdownLogic.filteredOptions,
    selectedOption: dropdownLogic.selectedOption,
    onAddCustomValue: handleAddCustomValue,
    onNavigateOptions: dropdownLogic.navigateOptions,
    onSelectOption: option => {
      if (multiSelect) {
        const optionToToggle = option || dropdownLogic.selectedOption || dropdownLogic.filteredOptions[0];
        if (optionToToggle) {
          handleToggleOption(optionToToggle);
        }
        return;
      }
      const selected = dropdownLogic.selectOption(option);
      if (selected) {
        handleSelectOption(selected);
      }
    },
    onCloseDropdown: dropdownLogic.closeDropdown,
    onRemoveLastChip: handleRemoveLastChip,
    inputRef,
  });

  const inputPlaceholder = useMemo(() => {
    if (chipManagement.chips.length === 0) return placeholder;
    if (availableOptions.length > 0) return searchPlaceholder || searchPlaceholderText;
    if (allowCustomValues) return typeAndEnterPlaceholderText;
    return noOptionsPlaceholderText;
  }, [
    chipManagement.chips.length,
    placeholder,
    availableOptions.length,
    searchPlaceholder,
    searchPlaceholderText,
    allowCustomValues,
    typeAndEnterPlaceholderText,
    noOptionsPlaceholderText,
  ]);

  const hasError = chipError || chipManagement.hasErrorChips;
  const errorMessage = chipError || chipManagement.getErrorMessage();

  const containerClassName = useMemo(
    () =>
      classNames('multi-textarea-chips', className, {
        'multi-textarea-chips--disabled': disabled,
        'multi-textarea-chips--error': hasError,
      }),
    [className, disabled, hasError]
  );

  const inputWrapperClassName = useMemo(
    () =>
      classNames('multi-textarea-input-wrapper', {
        'with-error-styles': hasError,
      }),
    [hasError]
  );

  return (
    <div className={containerClassName} ref={containerRef}>
      {label && (
        <label className="multi-textarea-chips__label" htmlFor={`${fieldName}-input`}>
          {label}
        </label>
      )}

      <div className={inputWrapperClassName}>
        <div className="multi-textarea-chips__content">
          <ChipsList chips={chipManagement.chips} disabled={disabled} onRemoveChip={handleRemoveChip} />

          <div className="multi-textarea-chips__input-container">
            <input
              id={`${fieldName}-input`}
              {...formProps}
              autoComplete="off"
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={keyboardNavigation.handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder={inputPlaceholder}
              className={'multi-textarea-chips__input'}
              disabled={disabled}
              aria-describedby={hasError ? `${fieldName}-error` : helperText ? `${fieldName}-helper` : undefined}
              aria-invalid={hasError ? 'true' : 'false'}
              aria-expanded={dropdownLogic.showDropdown}
              aria-autocomplete="list"
              role="combobox"
            />

            {multiSelect
              ? dropdownLogic.showDropdown && (
                  <CheckboxOptionsDropdown
                    filteredOptions={dropdownLogic.filteredOptions}
                    chipTexts={chipManagement.getChipTexts()}
                    noResultsText={noResultsText}
                    fieldName={fieldName}
                    onToggleOption={handleToggleOption}
                  />
                )
              : dropdownLogic.showDropdown &&
                dropdownLogic.filteredOptions.length > 0 && (
                  <RadioOptionsDropdown
                    filteredOptions={dropdownLogic.filteredOptions}
                    selectedOption={dropdownLogic.selectedOption}
                    onSelectOption={handleSelectOption}
                  />
                )}
          </div>
        </div>
      </div>

      {hasError && <ErrorMessage message={errorMessage} />}

      {helperText && !hasError && (
        <div id={`${fieldName}-helper`} className="multi-textarea-chips__helper">
          {helperText}
        </div>
      )}
    </div>
  );
};

export const MultiTextareaWithChips = memo(MultiTextareaWithChipsComponent);

MultiTextareaWithChips.displayName = 'MultiTextareaWithChips';
