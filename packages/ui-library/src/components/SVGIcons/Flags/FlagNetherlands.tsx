import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNetherlands = ({
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
    <g clipPath="url(#clip0_9419_661)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_661">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNetherlands;
