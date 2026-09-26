import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEstonia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1272)">
      <path
        d="M0 9.99996C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 13.913L19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99996C20 8.77676 19.78 7.60504 19.378 6.52172L10 6.08691L0.621992 6.52168C0.220039 7.60504 0 8.77676 0 9.99996H0Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.378 13.4783H0.621948C2.03488 17.2862 5.70031 20 9.99996 20C14.2996 20 17.965 17.2862 19.378 13.4783Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1272">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEstonia;
