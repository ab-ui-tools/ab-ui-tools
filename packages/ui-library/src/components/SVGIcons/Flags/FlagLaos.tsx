import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagLaos = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_2063)">
      <path
        d="M19.0078 5.65219C17.3903 2.30723 13.9647 0 10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219L10 6.52176L19.0078 5.65219Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0.99231 14.3478C2.60981 17.6928 6.03543 20 10 20C13.9647 20 17.3903 17.6928 19.0078 14.3478L10 13.4783L0.99231 14.3478Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M19.0077 5.65222H0.992266C0.356562 6.96687 0 8.44179 0 10C0 11.5583 0.356562 13.0332 0.992266 14.3478H19.0077C19.6435 13.0332 20 11.5583 20 10C20 8.44179 19.6435 6.96687 19.0077 5.65222Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99997 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.921 8.07899 13.4782 9.99997 13.4782Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2063">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagLaos;
