import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEcuador = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1236)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10L10 10.8696L0 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M1.33813 15C3.06724 17.9889 6.29864 20 10 20C13.7014 20 16.9328 17.9889 18.6619 15L10 14.3478L1.33813 15Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M18.6619 15C19.5127 13.5291 20 11.8215 20 10H0C0 11.8215 0.487266 13.5291 1.33812 15H18.6619Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99997 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.921 8.07899 13.4782 9.99997 13.4782Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99996 12.1739C8.80124 12.1739 7.82605 11.1986 7.82605 9.99997V8.69563C7.82605 7.49692 8.80128 6.52173 9.99996 6.52173C11.1986 6.52173 12.1739 7.49696 12.1739 8.69563V9.99997C12.1739 11.1987 11.1987 12.1739 9.99996 12.1739Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M13.4783 4.78266H10.8696C10.8696 4.30242 10.4802 3.91309 10 3.91309C9.51977 3.91309 9.13044 4.30242 9.13044 4.78266H6.52173C6.52173 5.26293 6.94005 5.65223 7.42024 5.65223H7.3913C7.3913 6.1325 7.7806 6.5218 8.26087 6.5218C8.26087 7.00207 8.65017 7.39137 9.13044 7.39137H10.8696C11.3499 7.39137 11.7391 7.00207 11.7391 6.5218C12.2194 6.5218 12.6087 6.1325 12.6087 5.65223H12.5798C13.06 5.65223 13.4783 5.26289 13.4783 4.78266Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1236">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEcuador;
