import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowExportUp = ({
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
    <g id="Direction=Up, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M12.2803 2.21967C11.9874 1.92678 11.5126 1.92678 11.2197 2.21967L6.21967 7.21967C5.92678 7.51256 5.92678 7.98744 6.21967 8.28033C6.51256 8.57322 6.98744 8.57322 7.28033 8.28033L11 4.56066V18.25C11 18.6642 11.3358 19 11.75 19C12.1642 19 12.5 18.6642 12.5 18.25V4.56066L16.2197 8.28033C16.5126 8.57322 16.9874 8.57322 17.2803 8.28033C17.5732 7.98744 17.5732 7.51256 17.2803 7.21967L12.2803 2.21967ZM5.25 20.5C4.83579 20.5 4.5 20.8358 4.5 21.25C4.5 21.6642 4.83579 22 5.25 22H18.25C18.6642 22 19 21.6642 19 21.25C19 20.8358 18.6642 20.5 18.25 20.5H5.25Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconArrowExportUp;
