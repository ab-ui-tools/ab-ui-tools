import type { JSX } from 'react';

import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import type { TSingleSelectPropTypes } from '../types';

import { Loading } from '../SharedComponents';
import { Text } from '../../Text';
import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled';
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled';
import { Input } from '../../Input';
import { noop } from '../../../utils/helpers';
import { useChangePositionsOnScroll } from '../../../hooks/useChangePositionsOnScroll';
import {
  useOnOutsideClick,
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace,
} from '../../../hooks';
import { OptionItem } from '../../../helperComponents';
import { DROPDOWN_AND_INPUT_GAP } from '../../../consts';

export const Select = (props: TSingleSelectPropTypes): JSX.Element | null => {
  const {
    className,
    size = 'large',
    name,
    value,
    label,
    avatar,
    options,
    hasError,
    isLoading,
    isValid,
    withSearch,
    disabled,
    dataId = '',
    placeHolder,
    isCreatable,
    selectedItem = null,
    setFieldValue,
    setSelectedItem,
    outerHelperText,
    innerHelperText,
    isRequiredField,
    labelLeftIconProps,
    labelRightIconComponent,
    optionRightIconComponent,
    selectRightIconProps = {
      Component: IconCaretDownFilled,
      size: 'xsmall',
    },
    selectRightIconOpenedProps = {
      Component: IconCaretUpFilled,
      size: 'xsmall',
    },
    labelAddons,
    tooltipAddons,
    renderOptions,
  } = props;

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null);

  const isDynamicSearchEnabled = useMemo(() => {
    if (isOpen) {
      const scrollHeight = scrollRef.current?.scrollHeight || 0;
      const optionsContentHeight = dropdownRef?.offsetHeight || 0;

      return scrollHeight > optionsContentHeight;
    }

    return false;
  }, [isOpen, scrollRef, dropdownRef]);
  const currentSelection = (value as TItemValue) || selectedItem;
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(null);

  const isWithSearch = (withSearch && isDynamicSearchEnabled) || isCreatable;

  const setCurrentSelectedLabel = useCallback(() => {
    const selectedItem = options.find(item => item.value === currentSelection) as TSelectOption;
    setSelectedOption(selectedItem);
  }, [currentSelection, options]);

  const leftIconProps = selectedOption?.optionLeftIcon?.Component
    ? {
        Component: selectedOption?.optionLeftIcon?.Component,
      }
    : null;

  useEffect(() => {
    setCurrentSelectedLabel();
  }, [setCurrentSelectedLabel]);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => {
    setIsOpen(false);
    if (!isCreatable) {
      setSearchValue('');
      setCurrentSelectedLabel();
    }
  };

  const handleOutsideClick = () => {
    if (!searchValue) {
      setCurrentSelectedLabel();
    } else if (isCreatable) {
      setSelectedOption({ label: searchValue, value: searchValue });
      onItemSelect(searchValue);
    }
    closeDropdown();
  };

  useOnOutsideClick([inputRef.current, dropdownRef], handleOutsideClick, isOpen, useId());

  const { bottom, left, top } = useGetElemPositions(inputRef.current);
  const { width } = useGetElemSizes(containerRef.current);

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return options;
    }

    return options.filter(dataItem => {
      return typeof dataItem.label === 'string' && dataItem.label.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, options]);

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value);
    }
    if (name && setFieldValue) {
      setFieldValue(name, value);
    }

    closeDropdown();
  };

  const onItemDeselect = () => onItemSelect(null);

  const onOpenOptions = (e: TClickEventType): void => {
    const result = e?.target as HTMLDivElement;
    const className = result?.getAttribute('class');
    if (e && className && (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)) {
      setIsOpen(!isOpen);
      e.preventDefault();
      return;
    } else if (isOpen && !isWithSearch) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      setSearchValue('');
      if (!isSelected) {
        onItemSelect(value);
        return;
      }
      if (!isRequiredField) {
        onItemDeselect();
      }
    };

  const onSearch = (e: TChangeEventType) => {
    setSelectedOption(null);
    setSearchValue(e.target.value);
  };
  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current,
  });

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current,
  });

  useChangePositionsOnScroll({
    parentElement: inputRef?.current,
    childElement: dropdownRef,
    hasBottomSpace,
  });

  return (
    <div
      data-id={`${dataId}-content`}
      className={classNames(`select select--${size}`, className, {
        'select--opened': isOpen,
      })}
      ref={containerRef}
    >
      <Input
        onClick={disabled ? noop : onOpenOptions}
        size={size === 'large' ? 'large' : 'small'}
        dataId={dataId}
        hasError={hasError}
        className="select__input"
        label={label}
        onChange={onSearch}
        required={isRequiredField}
        leftIconProps={leftIconProps}
        rightIconProps={isOpen ? selectRightIconOpenedProps : selectRightIconProps}
        readonly={!searchValue && !isWithSearch}
        placeholder={placeHolder}
        value={selectedOption?.label || searchValue || ''}
        isValid={isValid}
        disabled={disabled}
        helperText={outerHelperText}
        ref={inputRef}
        labelAddons={labelAddons}
        autoComplete="false"
      />

      {isOpen && (
        <div
          className="select__options"
          style={{
            left,
            width,
            ...(hasBottomSpace || !hasTopSpace
              ? { top: bottom }
              : { bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP }),
          }}
          ref={ref => {
            setDropdownRef(ref);
          }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <div
              data-id={`${dataId}-options-content`}
              ref={scrollRef}
              className={classNames('select__options__scroll', 'scrollbar', 'scrollbar--vertical', {
                'mr-6': (scrollRef.current?.scrollHeight || 0) > 300,
              })}
            >
              {innerHelperText ? (
                <div className="content-top">
                  <Text size="xsmall" type="secondary" className="content-top__label">
                    {innerHelperText}
                  </Text>
                </div>
              ) : null}

              {filteredData.map((item: TSelectOption) => {
                const isSelected = item.value === currentSelection;
                return (
                  <>
                    {renderOptions ? (
                      renderOptions({
                        key: item.value as string,
                        onClick: clickHandler(isSelected),
                        data: item,
                        disabled: item.disabled,
                        isSelected: isSelected,
                      })
                    ) : (
                      <OptionItem
                        tooltipAddons={tooltipAddons}
                        data={item}
                        key={item.value}
                        onClick={clickHandler(isSelected)}
                        optionLeftIcon={item?.optionLeftIcon}
                        labelLeftIconProps={labelLeftIconProps}
                        OptionRightIconComponent={optionRightIconComponent}
                        LabelRightIconComponent={labelRightIconComponent}
                        avatar={avatar}
                        disabled={item.disabled}
                        isSelected={isSelected}
                      />
                    )}
                  </>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
