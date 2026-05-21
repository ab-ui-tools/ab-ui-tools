import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconOrganizationHorizontalFilled = ({
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
      d="M6.00069 15.6001C4.01203 15.6001 2.3999 13.988 2.3999 11.9993C2.3999 10.0107 4.01203 8.39856 6.00069 8.39856C7.7849 8.39856 9.26601 9.69624 9.5517 11.3993H11.3999V7.79925C11.3999 6.80514 12.2058 5.99925 13.1999 5.99925H14.4495C14.7349 4.2958 16.2162 2.99768 18.0007 2.99768C19.9893 2.99768 21.6015 4.60981 21.6015 6.59847C21.6015 8.58713 19.9893 10.1993 18.0007 10.1993C16.2167 10.1993 14.7358 8.90193 14.4498 7.19925H13.1999C12.8685 7.19925 12.5999 7.46788 12.5999 7.79925V16.1993C12.5999 16.5306 12.8685 16.7993 13.1999 16.7993H14.4495C14.7349 15.0958 16.2162 13.7977 18.0007 13.7977C19.9893 13.7977 21.6015 15.4098 21.6015 17.3985C21.6015 19.3871 19.9893 20.9993 18.0007 20.9993C16.2167 20.9993 14.7358 19.7019 14.4498 17.9993H13.1999C12.2058 17.9993 11.3999 17.1934 11.3999 16.1993V12.5993H9.55172C9.2661 14.3024 7.78495 15.6001 6.00069 15.6001Z"
      fill="#222222"
    />
  </svg>
);

export default IconOrganizationHorizontalFilled;
