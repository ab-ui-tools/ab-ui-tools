import type { FC } from 'react';

import classNames from 'classnames';

interface RadioOptionsDropdownProps {
  filteredOptions: string[];
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
        key={option}
        className={classNames('multi-textarea-chips__dropdown-item', {
          'multi-textarea-chips__dropdown-item--selected': selectedOption === option,
        })}
        onClick={() => onSelectOption(option)}
        role="option"
        aria-selected={selectedOption === option}
      >
        <div className="multi-textarea-chips__radio">
          <div
            className={classNames('multi-textarea-chips__radio-button', {
              'multi-textarea-chips__radio-button--selected': selectedOption === option,
            })}
          />
        </div>
        <span className="multi-textarea-chips__option-text">{option}</span>
      </div>
    ))}
  </div>
);
