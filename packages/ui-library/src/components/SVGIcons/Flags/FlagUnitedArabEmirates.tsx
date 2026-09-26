import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagUnitedArabEmirates = ({
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
    <g clipPath="url(#clip0_9419_1983)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.65222 13.4783L6.52179 19.3781C7.60507 19.7801 8.77683 20 10 20C14.2996 20 17.9651 17.2863 19.378 13.4783H5.65222Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M5.65222 6.52176L6.52179 0.621914C7.60507 0.219922 8.77683 0 10 0C14.2996 0 17.9651 2.71375 19.378 6.52176H5.65222Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M0 9.99996C0 14.2996 2.71379 17.965 6.52176 19.378V0.621948C2.71379 2.03488 0 5.70031 0 9.99996Z"
        style={{ fill: '#A2001D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1983">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagUnitedArabEmirates;
