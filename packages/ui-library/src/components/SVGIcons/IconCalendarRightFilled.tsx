import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconCalendarRightFilled = ({
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
      d="M21.3594 8.5V17.75C21.3594 19.5449 19.9043 21 18.1094 21H6.60938C4.81445 21 3.35938 19.5449 3.35938 17.75V8.5H21.3594ZM7.60938 15C6.91902 15 6.35938 15.5596 6.35938 16.25C6.35938 16.9404 6.91902 17.5 7.60938 17.5C8.29973 17.5 8.85938 16.9404 8.85938 16.25C8.85938 15.5596 8.29973 15 7.60938 15ZM12.3594 15C11.669 15 11.1094 15.5596 11.1094 16.25C11.1094 16.9404 11.669 17.5 12.3594 17.5C13.0497 17.5 13.6094 16.9404 13.6094 16.25C13.6094 15.5596 13.0497 15 12.3594 15ZM7.60938 10.5C6.91902 10.5 6.35938 11.0596 6.35938 11.75C6.35938 12.4404 6.91902 13 7.60938 13C8.29973 13 8.85938 12.4404 8.85938 11.75C8.85938 11.0596 8.29973 10.5 7.60938 10.5ZM12.3594 10.5C11.669 10.5 11.1094 11.0596 11.1094 11.75C11.1094 12.4404 11.669 13 12.3594 13C13.0497 13 13.6094 12.4404 13.6094 11.75C13.6094 11.0596 13.0497 10.5 12.3594 10.5ZM17.1094 10.5C16.419 10.5 15.8594 11.0596 15.8594 11.75C15.8594 12.4404 16.419 13 17.1094 13C17.7997 13 18.3594 12.4404 18.3594 11.75C18.3594 11.0596 17.7997 10.5 17.1094 10.5ZM18.1094 3C19.9043 3 21.3594 4.45507 21.3594 6.25V7H3.35938V6.25C3.35938 4.45507 4.81445 3 6.60938 3H18.1094Z"
      fill="#222222"
    />
  </svg>
);

export default IconCalendarRightFilled;
