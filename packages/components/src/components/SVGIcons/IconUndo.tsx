import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconUndo = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M4.75 2C5.1297 2 5.44349 2.28215 5.49315 2.64823L5.5 2.75V8.44L10.0743 3.88014C12.5163 1.43819 16.4385 1.37863 18.9526 3.70146L19.1385 3.88014C21.6415 6.38313 21.6415 10.4413 19.1385 12.9443L10.2933 21.7835C10.0003 22.0762 9.52558 22.0759 9.23269 21.783C8.93979 21.4901 8.94013 21.0151 9.23315 20.7223L18.0778 11.8836C19.995 9.96641 19.995 6.85801 18.0778 4.9408C16.2187 3.08169 13.2395 3.02535 11.3118 4.77248L11.1342 4.94156L6.562 9.5L12.25 9.50018C12.6297 9.50018 12.9435 9.78234 12.9932 10.1484L13 10.2502C13 10.6299 12.7178 10.9437 12.3518 10.9933L12.25 11.0002H4.75C4.3703 11.0002 4.05651 10.718 4.00685 10.352L4 10.2502V2.75C4 2.33579 4.33579 2 4.75 2Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconUndo;
