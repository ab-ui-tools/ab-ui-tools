import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconLockOpen = ({
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
    <g id="State=Open, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M12 2.00391C13.8753 2.00391 15.3342 3.2102 15.9276 5.00689C16.0575 5.4002 15.844 5.82436 15.4507 5.95427C15.0574 6.08419 14.6332 5.87066 14.5033 5.47734C14.1018 4.26162 13.1854 3.50391 12 3.50391C10.5927 3.50391 9.57976 4.46178 9.50392 6.05538L9.49935 6.24964L9.499 7.99891L17.75 7.99964C18.9409 7.99964 19.9156 8.9248 19.9948 10.0956L20 10.2496V19.7459C20 20.9368 19.0748 21.9116 17.904 21.9907L17.75 21.9959H6.25C5.05914 21.9959 4.08436 21.0708 4.00519 19.9L4 19.7459V10.2496C4 9.05878 4.92516 8.08399 6.09595 8.00483L6.25 7.99964L7.999 7.99891L7.99935 6.24964C7.99935 3.71117 9.70837 2.00391 12 2.00391ZM17.75 9.49964H6.25C5.8703 9.49964 5.55651 9.78179 5.50685 10.1479L5.5 10.2496V19.7459C5.5 20.1256 5.78215 20.4394 6.14823 20.4891L6.25 20.4959H17.75C18.1297 20.4959 18.4435 20.2138 18.4932 19.8477L18.5 19.7459V10.2496C18.5 9.86994 18.2178 9.55615 17.8518 9.50649L17.75 9.49964ZM12 13.4992C12.8277 13.4992 13.4986 14.1701 13.4986 14.9978C13.4986 15.8254 12.8277 16.4964 12 16.4964C11.1723 16.4964 10.5014 15.8254 10.5014 14.9978C10.5014 14.1701 11.1723 13.4992 12 13.4992Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconLockOpen;
