import { components, type ClearIndicatorProps } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

import { IconDismissCircle } from '../../SVGIcons/IconDismissCircle';

export const ClearIndicator = (props: ClearIndicatorProps<TOption, boolean>) => {
  return (
    <components.ClearIndicator {...props}>
      <IconDismissCircle type="secondary" className="cursor-pointer" size="small" />
    </components.ClearIndicator>
  );
};
