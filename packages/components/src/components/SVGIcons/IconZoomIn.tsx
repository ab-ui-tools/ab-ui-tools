import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconZoomIn = ({
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
      d="M13.5 10C13.5 9.58579 13.1642 9.25 12.75 9.25H10.75V7.25C10.75 6.83579 10.4142 6.5 10 6.5C9.58578 6.5 9.25 6.83579 9.25 7.25V9.25H7.25C6.83578 9.25 6.5 9.58579 6.5 10C6.5 10.4142 6.83578 10.75 7.25 10.75H9.25V12.75C9.25 13.1642 9.58578 13.5 10 13.5C10.4142 13.5 10.75 13.1642 10.75 12.75V10.75H12.75C13.1642 10.75 13.5 10.4142 13.5 10ZM10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99593 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99593 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z"
      fill="#222222"
    />
  </svg>
);

export default IconZoomIn;
