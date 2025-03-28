import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconCameraDome = ({
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
      d="M12.4531 16C13.8338 16 14.9531 14.8807 14.9531 13.5C14.9531 12.1193 13.8338 11 12.4531 11C11.0724 11 9.95312 12.1193 9.95312 13.5C9.95312 14.8807 11.0724 16 12.4531 16ZM12.4531 8C9.41556 8 6.95312 10.4624 6.95312 13.5C6.95312 16.5376 9.41556 19 12.4531 19C15.4907 19 17.9531 16.5376 17.9531 13.5C17.9531 10.4624 15.4907 8 12.4531 8ZM8.45312 13.5C8.45312 11.2909 10.244 9.5 12.4531 9.5C14.6623 9.5 16.4531 11.2909 16.4531 13.5C16.4531 15.7091 14.6623 17.5 12.4531 17.5C10.244 17.5 8.45312 15.7091 8.45312 13.5ZM2.45312 3.75C2.45312 2.78351 3.23663 2 4.20312 2H20.7031C21.6696 2 22.4531 2.78351 22.4531 3.75V5.25C22.4531 5.94809 22.0444 6.55075 21.4531 6.8316V13C21.4531 17.9706 17.4237 22 12.4531 22C7.48257 22 3.45312 17.9706 3.45312 13V6.8316C2.86188 6.55075 2.45312 5.94809 2.45312 5.25V3.75ZM4.95312 7V13C4.95312 17.1422 8.31097 20.5 12.4531 20.5C16.5953 20.5 19.9531 17.1422 19.9531 13V7H4.95312ZM4.20312 3.5C4.06505 3.5 3.95312 3.61193 3.95312 3.75V5.25C3.95312 5.38807 4.06505 5.5 4.20313 5.5H20.7031C20.8412 5.5 20.9531 5.38807 20.9531 5.25V3.75C20.9531 3.61193 20.8412 3.5 20.7031 3.5H4.20312Z"
      fill="#222222"
    />
  </svg>
);

export default IconCameraDome;
