import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconVehicleTruckProfile = ({
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
      d="M4.25 3C3.00736 3 2 4.00736 2 5.25V17.25C2 18.4218 2.89576 19.3844 4.03987 19.4903C4.27391 20.9139 5.51012 22 7 22C8.4865 22 9.72048 20.9189 9.95852 19.5H12.0415C12.2795 20.9189 13.5135 22 15 22C16.4865 22 17.7205 20.9189 17.9585 19.5H19.75C20.9926 19.5 22 18.4926 22 17.25V11.8373C22 11.5042 21.926 11.1752 21.7834 10.8741L20.0842 7.28681C19.7119 6.501 18.9203 6 18.0508 6H16.5V5.25C16.5 4.00736 15.4926 3 14.25 3H4.25ZM17.8293 18C17.5897 17.3222 17.1136 16.7563 16.5 16.4013V12.5L20.5 12.5V15.5001H19.25C18.8358 15.5001 18.5 15.8358 18.5 16.2501C18.5 16.6643 18.8358 17.0001 19.25 17.0001H20.5V17.25C20.5 17.6642 20.1642 18 19.75 18H17.8293ZM15 16C13.6938 16 12.5825 16.8348 12.1707 18H9.82929C9.41746 16.8348 8.30622 16 7 16C5.69527 16 4.58509 16.8329 4.17212 17.996C3.7945 17.957 3.5 17.6379 3.5 17.25V5.25C3.5 4.83579 3.83579 4.5 4.25 4.5H14.25C14.6642 4.5 15 4.83579 15 5.25V16ZM16.5 7.5H18.0508C18.3406 7.5 18.6045 7.667 18.7286 7.92894L20.1833 11L16.5 11V7.5ZM7 20.5C6.17157 20.5 5.5 19.8284 5.5 19C5.5 18.1716 6.17157 17.5 7 17.5C7.82843 17.5 8.5 18.1716 8.5 19C8.5 19.8284 7.82843 20.5 7 20.5ZM16.5 19C16.5 19.8284 15.8284 20.5 15 20.5C14.1716 20.5 13.5 19.8284 13.5 19C13.5 18.1716 14.1716 17.5 15 17.5C15.8284 17.5 16.5 18.1716 16.5 19Z"
      fill="#222222"
    />
  </svg>
);

export default IconVehicleTruckProfile;
