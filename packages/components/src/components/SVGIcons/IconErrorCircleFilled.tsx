import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconErrorCircleFilled = ({
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
      d="M12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2ZM12.0018 15.0037C11.4503 15.0037 11.0031 15.4508 11.0031 16.0024C11.0031 16.5539 11.4503 17.001 12.0018 17.001C12.5533 17.001 13.0005 16.5539 13.0005 16.0024C13.0005 15.4508 12.5533 15.0037 12.0018 15.0037ZM11.9996 7C11.4868 7.00018 11.0643 7.38638 11.0067 7.88374L11 8.00036L11.0018 13.0012L11.0086 13.1179C11.0665 13.6152 11.4893 14.0011 12.0022 14.0009C12.515 14.0007 12.9375 13.6145 12.9951 13.1171L13.0018 13.0005L13 7.99964L12.9932 7.88302C12.9353 7.3857 12.5125 6.99982 11.9996 7Z"
      fill="#222222"
    />
  </svg>
);

export default IconErrorCircleFilled;
