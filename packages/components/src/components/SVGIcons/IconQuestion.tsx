import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconQuestion = ({
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
        d="M12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2ZM12 3.667C7.405 3.667 3.667 7.405 3.667 12C3.667 16.595 7.405 20.333 12 20.333C16.595 20.333 20.333 16.595 20.333 12C20.333 7.405 16.595 3.667 12 3.667ZM12 15.5C12.5523 15.5 13 15.9477 13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5ZM12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 10.5108 14.4525 11.074 13.6989 11.8586L13.5303 12.0303C12.9084 12.6522 12.75 12.9163 12.75 13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5C11.25 12.4892 11.5475 11.926 12.3011 11.1414L12.4697 10.9697C13.0916 10.3478 13.25 10.0837 13.25 9.5C13.25 8.80964 12.6904 8.25 12 8.25C11.3528 8.25 10.8205 8.74187 10.7565 9.37219L10.75 9.5C10.75 9.91421 10.4142 10.25 10 10.25C9.58579 10.25 9.25 9.91421 9.25 9.5C9.25 7.98122 10.4812 6.75 12 6.75Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconQuestion;
