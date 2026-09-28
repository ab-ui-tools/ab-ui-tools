import type { NumberFormatValues, SourceInfo } from 'react-number-format';

import { useEffect, useState } from 'react';

import type { TAmountInputProps, TAmountValue } from '../types';

import { parseNumeric, toNumericString } from '../utils';

type TUseAmountValueProps = Pick<
  TAmountInputProps,
  'value' | 'valueType' | 'name' | 'setFieldValue' | 'onValueChange'
> & {
  shouldValidate: boolean;
};

export const useAmountValue = ({
  value,
  valueType = 'string',
  name,
  setFieldValue,
  onValueChange,
  shouldValidate,
}: TUseAmountValueProps) => {
  const [text, setText] = useState(() => toNumericString(value));

  useEffect(() => {
    if (value === undefined) return;
    const incoming = toNumericString(value);
    setText(current => (parseNumeric(current) === parseNumeric(incoming) ? current : incoming));
  }, [value]);

  const commit = (nextText: string, formattedValue: string) => {
    const floatValue = parseNumeric(nextText) ?? undefined;
    const cleanValue = floatValue === undefined ? '' : nextText.replace(/\.$/, '');
    const output: TAmountValue = valueType === 'number' ? (floatValue ?? null) : cleanValue;

    setText(nextText);
    if (name && setFieldValue) {
      setFieldValue(name, output, shouldValidate ? { shouldValidate: true } : undefined);
    }
    onValueChange?.(output, { value: cleanValue, floatValue, formattedValue });
  };

  const handleValueChange = ({ value: nextText, formattedValue }: NumberFormatValues, { source }: SourceInfo) => {
    if (source === 'event') commit(nextText, formattedValue);
  };

  return {
    text,
    isEmpty: text === '',
    hasValue: parseNumeric(text) !== null,
    commit,
    handleValueChange,
  };
};
