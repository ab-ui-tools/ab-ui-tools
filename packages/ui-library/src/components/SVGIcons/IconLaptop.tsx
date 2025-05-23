import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconLaptop = ({
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
      d="M2.75049 16.4995H21.2492C21.6635 16.4995 21.9992 16.8353 21.9992 17.2495C21.9992 17.6292 21.7171 17.943 21.351 17.9927L21.2492 17.9995H2.75049C2.33627 17.9995 2.00049 17.6637 2.00049 17.2495C2.00049 16.8698 2.28264 16.556 2.64872 16.5063L2.75049 16.4995H21.2492H2.75049ZM18.2499 5C19.2164 5 19.9999 5.7835 19.9999 6.75V14.2503C19.9999 15.2168 19.2164 16.0003 18.2499 16.0003H5.74986C4.78336 16.0003 3.99986 15.2168 3.99986 14.2503V6.75C3.99986 5.7835 4.78336 5 5.74986 5H18.2499ZM18.2499 6.5H5.74986C5.61179 6.5 5.49986 6.61193 5.49986 6.75V14.2503C5.49986 14.3884 5.61179 14.5003 5.74986 14.5003H18.2499C18.3879 14.5003 18.4999 14.3884 18.4999 14.2503V6.75C18.4999 6.61193 18.3879 6.5 18.2499 6.5Z"
      fill="#222222"
    />
  </svg>
);

export default IconLaptop;
