import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCanaryIslands = ({
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
    <g clipPath="url(#clip0_9419_759)">
      <path
        d="M9.99996 0C8.77676 0 7.605 0.220039 6.52172 0.621992L6.08691 10L6.52168 19.378C7.605 19.78 8.77676 20 9.99996 20C11.2232 20 12.3949 19.78 13.4782 19.378L13.913 10L13.4782 0.621992C12.3949 0.220039 11.2232 0 9.99996 0V0Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M20 10C20 5.70037 17.2863 2.03494 13.4783 0.622009V19.3781C17.2863 17.9651 20 14.2997 20 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M6.52176 19.378V0.622009C2.71375 2.03494 0 5.70037 0 10C0 14.2997 2.71375 17.9651 6.52176 19.378Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_759">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCanaryIslands;
