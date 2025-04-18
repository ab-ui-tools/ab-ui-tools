import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconProhibited = ({
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
        d="M11.9941 2C17.517 2 21.9941 6.47715 21.9941 12C21.9941 17.5228 17.517 22 11.9941 22C6.47129 22 1.99414 17.5228 1.99414 12C1.99414 6.47715 6.47129 2 11.9941 2ZM18.5115 6.54309L6.53723 18.5173C8.01369 19.7549 9.9169 20.5 11.9941 20.5C16.6886 20.5 20.4941 16.6944 20.4941 12C20.4941 9.92276 19.749 8.01955 18.5115 6.54309ZM11.9941 3.5C7.29972 3.5 3.49414 7.30558 3.49414 12C3.49414 14.0772 4.23927 15.9804 5.47682 17.4569L17.4511 5.48268C15.9746 4.24513 14.0714 3.5 11.9941 3.5Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconProhibited;
