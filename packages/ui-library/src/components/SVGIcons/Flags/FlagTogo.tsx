import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagTogo = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1816)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99995 0C9.99269 7.8125e-05 9.56519 4 9.56519 4H18.0004C16.176 1.57121 13.2715 0 9.99995 0Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M9.99994 20C13.2715 20 16.176 18.4288 18.0004 16H1.99951C3.82389 18.4288 6.72838 20 9.99994 20Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M19.7997 8H9.56519L9.99995 12H19.7997C19.931 11.3538 20 10.685 20 10C20 9.31504 19.9309 8.64621 19.7997 8Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M10 12C10 9.91305 10 2.34781 10 0C4.47719 0 0 4.47719 0 10C0 10.685 0.0690625 11.3538 0.200234 12H10Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M5.51779 4.78259L6.16529 6.77537H8.2608L6.56561 8.00712L7.21303 9.99998L5.51779 8.76833L3.82256 9.99998L4.4701 8.00712L2.7749 6.77537H4.87033L5.51779 4.78259Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1816">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagTogo;
