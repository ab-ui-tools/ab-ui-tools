import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconVehicleTruckProfileFilled = ({
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
      d="M2 5.25C2 4.00736 3.00736 3 4.25 3H14.25C15.4926 3 16.5 4.00736 16.5 5.25V6H18.0508C18.9203 6 19.7119 6.501 20.0842 7.28681L21.7834 10.8741C21.926 11.1752 22 11.5042 22 11.8373V17.25C22 18.4926 20.9926 19.5 19.75 19.5H17.9585C17.7205 20.9189 16.4865 22 15 22C13.5135 22 12.2795 20.9189 12.0415 19.5H9.95852C9.72048 20.9189 8.4865 22 7 22C5.51012 22 4.27391 20.9139 4.03987 19.4903C2.89576 19.3844 2 18.4218 2 17.25V5.25ZM20.5 15.5001H19.25C18.8358 15.5001 18.5 15.8358 18.5 16.2501C18.5 16.6643 18.8358 17.0001 19.25 17.0001H20.5V15.5001ZM20.1833 11L18.7286 7.92894C18.6045 7.667 18.3406 7.5 18.0508 7.5H16.5V11L20.1833 11ZM7 20.5C7.82843 20.5 8.5 19.8284 8.5 19C8.5 18.1716 7.82843 17.5 7 17.5C6.17157 17.5 5.5 18.1716 5.5 19C5.5 19.8284 6.17157 20.5 7 20.5ZM16.5 19C16.5 18.1716 15.8284 17.5 15 17.5C14.1716 17.5 13.5 18.1716 13.5 19C13.5 19.8284 14.1716 20.5 15 20.5C15.8284 20.5 16.5 19.8284 16.5 19Z"
      fill="#222222"
    />
  </svg>
);

export default IconVehicleTruckProfileFilled;
