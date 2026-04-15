import { components as Components, type ValueContainerProps } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

import { Text } from '../../Text';

export const ValueContainer = (props: ValueContainerProps<TOption, boolean>) => {
  const { children, getValue, selectProps } = props;
  const showCount = selectProps?.showCount || 2;
  const values = getValue();
  const remaining = values.length - showCount;

  return (
    <Components.ValueContainer {...props}>
      {children}
      {remaining > 0 && <Text className="ml-6">+{remaining}</Text>}
    </Components.ValueContainer>
  );
};
