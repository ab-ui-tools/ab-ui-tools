import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconTv = ({
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
      d="M4.75 4C3.23122 4 2 5.23122 2 6.75V15.25C2 16.7688 3.23122 18 4.75 18H19.25C20.7688 18 22 16.7688 22 15.25V6.75C22 5.23122 20.7688 4 19.25 4H4.75ZM3.5 6.75C3.5 6.05964 4.05964 5.5 4.75 5.5H19.25C19.9404 5.5 20.5 6.05964 20.5 6.75V15.25C20.5 15.9404 19.9404 16.5 19.25 16.5H4.75C4.05964 16.5 3.5 15.9404 3.5 15.25V6.75ZM5.75 19.5C5.33579 19.5 5 19.8358 5 20.25C5 20.6642 5.33579 21 5.75 21H18.25C18.6642 21 19 20.6642 19 20.25C19 19.8358 18.6642 19.5 18.25 19.5H5.75Z"
      fill="#222222"
    />
  </svg>
);

export default IconTv;
