import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconPersonSubtractFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M11.9942 2.40002C9.34327 2.40002 7.19424 4.54906 7.19424 7.20002C7.19424 9.85099 9.34327 12 11.9942 12C14.6452 12 16.7942 9.85099 16.7942 7.20002C16.7942 4.54906 14.6452 2.40002 11.9942 2.40002ZM6.00471 13.2C4.67802 13.2 3.59424 14.2643 3.59424 15.6C3.59424 17.6295 4.59361 19.1596 6.15623 20.1559C7.6946 21.1368 9.76855 21.6 11.9942 21.6C12.0966 21.6 12.1987 21.599 12.3004 21.5971C11.3594 20.4564 10.7942 18.9942 10.7942 17.4C10.7942 15.8045 11.3604 14.3412 12.3028 13.2L6.00471 13.2ZM22.7942 17.4C22.7942 20.3824 20.3766 22.8 17.3942 22.8C14.4119 22.8 11.9942 20.3824 11.9942 17.4C11.9942 14.4177 14.4119 12 17.3942 12C20.3766 12 22.7942 14.4177 22.7942 17.4ZM14.3942 17.4C14.3942 17.7314 14.6629 18 14.9942 18H19.7942C20.1256 18 20.3942 17.7314 20.3942 17.4C20.3942 17.0687 20.1256 16.8 19.7942 16.8H14.9942C14.6629 16.8 14.3942 17.0687 14.3942 17.4Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconPersonSubtractFilled;
