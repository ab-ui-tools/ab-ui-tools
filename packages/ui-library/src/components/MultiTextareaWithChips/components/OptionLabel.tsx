import type { FC } from 'react';

import classNames from 'classnames';

import type { TNormalizedOption } from '../types';

interface OptionLabelProps {
  option: TNormalizedOption;
}

export const OptionLabel: FC<OptionLabelProps> = ({ option }) => (
  <span className="multi-textarea-chips__option-row">
    <span className={classNames('multi-textarea-chips__option-text', option.labelClassName)}>{option.label}</span>
    {option.secondaryText && (
      <span className={classNames('multi-textarea-chips__option-secondary', option.secondaryTextClassName)}>
        {option.secondaryText}
      </span>
    )}
  </span>
);
