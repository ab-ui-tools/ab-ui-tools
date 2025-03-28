import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconAmdFilled = ({
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
      d="M5.75511 9.31063C5.75511 7.77012 6.32348 6.68322 7.12352 5.97204C7.94069 5.24564 9.05657 4.86249 10.2029 4.86253C11.3492 4.86255 12.4651 5.24575 13.2823 5.9722C14.0824 6.68341 14.6508 7.7703 14.6508 9.31065V11.9654H11.996C11.4816 11.9654 11.0647 12.3823 11.0647 12.8966C11.0647 13.411 11.4816 13.8279 11.996 13.8279H14.6508V15.5514H11.996C11.4816 15.5514 11.0647 15.9683 11.0647 16.4827C11.0647 16.997 11.4816 17.4139 11.996 17.4139H14.6508V20.0687C14.6508 20.5831 15.0677 21 15.582 21C16.0964 21 16.5133 20.5831 16.5133 20.0687V17.4139H19.1681C19.6824 17.4139 20.0993 16.997 20.0993 16.4827C20.0993 15.9683 19.6824 15.5514 19.1681 15.5514H16.5133V13.8279H19.1681C19.6824 13.8279 20.0993 13.411 20.0993 12.8966C20.0993 12.3823 19.6824 11.9654 19.1681 11.9654H16.5133V9.31065C16.5133 7.26491 15.7369 5.66212 14.5198 4.58017C13.3198 3.51346 11.7461 3.00004 10.2029 3C8.65975 2.99995 7.08609 3.51329 5.88609 4.58C4.66896 5.66194 3.89258 7.26476 3.89258 9.31063C3.89258 9.82494 4.30952 10.2419 4.82384 10.2419C5.33816 10.2419 5.75511 9.82494 5.75511 9.31063Z"
      fill="#222222"
    />
  </svg>
);

export default IconAmdFilled;
