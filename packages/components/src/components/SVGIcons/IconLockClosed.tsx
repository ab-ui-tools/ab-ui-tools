import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconLockClosed = ({
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
    <g id="State=Closed, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M12 2C14.2091 2 16 3.79086 16 6V8H17.75C18.9926 8 20 9.00736 20 10.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V10.25C4 9.00736 5.00736 8 6.25 8H8V6C8 3.79086 9.79086 2 12 2ZM17.75 9.5H6.25C5.83579 9.5 5.5 9.83579 5.5 10.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H17.75C18.1642 20.5 18.5 20.1642 18.5 19.75V10.25C18.5 9.83579 18.1642 9.5 17.75 9.5ZM12.0001 13.5C12.8286 13.5 13.5001 14.1716 13.5001 15C13.5001 15.8284 12.8286 16.5 12.0001 16.5C11.1717 16.5 10.5001 15.8284 10.5001 15C10.5001 14.1716 11.1717 13.5 12.0001 13.5ZM12 3.5C10.6193 3.5 9.5 4.61929 9.5 6V8H14.5V6C14.5 4.61929 13.3807 3.5 12 3.5Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconLockClosed;
