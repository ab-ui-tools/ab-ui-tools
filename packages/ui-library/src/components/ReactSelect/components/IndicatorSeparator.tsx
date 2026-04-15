import { components, type IndicatorSeparatorProps } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

export const IndicatorSeparator = ({ selectProps, ...rest }: IndicatorSeparatorProps<TOption, boolean>) => {
  const { isClearable } = selectProps;
  if (!isClearable) return null;
  return <components.IndicatorSeparator {...rest} selectProps={selectProps} />;
};
