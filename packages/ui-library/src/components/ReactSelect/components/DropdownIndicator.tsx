import { components, type DropdownIndicatorProps } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled';
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled';

export const DropdownIndicator = (props: DropdownIndicatorProps<TOption, boolean>) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <IconCaretUpFilled size="xsmall" /> : <IconCaretDownFilled size="xsmall" />}
    </components.DropdownIndicator>
  );
};
