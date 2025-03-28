import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconPaintBrushFilled = ({
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
      d="M12.4998 2V5.25154C12.4998 5.66576 12.8355 6.00154 13.2498 6.00154C13.664 6.00154 13.9998 5.66576 13.9998 5.25154V2H14.9998V6.25112C14.9998 6.66534 15.3355 7.00112 15.7498 7.00112C16.164 7.00112 16.4998 6.66534 16.4998 6.25112V2H18.25C18.6642 2 19 2.33579 19 2.75V11H5V2.75C5 2.33579 5.33579 2 5.75 2H12.4998ZM5 12.5V14.2521C5 15.4947 6.00736 16.5021 7.25 16.5021H9.99966V20C9.99966 21.1046 10.8951 22 11.9997 22C13.1042 22 13.9997 21.1046 13.9997 20V16.5021H16.75C17.9926 16.5021 19 15.4947 19 14.2521V12.5H5Z"
      fill="#222222"
    />
  </svg>
);

export default IconPaintBrushFilled;
