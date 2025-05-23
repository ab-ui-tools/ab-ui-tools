import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconPerson = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M17.7542 13.9999C18.9962 13.9999 20.003 15.0068 20.003 16.2488V16.8242C20.003 17.7185 19.6835 18.5833 19.1019 19.2627C17.5326 21.0962 15.1454 22.0011 12 22.0011C8.85414 22.0011 6.46812 21.0959 4.90182 19.2617C4.32206 18.5828 4.00354 17.7193 4.00354 16.8265V16.2488C4.00354 15.0068 5.0104 13.9999 6.25242 13.9999H17.7542ZM17.7542 15.4999H6.25242C5.83882 15.4999 5.50354 15.8352 5.50354 16.2488V16.8265C5.50354 17.3622 5.69465 17.8802 6.04251 18.2876C7.29582 19.7553 9.26169 20.5011 12 20.5011C14.7383 20.5011 16.7059 19.7553 17.9624 18.2873C18.3113 17.8797 18.503 17.3608 18.503 16.8242V16.2488C18.503 15.8352 18.1678 15.4999 17.7542 15.4999ZM12 2.00464C14.7614 2.00464 17 4.24321 17 7.00464C17 9.76606 14.7614 12.0046 12 12.0046C9.23857 12.0046 7 9.76606 7 7.00464C7 4.24321 9.23857 2.00464 12 2.00464ZM12 3.50464C10.067 3.50464 8.5 5.07164 8.5 7.00464C8.5 8.93764 10.067 10.5046 12 10.5046C13.933 10.5046 15.5 8.93764 15.5 7.00464C15.5 5.07164 13.933 3.50464 12 3.50464Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconPerson;
