import { components, type MultiValueRemoveProps } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

import { IconDismissCircle } from '../../SVGIcons/IconDismissCircle';

export const MultiValueRemove = (props: MultiValueRemoveProps<TOption>) => {
  return (
    <components.MultiValueRemove {...props}>
      <IconDismissCircle type="tertiary" className="cursor-pointer" size="small" />
    </components.MultiValueRemove>
  );
};
