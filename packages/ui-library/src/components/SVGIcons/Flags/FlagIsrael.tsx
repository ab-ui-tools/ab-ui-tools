import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagIsrael = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1863)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M13.7654 7.82613H11.2552L10.0001 5.65222L8.74505 7.82613H6.23474L7.48998 10L6.23474 12.1739H8.74505L10.0001 14.3478L11.2552 12.1739H13.7654L12.5102 10L13.7654 7.82613ZM11.5421 10L10.7711 11.3355H9.22916L8.4581 10L9.22912 8.66457H10.7711L11.5421 10ZM10.0001 7.32906L10.287 7.82609H9.71322L10.0001 7.32906ZM7.68705 8.66457H8.26095L7.974 9.1616L7.68705 8.66457ZM7.68705 11.3355L7.97404 10.8385L8.26099 11.3355H7.68705ZM10.0001 12.671L9.71318 12.1739H10.287L10.0001 12.671ZM12.3131 11.3355H11.7392L12.0262 10.8385L12.3131 11.3355ZM11.7392 8.66457H12.3131L12.0262 9.1616L11.7392 8.66457Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M16.2249 2.17395H3.77516C2.86254 2.90083 2.07988 3.78372 1.46777 4.78266H18.5323C17.9202 3.78375 17.1375 2.90083 16.2249 2.17395Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M3.77516 17.8261H16.2249C17.1375 17.0992 17.9202 16.2164 18.5323 15.2174H1.46777C2.07992 16.2163 2.86258 17.0992 3.77516 17.8261Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1863">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagIsrael;
