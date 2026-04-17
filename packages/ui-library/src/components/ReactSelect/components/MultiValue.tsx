import { type MultiValueProps, components } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

export const MultiValue = (props: MultiValueProps<TOption>) => {
  const { index, selectProps } = props;
  const showCount = selectProps?.showCount || 2;
  if (index >= showCount) return null;
  return <components.MultiValue {...props} />;
};
