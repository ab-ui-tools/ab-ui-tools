import type { CSSProperties, JSX } from 'react';

import { useMemo } from 'react';

import type { TCurrencySelectProps } from './types';
import type { TItemValue, TSelectIconProps, TSelectOptions } from '../../types/globalTypes';

import { IconChevronUp } from '../SVGIcons/IconChevronUp';
import { IconChevronDown } from '../SVGIcons/IconChevronDown';
import { Select } from '../Select';

// Module-level so Select's memoized icon props stay stable between renders.
const CHEVRON_DOWN: TSelectIconProps = { Component: IconChevronDown, size: 'xsmall' };
const CHEVRON_UP: TSelectIconProps = { Component: IconChevronUp, size: 'xsmall' };

const DEFAULT_DROPDOWN_WIDTH = 240;

/**
 * The library Select, restyled as the compact currency trigger inside AmountInput.
 * The selected code is the Select label; the long name (option.label) is shown as option meta.
 */
export const CurrencySelect = ({
  options,
  value,
  onChange,
  disabled = false,
  dropdownWidth = DEFAULT_DROPDOWN_WIDTH,
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
    if (next !== null && next !== undefined && `${next}` !== value) {
      onChange(`${next}`);
    }
  };

  return (
    <div
      className="amount-input__currency"
      // Consumed by CSS to widen the dropdown and keep it right-aligned with the trigger.
      style={{ '--amount-input-currency-dropdown-width': `${dropdownWidth}px` } as CSSProperties}
    >
      <Select
        size="small"
        className="amount-input__currency-select"
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
