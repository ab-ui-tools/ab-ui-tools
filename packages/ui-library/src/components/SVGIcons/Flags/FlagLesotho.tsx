import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagLesotho = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_2080)">
      <path
        d="M0 10C0 11.5582 0.356523 13.0331 0.992266 14.3478L10 14.7826L19.0077 14.3479C19.6435 13.0331 20 11.5582 20 10C20 8.44182 19.6435 6.9669 19.0077 5.65221L10 5.21741L0.992266 5.65217C0.356523 6.9669 0 8.44182 0 10H0Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 20C13.9646 20 17.3903 17.6927 19.0078 14.3478H0.99231C2.60981 17.6927 6.03543 20 10 20Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M10.6522 9.78265V7.39136H9.34785V9.78265L7.77246 11.3581C8.23063 12.1081 9.05684 12.6087 10 12.6087C10.9432 12.6087 11.7694 12.1081 12.2276 11.3581L10.6522 9.78265Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2080">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagLesotho;
