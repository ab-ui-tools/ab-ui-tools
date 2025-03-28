import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconWrenchScrewdriverFilled = ({
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
      d="M16.0792 2.41459C16.2062 2.1605 16.4659 2 16.75 2H18.25C18.5341 2 18.7938 2.1605 18.9208 2.41459L19.9208 4.41459C20.033 4.63888 20.0256 4.90438 19.9012 5.1221L19 6.69917V12H20.25C20.6642 12 21 12.3358 21 12.75V14.5H14V12.75C14 12.3358 14.3358 12 14.75 12H16V6.69917L15.0988 5.1221C14.9744 4.90438 14.967 4.63888 15.0792 4.41459L16.0792 2.41459ZM14 16V18.5C14 20.433 15.567 22 17.5 22C19.433 22 21 20.433 21 18.5V16H14ZM8.82848 2.2123C9.03402 2.07269 9.29535 2.04394 9.52632 2.13551C11.5598 2.94176 13 4.92679 13 7.25C13 9.37406 11.7961 11.2154 10.0357 12.1317V19.4641C10.0357 20.8645 8.90043 21.9998 7.5 21.9998C6.09956 21.9998 4.96429 20.8645 4.96429 19.4641V12.1317C3.20387 11.2154 2 9.37406 2 7.25C2 4.92688 3.44005 2.94192 5.47344 2.13561C5.70441 2.04402 5.96575 2.07277 6.1713 2.21238C6.37684 2.35198 6.4999 2.58433 6.4999 2.8328V6.49988C6.4999 7.05216 6.94761 7.49988 7.4999 7.49988C8.05218 7.49988 8.4999 7.05216 8.4999 6.49988V2.83271C8.4999 2.58425 8.62295 2.35191 8.82848 2.2123Z"
      fill="#222222"
    />
  </svg>
);

export default IconWrenchScrewdriverFilled;
