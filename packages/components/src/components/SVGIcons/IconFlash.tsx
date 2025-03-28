import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconFlash = ({
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
      d="M7.42505 2.83052C7.60245 2.33254 8.07392 2 8.60256 2H15.0562C15.9094 2 16.5118 2.83587 16.242 3.64528L14.7905 8H18.7492C19.8534 8 20.4153 9.32683 19.647 10.1198L8.586 21.536C7.53226 22.6236 5.71405 21.6422 6.04495 20.1645L7.31418 14.4964L5.74573 14.4904C4.53898 14.4858 3.69895 13.2899 4.10392 12.1532L7.42505 2.83052ZM8.77889 3.5L5.51693 12.6565C5.45908 12.8189 5.57909 12.9898 5.75148 12.9904L8.25277 13C8.47997 13.0009 8.69453 13.1047 8.83621 13.2823C8.97789 13.4599 9.03142 13.6922 8.98177 13.9139L7.50871 20.4923L18.1589 9.5H13.7499C13.5088 9.5 13.2824 9.38411 13.1415 9.18853C13.0005 8.99296 12.9622 8.74154 13.0384 8.51283L14.7093 3.5H8.77889Z"
      fill="#222222"
    />
  </svg>
);

export default IconFlash;
