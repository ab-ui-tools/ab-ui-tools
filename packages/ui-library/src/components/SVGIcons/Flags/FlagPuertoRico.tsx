import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagPuertoRico = ({
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
    <g clipPath="url(#clip0_9419_1064)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99994 0C6.72838 0 3.82389 1.57121 1.99951 4H18.0004C16.176 1.57121 13.2715 0 9.99994 0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99994 20C13.2715 20 16.176 18.4288 18.0004 16H1.99951C3.82389 18.4288 6.72838 20 9.99994 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0 10C0 10.685 0.0690625 11.3538 0.200273 12H19.7998C19.931 11.3538 20 10.685 20 10C20 9.31504 19.9309 8.64621 19.7998 8H0.200273C0.0690625 8.64621 0 9.31504 0 10H0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M4.04725 7.39124L4.69471 9.38405H6.79026L5.09502 10.6158L5.74245 12.6087L4.04725 11.377L2.35198 12.6087L2.99956 10.6158L1.30432 9.38405H3.39971L4.04725 7.39124Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1064">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagPuertoRico;
