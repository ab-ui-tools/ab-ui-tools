import type { FC } from 'react';

import classNames from 'classnames';

import type { TNormalizedOption } from '../types';

import { OptionLabel } from './OptionLabel';

interface RadioOptionsDropdownProps {
  filteredOptions: TNormalizedOption[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

export const RadioOptionsDropdown: FC<RadioOptionsDropdownProps> = ({
  filteredOptions,
  selectedOption,
  onSelectOption,
}) => (
  <div
    className="multi-textarea-chips__dropdown scrollbar scrollbar--vertical"
    role="listbox"
    aria-label="Available options"
  >
    {filteredOptions.map(option => (
      <div
        key={option.display}
        className={classNames('multi-textarea-chips__dropdown-item', {
          'multi-textarea-chips__dropdown-item--selected': selectedOption === option.display,
        })}
        onClick={() => onSelectOption(option.display)}
        role="option"
        aria-selected={selectedOption === option.display}
      >
        <div className="multi-textarea-chips__radio">
          <div
            className={classNames('multi-textarea-chips__radio-button', {
              'multi-textarea-chips__radio-button--selected': selectedOption === option.display,
            })}
          />
        </div>
        {option.secondaryText || option.labelClassName ? (
          <OptionLabel option={option} />
        ) : (
          <span className="multi-textarea-chips__option-text">{option.label}</span>
        )}
      </div>
    ))}
  </div>
);
