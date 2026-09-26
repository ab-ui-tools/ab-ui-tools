import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCuba = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1078)">
      <path
        d="M9.99996 20C15.5228 20 19.9999 15.5228 19.9999 10C19.9999 4.4772 15.5228 6.10352e-05 9.99996 6.10352e-05C4.47713 6.10352e-05 0 4.4772 0 10C0 15.5228 4.47713 20 9.99996 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99994 0.00012207C6.72838 0.00012207 3.82393 1.57133 1.99951 4.00012H18.0003C16.176 1.57129 13.2715 0.00012207 9.99994 0.00012207Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99994 20C13.2715 20 16.176 18.4288 18.0004 16H1.99951C3.82389 18.4288 6.72838 20 9.99994 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M0 10.0001C0 10.6851 0.0690625 11.3539 0.200273 12.0001H19.7998C19.931 11.3539 20 10.6851 20 10.0001C20 9.31516 19.9309 8.64633 19.7998 8.00012H0.200273C0.0690625 8.64633 0 9.31516 0 10.0001Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M2.9289 2.92896C-0.976299 6.83415 -0.976299 13.1658 2.9289 17.0711C4.54269 15.4573 6.09472 13.9052 9.99995 10L2.9289 2.92896Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M4.04725 7.39136L4.69467 9.38413H6.79022L5.09502 10.6158L5.74245 12.6087L4.04725 11.377L2.35198 12.6087L2.99956 10.6158L1.30432 9.38413H3.39971L4.04725 7.39136Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1078">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCuba;
