import type { CSSProperties, JSX } from 'react';

import { useMemo } from 'react';

import type { TCurrencySelectProps } from '../types';
import type { TItemValue, TSelectIconProps, TSelectOptions } from '../../../types/globalTypes';

import { IconChevronUp } from '../../SVGIcons/IconChevronUp';
import { IconChevronDown } from '../../SVGIcons/IconChevronDown';
import { Select } from '../../Select';

const CHEVRON_DOWN: TSelectIconProps = { Component: IconChevronDown, size: 'xsmall' };
const CHEVRON_UP: TSelectIconProps = { Component: IconChevronUp, size: 'xsmall' };

export const CurrencySelect = ({
  options,
  value,
  onChange,
  disabled = false,
  dropdownWidth,
  dataId = '',
}: TCurrencySelectProps): JSX.Element => {
  const selectOptions: TSelectOptions = useMemo(
    () =>
      options.map(option => ({
        value: option.value,
        label: option.value,
        meta: option.label,
        disabled: option.disabled,
        optionLeftIcon: option.icon ? { Component: option.icon } : undefined,
      })),
    [options]
  );

  const handleSelect = (next: TItemValue | undefined) => {
    if (next !== null && next !== undefined && String(next) !== value) {
      onChange(String(next));
    }
  };

  const style = dropdownWidth
    ? ({ '--ds-amount-input-currency-dropdown-width': `${dropdownWidth}px` } as CSSProperties)
    : undefined;

  return (
    <div className="amount-input__currency" style={style}>
      <Select
        size="small"
        options={selectOptions}
        selectedItem={value}
        setSelectedItem={handleSelect}
        isRequiredField
        disabled={disabled}
        dataId={dataId ? `${dataId}-currency` : ''}
        selectRightIconProps={CHEVRON_DOWN}
        selectRightIconOpenedProps={CHEVRON_UP}
      />
    </div>
  );
};
