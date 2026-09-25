import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagVirginIslands = ({
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
    <g clipPath="url(#clip0_9419_2171)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FCFCFC' }}
      />
      <path
        d="M11.6983 6.9862C11.6983 6.04823 10.938 5.28784 9.99995 5.28784C9.06194 5.28784 8.30155 6.04823 8.30155 6.9862H4.56519C4.56519 7.90968 5.36964 8.65839 6.29311 8.65839H6.23749C6.23749 9.58194 6.98608 10.3307 7.90972 10.3307C7.90972 11.1484 8.49698 11.8278 9.27257 11.9731L9.26823 11.9828H10.7317L10.7274 11.9731C11.503 11.8278 12.0902 11.1483 12.0902 10.3307C13.0138 10.3307 13.7625 9.58194 13.7625 8.65839H13.7067C14.6302 8.65839 15.4347 7.90968 15.4347 6.9862H11.6983Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.25336 11.8096L8.20032 14.187C8.75594 14.4129 9.36325 14.5384 10 14.5384C10.6368 14.5384 11.2441 14.4129 11.7997 14.187L10.7466 11.8096H9.25336Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M7.82605 7.82141V10.7468C7.82605 12.4108 9.99996 12.9207 9.99996 12.9207C9.99996 12.9207 12.1739 12.4108 12.1739 10.7468V7.82141H7.82605Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.42492 10.0704L3.60066 13.3589L4.76417 10.0704H5.65214L3.95582 14.4182H3.24546L1.53699 10.0704H2.42492Z"
        style={{ fill: '#338AF3' }}
      />
      <path d="M16.0869 14.4182V10.0704H16.932V14.4182H16.0869Z" style={{ fill: '#338AF3' }} />
      <path
        d="M8.69568 8.76611V12.3112C8.99455 12.5312 9.31611 12.6824 9.56525 12.7793V8.76611H8.69568Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.3044 8.76611V12.3112C11.0055 12.5312 10.684 12.6824 10.4348 12.7793V8.76611H11.3044Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M7.82605 7.82129H12.1739V9.20082H7.82605V7.82129Z" style={{ fill: '#0052B4' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_2171">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagVirginIslands;
