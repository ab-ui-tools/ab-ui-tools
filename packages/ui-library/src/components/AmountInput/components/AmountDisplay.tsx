import type { JSX } from 'react';

import classNames from 'classnames';

import { splitAmount } from '../utils';

interface TAmountDisplayProps {
  text: string;
  isPlaceholder: boolean;
  decimalSeparator: string;
  decimalScale: number;
}

export const AmountDisplay = ({
  text,
  isPlaceholder,
  decimalSeparator,
  decimalScale,
}: TAmountDisplayProps): JSX.Element => {
  const { integer, fraction } = splitAmount(text, decimalSeparator, decimalScale);

  return (
    <span
      aria-hidden="true"
      className={classNames('amount-input__display', { 'amount-input__display--placeholder': isPlaceholder })}
    >
      {integer}
      {fraction ? <span className="amount-input__fraction">{fraction}</span> : null}
    </span>
  );
};
