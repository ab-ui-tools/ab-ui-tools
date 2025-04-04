import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconCheckboxArrowRightFilled = ({
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
        d="M5.92188 2C4.12695 2 2.67188 3.45508 2.67188 5.25V16.75C2.67188 18.5449 4.12695 20 5.92188 20H12.17C11.8491 19.2304 11.6719 18.3859 11.6719 17.5C11.6719 13.9101 14.582 11 18.1719 11C19.0578 11 19.9023 11.1772 20.6719 11.4982V5.25C20.6719 3.45507 19.2168 2 17.4219 2H5.92188ZM16.9519 8.28064L10.1982 15.0266C9.9052 15.3192 9.43055 15.319 9.13778 15.0262L6.39202 12.2803C6.09913 11.9874 6.09915 11.5125 6.39205 11.2196C6.68495 10.9268 7.15983 10.9268 7.45271 11.2197L9.66845 13.4356L15.8919 7.21936C16.1849 6.92664 16.6598 6.92691 16.9525 7.21998C17.2452 7.51304 17.245 7.98791 16.9519 8.28064ZM18.1719 12C21.2094 12 23.6719 14.4624 23.6719 17.5C23.6719 20.5376 21.2094 23 18.1719 23C15.1343 23 12.6719 20.5376 12.6719 17.5C12.6719 14.4624 15.1343 12 18.1719 12ZM15.1719 17C14.8957 17 14.6719 17.2239 14.6719 17.5C14.6719 17.7761 14.8957 18 15.1719 18H19.9648L18.3183 19.6464C18.1231 19.8417 18.1231 20.1583 18.3183 20.3536C18.5136 20.5488 18.8302 20.5488 19.0254 20.3536L21.5254 17.8536C21.7207 17.6583 21.7207 17.3417 21.5254 17.1464L19.0254 14.6464C18.8302 14.4512 18.5136 14.4512 18.3183 14.6464C18.1231 14.8417 18.1231 15.1583 18.3183 15.3536L19.9648 17H15.1719Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconCheckboxArrowRightFilled;
