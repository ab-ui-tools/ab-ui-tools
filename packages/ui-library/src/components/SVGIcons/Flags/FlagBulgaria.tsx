import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBulgaria = ({
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
    <g clipPath="url(#clip0_9419_636)">
      <path
        d="M20 10C20 8.77682 19.78 7.60506 19.378 6.52178L10 6.08698L0.621992 6.52174C0.220039 7.60506 0 8.77682 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 13.9131L19.378 13.4783C19.78 12.395 20 11.2232 20 10Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M10.0001 20C14.2997 20 17.9652 17.2863 19.3781 13.4783H0.62207C2.035 17.2863 5.70043 20 10.0001 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0.62207 6.52176H19.3781C17.9652 2.71375 14.2997 0 10.0001 0C5.70043 0 2.035 2.71375 0.62207 6.52176Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_636">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBulgaria;
