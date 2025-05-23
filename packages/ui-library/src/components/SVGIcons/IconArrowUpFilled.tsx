import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowUpFilled = ({
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
    <g id="Direction=Up, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M4.28401 10.2954C3.89639 10.6888 3.90108 11.322 4.29449 11.7096C4.68789 12.0972 5.32104 12.0925 5.70866 11.6991L11 6.32882V19.9999C11 20.5522 11.4477 20.9999 12 20.9999C12.5523 20.9999 13 20.5522 13 19.9999V6.3353L18.2849 11.6991C18.6726 12.0925 19.3057 12.0972 19.6991 11.7096C20.0925 11.322 20.0972 10.6888 19.7096 10.2954L12.8872 3.37122C12.3976 2.87431 11.596 2.87431 11.1064 3.37122L4.28401 10.2954Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconArrowUpFilled;
