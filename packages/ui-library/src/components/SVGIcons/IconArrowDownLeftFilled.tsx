import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowDownLeftFilled = ({
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
    <g id="Direction=Down Left, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M13 20.9999C13.5523 20.9999 14 20.5521 14 19.9999C14 19.4476 13.5523 18.9999 13 18.9999H6.41435L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L5 17.5858V10.9999C5 10.4476 4.55228 9.99987 4 9.99987C3.44772 9.99987 3 10.4476 3 10.9999V19.9999C3 20.5521 3.44772 20.9999 4 20.9999H13Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconArrowDownLeftFilled;
