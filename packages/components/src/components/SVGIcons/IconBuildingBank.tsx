import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconBuildingBank = ({
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
      d="M13 6.24985C13 6.80213 12.5523 7.24985 12 7.24985C11.4477 7.24985 11 6.80213 11 6.24985C11 5.69756 11.4477 5.24985 12 5.24985C12.5523 5.24985 13 5.69756 13 6.24985ZM13.0316 2.32416C12.417 1.87567 11.583 1.87567 10.9684 2.32416L3.54657 7.74011C2.56949 8.45312 3.07382 9.99985 4.2834 9.99985H4.5L4.5 15.7997C3.60958 16.2549 3 17.1812 3 18.2498V19.7498C3 20.1641 3.33579 20.4998 3.75 20.4998H20.25C20.6642 20.4998 21 20.1641 21 19.7498V18.2498C21 17.1812 20.3904 16.2549 19.5 15.7997V9.99985H19.7166C20.9262 9.99985 21.4305 8.45312 20.4534 7.74011L13.0316 2.32416ZM11.8526 3.53585C11.9404 3.47178 12.0596 3.47178 12.1474 3.53585L18.9499 8.49985H5.05011L11.8526 3.53585ZM18 9.99985V15.4998H16V9.99985H18ZM14.5 9.99985V15.4998H12.75V9.99985H14.5ZM11.25 9.99985V15.4998H9.5L9.5 9.99985H11.25ZM5.75 16.9998H18.25C18.9404 16.9998 19.5 17.5595 19.5 18.2498V18.9998H4.5V18.2498C4.5 17.5595 5.05964 16.9998 5.75 16.9998ZM6 15.4998L6 9.99985H8L8 15.4998H6Z"
      fill="#222222"
    />
  </svg>
);

export default IconBuildingBank;
