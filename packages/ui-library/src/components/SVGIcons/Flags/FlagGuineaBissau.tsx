import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGuineaBissau = ({
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
    <g clipPath="url(#clip0_9419_1617)">
      <path
        d="M9.99997 0C9.09739 0 8.22302 0.120313 7.39126 0.344492L6.52173 10L7.3913 19.6555C8.22302 19.8797 9.09739 20 9.99997 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 9.99997 0Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M6.52173 10L7.3913 19.6555C8.22302 19.8797 9.09739 20 9.99997 20C15.5228 20 20 15.5228 20 10H6.52173Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M0 10C0 13.7905 2.10898 17.0881 5.21738 18.7841V1.21594C2.10898 2.91196 0 6.20961 0 10Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M3.7787 7.39124L4.42616 9.38405H6.5217L4.82647 10.6158L5.47389 12.6087L3.7787 11.377L2.08342 12.6087L2.731 10.6158L1.03577 9.38405H3.1312L3.7787 7.39124Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1617">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGuineaBissau;
