import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconBed = ({
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
      d="M6.75 4H17.25C18.7125 4 19.9084 5.1417 19.995 6.58248L20 6.75L20.0006 10.1037C21.0968 10.414 21.9147 11.3872 21.9937 12.5628L22 12.75V20.25C22 20.6642 21.6642 21 21.25 21C20.8703 21 20.5565 20.7178 20.5068 20.3518L20.5 20.25V18H3.5V20.25C3.5 20.6297 3.21785 20.9435 2.85177 20.9932L2.75 21C2.3703 21 2.05651 20.7178 2.00685 20.3518L2 20.25V12.75C2 11.4911 2.84596 10.4297 4.00044 10.1034L4 6.75C4 5.28747 5.1417 4.0916 6.58248 4.00502L6.75 4ZM19.25 11.5H4.75C4.10279 11.5 3.57047 11.9919 3.50645 12.6222L3.5 12.75V16.5H20.5V12.75C20.5 12.1028 20.0081 11.5705 19.3778 11.5065L19.25 11.5ZM17.25 5.5H6.75C6.10279 5.5 5.57047 5.99187 5.50645 6.62219L5.5 6.75V10H7C7 9.44772 7.44772 9 8 9H10C10.5128 9 10.9355 9.38604 10.9933 9.88338L11 10H13C13 9.44772 13.4477 9 14 9H16C16.5128 9 16.9355 9.38604 16.9933 9.88338L17 10H18.5V6.75C18.5 6.10279 18.0081 5.57047 17.3778 5.50645L17.25 5.5Z"
      fill="#222222"
    />
  </svg>
);

export default IconBed;
