import type { FC } from 'react';

import type { ChipValue } from '../types';

import { Chips } from '../../Chips';

interface ChipsListProps {
  chips: ChipValue[];
  disabled: boolean;
  onRemoveChip: (index: number) => void;
}

export const ChipsList: FC<ChipsListProps> = ({ chips, disabled, onRemoveChip }) => (
  <>
    {chips.map((chip: ChipValue, index: number) => {
      const isItem = typeof chip === 'object';
      const text = isItem ? chip.text : chip;
      const hasError = isItem ? Boolean(chip.hasError) : false;

      return (
        <Chips
          key={`${text}-${index}`}
          text={text}
          withAction={!disabled}
          onClick={() => onRemoveChip(index)}
          size="small"
          color={hasError ? 'danger' : 'default'}
          type="accent"
          disabled={disabled}
          aria-label={`Remove ${text} chip`}
        />
      );
    })}
  </>
);
