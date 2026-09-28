import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMalawi = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_197)">
      <path
        d="M0 10C0 11.2232 0.220039 12.3949 0.621992 13.4783L10 13.9131L19.378 13.4783C19.78 12.3949 20 11.2232 20 10C20 8.77682 19.78 7.6051 19.378 6.52178L10 6.08698L0.621992 6.52174C0.220039 7.6051 0 8.77682 0 10H0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M19.378 13.4783H0.621948C2.03488 17.2862 5.70031 20 9.99996 20C14.2996 20 17.965 17.2862 19.378 13.4783Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M12.9888 4.78261L11.7676 4.20816L12.4179 3.02539L11.0918 3.2791L10.9237 1.93933L9.99998 2.92468L9.07626 1.93933L8.90818 3.2791L7.58205 3.02539L8.2324 4.20816L7.01111 4.78261H12.9888Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_197">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMalawi;
