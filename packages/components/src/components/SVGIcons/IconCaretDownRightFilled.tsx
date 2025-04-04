import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconCaretDownRightFilled = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className,
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M18.0937 7.2071C18.0937 6.09347 16.7473 5.53575 15.9599 6.32321L6.41696 15.8661C5.62951 16.6536 6.18721 18 7.30085 18H16.3437C17.3102 18 18.0937 17.2165 18.0937 16.25V7.2071Z"
      fill="#222222"
    />
  </svg>
);

export default IconCaretDownRightFilled;
