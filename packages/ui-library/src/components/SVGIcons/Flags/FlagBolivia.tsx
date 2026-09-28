import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBolivia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_435)">
      <path
        d="M20 10C20 8.77682 19.78 7.60506 19.378 6.52178L10 6.08698L0.621992 6.52174C0.22 7.60506 0 8.77682 0 10C0 11.2232 0.22 12.395 0.621992 13.4783L10 13.9131L19.378 13.4783C19.78 12.395 20 11.2232 20 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_435">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBolivia;
