import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconCalendarClockFilled = ({
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
      d="M18.6406 3C20.4356 3 21.8906 4.45507 21.8906 6.25V7H3.89062V6.25C3.89062 4.45507 5.3457 3 7.14062 3H18.6406ZM21.8906 8.5V12.0218C20.8803 11.375 19.6793 11 18.3906 11C14.8008 11 11.8906 13.9101 11.8906 17.5C11.8906 18.7886 12.2656 19.9897 12.9124 21H7.14062C5.3457 21 3.89062 19.5449 3.89062 17.75V8.5H21.8906ZM23.8906 17.5C23.8906 14.4624 21.4282 12 18.3906 12C15.3531 12 12.8906 14.4624 12.8906 17.5C12.8906 20.5376 15.3531 23 18.3906 23C21.4282 23 23.8906 20.5376 23.8906 17.5ZM18.3906 17.5001H20.3906C20.6668 17.5001 20.8906 17.7239 20.8906 18.0001C20.8906 18.2762 20.6668 18.5001 20.3906 18.5001H17.8906C17.6145 18.5001 17.3906 18.2762 17.3906 18.0001L17.3906 17.9985L17.3906 14.9999C17.3906 14.7238 17.6145 14.4999 17.8906 14.4999C18.1668 14.4999 18.3906 14.7238 18.3906 14.9999L18.3906 17.5001Z"
      fill="#222222"
    />
  </svg>
);

export default IconCalendarClockFilled;
