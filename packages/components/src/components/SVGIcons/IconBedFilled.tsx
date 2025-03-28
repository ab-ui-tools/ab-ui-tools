import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconBedFilled = ({
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
      d="M19.25 11C20.7125 11 21.9084 12.1417 21.995 13.5825L22 13.75V20.25C22 20.6642 21.6642 21 21.25 21C20.8703 21 20.5565 20.7178 20.5068 20.3518L20.5 20.25V18H3.5V20.25C3.5 20.6297 3.21785 20.9435 2.85177 20.9932L2.75 21C2.3703 21 2.05651 20.7178 2.00685 20.3518L2 20.25V13.75C2 12.2875 3.1417 11.0916 4.58248 11.005L4.75 11H19.25ZM6.75 4H17.25C18.7125 4 19.9084 5.1417 19.995 6.58248L20 6.75V10H17L16.9933 9.88338C16.94 9.4243 16.5757 9.06005 16.1166 9.00673L16 9H14C13.4872 9 13.0645 9.38604 13.0067 9.88338L13 10H11L10.9933 9.88338C10.9399 9.4243 10.5757 9.06005 10.1166 9.00673L10 9H8C7.48716 9 7.06449 9.38604 7.00673 9.88338L7 10H4V6.75C4 5.28747 5.1417 4.0916 6.58248 4.00502L6.75 4Z"
      fill="#222222"
    />
  </svg>
);

export default IconBedFilled;
