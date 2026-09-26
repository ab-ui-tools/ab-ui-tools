import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEastTimor = ({
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
    <g clipPath="url(#clip0_9419_1161)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M10 0C7.5517 0 5.30928 0.880352 3.57092 2.34117L14.3478 10L3.57092 17.6588C5.30928 19.1196 7.5517 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M2.77257 7.70923L4.29444 9.14954L6.1346 8.14704L5.23519 10.0396L6.7571 11.48L4.67921 11.2093L3.77968 13.1019L3.39503 11.042L1.31714 10.7713L3.15722 9.76896L2.77257 7.70923Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1161">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEastTimor;
