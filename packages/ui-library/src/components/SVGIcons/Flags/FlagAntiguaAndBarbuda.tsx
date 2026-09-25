import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAntiguaAndBarbuda = ({
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
    <g clipPath="url(#clip0_9419_130)">
      <path
        d="M0 10C0 10.685 0.0690625 11.3538 0.200273 12L10 12.6087L19.7998 12C19.931 11.3538 20 10.685 20 10C20 9.31505 19.9309 8.64622 19.7998 8.00001L10 7.3913L0.200273 8.00001C0.0690625 8.64622 0 9.31505 0 10H0Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.7998 12H0.200317C1.12684 16.5645 5.16219 20 10 20C14.8379 20 18.8732 16.5645 19.7998 12Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0.200317 8H19.7998C18.8732 3.43555 14.838 0 10 0C5.16211 0 1.12684 3.43555 0.200317 8Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M14.3478 8.00001H5.65222L7.42878 7.1643L6.48273 5.4438L8.41183 5.81274L8.65636 3.86395L10 5.29731L11.3438 3.86395L11.5882 5.81274L13.5173 5.4438L12.5714 7.16438L14.3478 8.00001Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M0 9.99999C0 15.5228 4.47719 20 10 20L1.99984 3.99963C0.744219 5.67108 0 7.74854 0 9.99999Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M10 20C15.5228 20 20 15.5228 20 9.99999C20 7.74854 19.2558 5.67108 18.0002 3.99963L10 20Z"
        style={{ fill: '#A2001D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_130">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAntiguaAndBarbuda;
