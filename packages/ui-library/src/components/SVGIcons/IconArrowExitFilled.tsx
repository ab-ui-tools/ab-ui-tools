import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowExitFilled = ({
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
      d="M15.3001 21C15.7972 21 16.2001 20.5971 16.2001 20.1C16.2001 19.6029 15.7972 19.2 15.3001 19.2H7.8001C6.47461 19.2 5.4001 18.1255 5.4001 16.8V7.2C5.4001 5.87452 6.47461 4.8 7.8001 4.8H15.3001C15.7972 4.8 16.2001 4.39706 16.2001 3.9C16.2001 3.40294 15.7972 3 15.3001 3H7.8001C5.4805 3 3.6001 4.8804 3.6001 7.2V16.8C3.6001 19.1196 5.4805 21 7.8001 21H15.3001ZM16.4896 7.43868C16.8549 7.10154 17.4243 7.12431 17.7614 7.48955L21.3614 11.3896C21.6797 11.7343 21.6797 12.2657 21.3614 12.6105L17.7614 16.5105C17.4243 16.8757 16.8549 16.8985 16.4896 16.5613C16.1244 16.2242 16.1016 15.6548 16.4388 15.2896L18.6445 12.9H9.3001C8.80304 12.9 8.4001 12.4971 8.4001 12C8.4001 11.5029 8.80304 11.1 9.3001 11.1H18.6445L16.4388 8.71046C16.1016 8.34522 16.1244 7.77583 16.4896 7.43868Z"
      fill="#222222"
    />
  </svg>
);

export default IconArrowExitFilled;
