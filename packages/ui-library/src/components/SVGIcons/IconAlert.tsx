import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconAlert = ({
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
        d="M11.9999 1.99609C16.0498 1.99609 19.3565 5.19084 19.4957 9.24515L19.4999 9.49609V13.5931L20.8799 16.7491C20.9489 16.907 20.9846 17.0775 20.9846 17.2499C20.9846 17.9402 20.4249 18.4999 19.7346 18.4999L14.9999 18.5014C14.9999 20.1582 13.6567 21.5014 11.9999 21.5014C10.4022 21.5014 9.09621 20.2524 9.00496 18.6776L8.99941 18.4991L4.27473 18.4999C4.10339 18.4999 3.93388 18.4646 3.77673 18.3964C3.14353 18.1213 2.85318 17.3851 3.12822 16.7519L4.49987 13.594V9.49599C4.50046 5.3412 7.85195 1.99609 11.9999 1.99609ZM13.4994 18.4991L10.4999 18.5014C10.4999 19.3298 11.1714 20.0014 11.9999 20.0014C12.7796 20.0014 13.4203 19.4065 13.493 18.6458L13.4994 18.4991ZM11.9999 3.49609C8.67971 3.49609 6.00034 6.17035 5.99987 9.49609V13.9057L4.65589 16.9999H19.3524L17.9999 13.9067L18 9.50895L17.9962 9.28375C17.8852 6.05027 15.2414 3.49609 11.9999 3.49609Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconAlert;
