import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconExpandUpRight = ({
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
    <g id="Direction=Up Right, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H10.25C10.6642 4.5 11 4.16421 11 3.75C11 3.33579 10.6642 3 10.25 3H6.25C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V13.75C21 13.3358 20.6642 13 20.25 13C19.8358 13 19.5 13.3358 19.5 13.75V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H12V14.75C12 13.2312 10.7688 12 9.25 12H4.5V6.25ZM4.5 13.5H9.25C9.94036 13.5 10.5 14.0596 10.5 14.75V19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V13.5ZM13 3.75C13 3.33579 13.3358 3 13.75 3H20.2505C20.6647 3 21.0005 3.33579 21.0005 3.75V10.25C21.0005 10.6642 20.6647 11 20.2505 11C19.8362 11 19.5005 10.6642 19.5005 10.25V5.56074L14.2803 10.7804C13.9874 11.0732 13.5125 11.0732 13.2196 10.7803C12.9268 10.4874 12.9268 10.0125 13.2197 9.71964L18.4399 4.5H13.75C13.3358 4.5 13 4.16421 13 3.75Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconExpandUpRight;
