import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconPhoneFilled = ({
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
      d="M5.25 4.75C5.25 2.817 6.817 1.25 8.75 1.25H15.25C17.183 1.25 18.75 2.817 18.75 4.75V19.25C18.75 21.183 17.183 22.75 15.25 22.75H8.75C6.817 22.75 5.25 21.183 5.25 19.25V4.75ZM9.25 19C9.25 18.5858 9.58579 18.25 10 18.25H14C14.4142 18.25 14.75 18.5858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75H10C9.58579 19.75 9.25 19.4142 9.25 19Z"
      fill="#222222"
    />
  </svg>
);

export default IconPhoneFilled;
