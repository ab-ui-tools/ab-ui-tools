import { components, type DropdownIndicatorProps } from 'react-select';
import React from 'react';
import classNames from 'classnames';

import type { TOption } from '../types';

import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled';

export const DropdownIndicator = (props: DropdownIndicatorProps<TOption, boolean>) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      <IconCaretDownFilled
        size="xsmall"
        className={classNames('react-select__caret', { 'react-select__caret--open': menuIsOpen })}
      />
    </components.DropdownIndicator>
  );
};
