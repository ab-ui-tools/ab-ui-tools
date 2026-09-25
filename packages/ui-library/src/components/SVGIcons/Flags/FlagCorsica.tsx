import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCorsica = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_977)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FCFCFC' }}
      />
      <path
        d="M13.4819 8.47006C13.4819 6.35506 11.7674 4.64056 9.65239 4.64056C8.09169 4.64056 6.75001 5.57455 6.15345 6.91377L5.68114 8.62607L6.11591 9.06084L5.24634 10.8L6.11591 11.2347L5.68114 11.6695V12.1043L6.11591 12.539V13.4086L6.55067 13.8434L7.85501 13.4086C7.85501 13.4086 7.85501 13.8434 8.28978 14.2782C8.72454 14.7129 9.15938 15.5826 9.15938 15.5826C9.15938 15.5826 10.4637 16.0173 11.3333 14.713C12.2029 13.4087 13.0724 12.9738 13.0724 12.9738L12.2343 11.2975C13.0008 10.5974 13.4819 9.5901 13.4819 8.47006Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M13.794 9.93444C15.5608 9.63643 15.8551 6.17682 15.8551 6.17682H13.4203C14.6812 9.2203 13.3615 9.42502 13.3615 9.42502C13.1827 9.29201 6.78431 6.26092 6.5815 6.18385C6.53263 6.24924 6.35275 6.421 6.13408 6.95576C5.91537 7.49053 5.86169 7.97162 5.86169 7.97162C5.96412 8.03838 12.7592 10.4111 12.9388 10.4308C13.2952 10.6639 13.7338 11.3608 13.4887 13.4271L15.8322 12.7667C15.8323 12.7667 15.0369 10.6509 13.794 9.93444Z"
        style={{ fill: '#ACABB1' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_977">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCorsica;
