import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagIvoryCoast = ({
  size,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', 'svg-flag', {
      [`svg-icon__size-${size}`]: size,
      [className]: className,
    })}
    viewBox="0 0 20 20"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-flag` : ''}
  >
    <g clipPath="url(#clip0_9419_1873)">
      <path
        d="M9.99996 20C11.2232 20 12.3949 19.78 13.4782 19.378L13.913 10L13.4782 0.621992C12.3949 0.220039 11.2232 0 9.99996 0C8.77676 0 7.605 0.220039 6.52172 0.621992L6.08691 10L6.52168 19.378C7.605 19.78 8.77676 20 9.99996 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0 9.99996C0 14.2996 2.71375 17.965 6.52176 19.378V0.621948C2.71375 2.03488 0 5.70031 0 9.99996Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M13.4783 0.621948V19.378C17.2863 17.965 20 14.2996 20 9.99996C20 5.70031 17.2863 2.03488 13.4783 0.621948Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1873">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagIvoryCoast;
