import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSlovakia = ({
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
    <g clipPath="url(#clip0_9419_1470)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 20C15.5228 20 20 15.5228 20 9.99997C20 8.77677 19.78 7.60501 19.378 6.52173H0.621992C0.220039 7.60501 0 8.77677 0 9.99997C0 15.5228 4.47719 20 10 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.58582 5.65222V10.6407C2.58582 13.4784 6.29289 14.3479 6.29289 14.3479C6.29289 14.3479 9.99992 13.4784 9.99992 10.6407V5.65222H2.58582Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M3.45544 5.65222V10.6407C3.45544 10.9739 3.52943 11.2885 3.67599 11.5834H8.90986C9.05642 11.2885 9.13041 10.9739 9.13041 10.6407V5.65222H3.45544Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M8.03207 9.1304H6.72778V8.26083H7.59735V7.39126H6.72778V6.52173H5.85821V7.39126H4.98868V8.26083H5.85821V9.1304H4.55383V9.99997H5.85821V10.8695H6.72778V9.99997H8.03207V9.1304Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M4.8622 12.7973C5.42255 13.1494 5.99826 13.3539 6.29298 13.4448C6.58771 13.3539 7.16341 13.1494 7.72376 12.7973C8.28884 12.4421 8.68497 12.0359 8.9099 11.5834C8.66181 11.4079 8.35912 11.3044 8.03212 11.3044C7.91306 11.3044 7.7974 11.3185 7.68619 11.3444C7.45052 10.8089 6.91556 10.4348 6.29302 10.4348C5.67048 10.4348 5.13548 10.8089 4.89986 11.3444C4.78865 11.3185 4.67294 11.3044 4.55392 11.3044C4.22693 11.3044 3.92423 11.4079 3.67615 11.5834C3.90095 12.0359 4.29708 12.4421 4.8622 12.7973Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1470">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSlovakia;
