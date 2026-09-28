import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSolomonIslands = ({
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
    <g clipPath="url(#clip0_9419_1483)">
      <path
        d="M17.0713 17.0713C20.8218 13.3209 20.9698 7.33323 17.5172 3.40515L9.99998 9.99994L3.40515 17.5172C7.33323 20.9698 13.3209 20.8218 17.0713 17.0713Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M2.92865 2.92867C6.67907 -0.821755 12.6668 -0.969841 16.5948 2.48285L9.99996 10.0001L2.48287 16.5949C-0.969861 12.6668 -0.821736 6.67909 2.92865 2.92867Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M16.5948 2.48279L2.48279 16.5948C2.62544 16.7571 2.77357 16.9163 2.92861 17.0713C3.08361 17.2263 3.24286 17.3744 3.40521 17.5171L17.5171 3.40513C17.3744 3.24279 17.2263 3.08357 17.0712 2.92853C16.9163 2.77361 16.7571 2.62544 16.5948 2.48279Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M4.21328 3.47791L4.42918 4.14224H5.12766L4.56258 4.55275L4.7784 5.21708L4.21328 4.8065L3.64817 5.21708L3.86407 4.55275L3.29895 4.14224H3.99746L4.21328 3.47791Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M7.78116 3.47791L7.99705 4.14224H8.69549L8.13041 4.55275L8.34627 5.21708L7.78116 4.8065L7.21604 5.21708L7.43194 4.55275L6.86682 4.14224H7.5653L7.78116 3.47791Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M4.21328 6.9563L4.42918 7.62063H5.12766L4.56258 8.03118L4.7784 8.69551L4.21328 8.28493L3.64817 8.69551L3.86407 8.03118L3.29895 7.62063H3.99746L4.21328 6.9563Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M7.78116 6.9563L7.99705 7.62063H8.69549L8.13041 8.03118L8.34627 8.69551L7.78116 8.28493L7.21604 8.69551L7.43194 8.03118L6.86682 7.62063H7.5653L7.78116 6.9563Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.99726 5.21704L6.21316 5.88138H6.91159L6.34652 6.29192L6.56237 6.95626L5.99726 6.54567L5.43214 6.95626L5.648 6.29192L5.08289 5.88138H5.7814L5.99726 5.21704Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1483">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSolomonIslands;
