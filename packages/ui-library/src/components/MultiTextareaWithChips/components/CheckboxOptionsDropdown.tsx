import type { FC } from 'react';

import classNames from 'classnames';

import type { TNormalizedOption } from '../types';

import { OptionLabel } from './OptionLabel';
import { IconSearch } from '../../SVGIcons';
import { Checkbox } from '../../Checkbox';

interface CheckboxOptionsDropdownProps {
  filteredOptions: TNormalizedOption[];
  chipTexts: string[];
  noResultsText: string;
  fieldName: string;
  onToggleOption: (option: string) => void;
}

export const CheckboxOptionsDropdown: FC<CheckboxOptionsDropdownProps> = ({
  filteredOptions,
  chipTexts,
  noResultsText,
  fieldName,
  onToggleOption,
}) => (
  <div
    className="multi-textarea-chips__dropdown scrollbar scrollbar--vertical"
    role="listbox"
    aria-label="Available options"
    aria-multiselectable="true"
  >
    {filteredOptions.length === 0 ? (
      <div className="multi-textarea-chips__dropdown-empty">
        <IconSearch size="large" className="multi-textarea-chips__dropdown-empty-icon" />
        <span className="multi-textarea-chips__dropdown-empty-text">{noResultsText}</span>
      </div>
    ) : (
      filteredOptions.map(option => {
        const isChecked = chipTexts.includes(option.display);

        return (
          <div
            key={option.display}
            className={classNames(
              'multi-textarea-chips__dropdown-item',
              'multi-textarea-chips__dropdown-item--checkbox'
            )}
            role="option"
            aria-selected={isChecked}
          >
            <Checkbox
              value={isChecked}
              label={option.secondaryText || option.labelClassName ? <OptionLabel option={option} /> : option.label}
              onClick={() => onToggleOption(option.display)}
              dataId={`${fieldName}-option-${option.display}`}
            />
          </div>
        );
      })
    )}
  </div>
);
