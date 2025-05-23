import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconCalendarDay = ({
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
        d="M18 3C19.7949 3 21.25 4.45507 21.25 6.25V17.75C21.25 19.5449 19.7949 21 18 21H6.5C4.70507 21 3.25 19.5449 3.25 17.75V6.25C3.25 4.45507 4.70507 3 6.5 3H18ZM18 4.5H6.5C5.5335 4.5 4.75 5.2835 4.75 6.25V17.75C4.75 18.7165 5.5335 19.5 6.5 19.5H18C18.9665 19.5 19.75 18.7165 19.75 17.75V6.25C19.75 5.2835 18.9665 4.5 18 4.5ZM16.5 11C16.9142 11 17.25 11.3358 17.25 11.75V16.25C17.25 16.6642 16.9142 17 16.5 17H8C7.58579 17 7.25 16.6642 7.25 16.25V11.75C7.25 11.3358 7.58579 11 8 11H16.5ZM15.75 12.5H8.75V15.5H15.75V12.5ZM8 7.25H16.5C16.9142 7.25 17.25 7.58579 17.25 8C17.25 8.3797 16.9678 8.69349 16.6018 8.74315L16.5 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8C7.25 7.6203 7.53215 7.30651 7.89823 7.25685L8 7.25H16.5H8Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconCalendarDay;
