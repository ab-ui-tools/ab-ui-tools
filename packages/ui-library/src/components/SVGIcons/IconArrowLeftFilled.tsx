import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowLeftFilled = ({
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
    <g id="Direction=Left, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M10.2954 19.7162C10.6888 20.1038 11.322 20.0991 11.7096 19.7057C12.0972 19.3123 12.0925 18.6792 11.6991 18.2915L6.32876 13.0001H19.9999C20.5522 13.0001 20.9999 12.5524 20.9999 12.0001C20.9999 11.4479 20.5522 11.0001 19.9999 11.0001H6.33536L11.6991 5.71525C12.0925 5.32763 12.0972 4.69448 11.7096 4.30108C11.322 3.90767 10.6888 3.90298 10.2954 4.29061L3.37122 11.113C2.87431 11.6026 2.87431 12.4042 3.37122 12.8938L10.2954 19.7162Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconArrowLeftFilled;
