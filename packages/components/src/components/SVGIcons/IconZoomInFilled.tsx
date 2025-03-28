import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconZoomInFilled = ({
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
      d="M17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10ZM10 5.5C9.44771 5.5 9 5.94772 9 6.5V9H6.5C5.94771 9 5.5 9.44772 5.5 10C5.5 10.5523 5.94771 11 6.5 11H9V13.5C9 14.0523 9.44771 14.5 10 14.5C10.5523 14.5 11 14.0523 11 13.5V11H13.5C14.0523 11 14.5 10.5523 14.5 10C14.5 9.44772 14.0523 9 13.5 9H11V6.5C11 5.94772 10.5523 5.5 10 5.5Z"
      fill="#222222"
    />
  </svg>
);

export default IconZoomInFilled;
