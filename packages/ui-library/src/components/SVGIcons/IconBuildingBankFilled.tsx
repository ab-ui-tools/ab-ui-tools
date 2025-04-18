import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconBuildingBankFilled = ({
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
      d="M10.9684 2.32416C11.583 1.87567 12.417 1.87567 13.0316 2.32416L20.4534 7.74011C21.4299 8.45267 20.9268 9.99787 19.7189 9.99985H4.28108C3.07318 9.99787 2.57011 8.45266 3.54657 7.74011L10.9684 2.32416ZM13 6.24985C13 5.69756 12.5523 5.24985 12 5.24985C11.4477 5.24985 11 5.69756 11 6.24985C11 6.80213 11.4477 7.24985 12 7.24985C12.5523 7.24985 13 6.80213 13 6.24985ZM11.25 15.9998H9.25V10.9998H11.25V15.9998ZM14.75 15.9998H12.75V10.9998H14.75V15.9998ZM18.5 15.9998H16.25V10.9998H18.5V15.9998ZM18.75 16.9998H5.25C4.00736 16.9998 3 18.0072 3 19.2498V19.7498C3 20.1641 3.33579 20.4998 3.75 20.4998H20.25C20.6642 20.4998 21 20.1641 21 19.7498V19.2498C21 18.0072 19.9926 16.9998 18.75 16.9998ZM7.75 15.9998H5.5V10.9998H7.75V15.9998Z"
      fill="#222222"
    />
  </svg>
);

export default IconBuildingBankFilled;
