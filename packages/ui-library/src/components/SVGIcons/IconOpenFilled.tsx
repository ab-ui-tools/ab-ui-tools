import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconOpenFilled = ({
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
        d="M6.24991 4.75C5.42151 4.75 4.74995 5.42157 4.74995 6.25V17.75C4.74995 18.5784 5.42151 19.25 6.24991 19.25H17.7496C18.578 19.25 19.2496 18.5784 19.2496 17.75V13.75C19.2496 13.1977 19.6973 12.75 20.2496 12.75C20.8018 12.75 21.2495 13.1977 21.2495 13.75V17.75C21.2495 19.683 19.6826 21.25 17.7496 21.25H6.24991C4.31696 21.25 2.75 19.683 2.75 17.75V6.25C2.75 4.317 4.31697 2.75 6.24991 2.75H10.2498C10.8021 2.75 11.2498 3.19772 11.2498 3.75C11.2498 4.30228 10.8021 4.75 10.2498 4.75H6.24991ZM12.7498 3.75C12.7498 3.19772 13.1975 2.75 13.7497 2.75H20.25C20.8023 2.75 21.25 3.19772 21.25 3.75V10.25C21.25 10.8023 20.8023 11.25 20.25 11.25C19.6978 11.25 19.25 10.8023 19.25 10.25V6.16425L14.4568 10.9571C14.0663 11.3476 13.4331 11.3476 13.0426 10.9571C12.6521 10.5665 12.6521 9.93336 13.0427 9.54286L17.8359 4.75H13.7497C13.1975 4.75 12.7498 4.30228 12.7498 3.75Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconOpenFilled;
