import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconList = ({
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
      d="M2.75 18H15.25C15.6642 18 16 18.3358 16 18.75C16 19.1297 15.7178 19.4435 15.3518 19.4931L15.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75C2 18.3703 2.28215 18.0565 2.64823 18.0068L2.75 18H15.25H2.75ZM2.75 11.5H21.25C21.6642 11.5 22 11.8358 22 12.25C22 12.6297 21.7178 12.9435 21.3518 12.9931L21.25 13H2.75C2.33579 13 2 12.6642 2 12.25C2 11.8703 2.28215 11.5565 2.64823 11.5068L2.75 11.5H21.25H2.75ZM2.75 5.00323H18.25C18.6642 5.00323 19 5.33902 19 5.75323C19 6.13293 18.7178 6.44673 18.3518 6.49639L18.25 6.50323H2.75C2.33579 6.50323 2 6.16745 2 5.75323C2 5.37354 2.28215 5.05974 2.64823 5.01008L2.75 5.00323H18.25H2.75Z"
      fill="#222222"
    />
  </svg>
);

export default IconList;
