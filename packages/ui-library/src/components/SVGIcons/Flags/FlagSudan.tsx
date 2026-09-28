import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSudan = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1657)">
      <path
        d="M0.992266 5.65216C0.356562 6.96685 0 8.44173 0 9.99998C0 11.5582 0.356562 13.0331 0.992266 14.3478L10 15.2174L19.0077 14.3478C19.6434 13.0331 20 11.5582 20 9.99998C20 8.44173 19.6434 6.96685 19.0077 5.65216L10 4.78259L0.992266 5.65216Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0.992676 14.3478C2.6101 17.6927 6.03545 20 10.0001 20C13.9647 20 17.39 17.6927 19.0074 14.3478H0.992676Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M0.992676 5.65219H19.0074C17.39 2.30723 13.9647 0 10.0001 0C6.03545 0 2.6101 2.30723 0.992676 5.65219Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        style={{ fill: '#496E2D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1657">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSudan;
