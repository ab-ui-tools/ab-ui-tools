import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSpain = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1543)">
      <path
        d="M0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60511 19.378 6.52179L10 5.65222L0.621992 6.52179C0.220039 7.60511 0 8.77683 0 10H0Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M19.378 6.52176C17.965 2.71379 14.2996 0 9.99996 0C5.70031 0 2.03488 2.71379 0.621948 6.52176H19.378Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0.621948 13.4783C2.03488 17.2862 5.70031 20 9.99996 20C14.2996 20 17.965 17.2862 19.378 13.4783H0.621948Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1543">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSpain;
