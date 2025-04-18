import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconTableCellEdit = ({
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
      <g id="Shape">
        <path
          d="M3 8.75C3 7.50736 4.00736 6.5 5.25 6.5H18.75C19.7311 6.5 20.5656 7.12796 20.8733 8.00388C20.8206 8.00132 20.7679 8.00002 20.7151 8H20.713C20.2473 8.00021 19.7806 8.09923 19.3477 8.29694C19.2108 8.11651 18.994 8 18.75 8H15.5L15.5 11.8531L14 13.3531L14 8H10L10 14H13.3531L12.4883 14.8648C12.2951 15.058 12.1249 15.2712 11.9801 15.5H5.25C4.00736 15.5 3 14.4926 3 13.25V8.75ZM5.25 8C4.83579 8 4.5 8.33579 4.5 8.75V13.25C4.5 13.6642 4.83579 14 5.25 14H8.5L8.5 8H5.25Z"
          fill="#222222"
        />
        <path
          d="M20.7152 9H20.7131C20.1285 9.00027 19.5439 9.22342 19.0979 9.66946L13.1955 15.5719C12.8513 15.916 12.6072 16.3472 12.4892 16.8194L12.0315 18.6501C11.8325 19.4462 12.5536 20.1674 13.3497 19.9683L15.1804 19.5106C15.6526 19.3926 16.0838 19.1485 16.4279 18.8043L22.3303 12.9019C23.223 12.0093 23.223 10.5621 22.3303 9.66946C21.8843 9.22342 21.2998 9.00027 20.7152 9Z"
          fill="#222222"
        />
      </g>
    </g>
  </svg>
);

export default IconTableCellEdit;
