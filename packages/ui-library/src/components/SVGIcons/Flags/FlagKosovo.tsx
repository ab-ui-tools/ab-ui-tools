import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagKosovo = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_2039)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M4.39257 6.08704L4.60843 6.75141H5.30687L4.74183 7.16192L4.95765 7.82618L4.39257 7.41567L3.82745 7.82618L4.04335 7.16192L3.47827 6.75141H4.17667L4.39257 6.08704Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M6.56648 5.43494L6.78234 6.09927H7.48078L6.91574 6.50978L7.13156 7.17404L6.56648 6.76353L6.0014 7.17404L6.21726 6.50978L5.65222 6.09927H6.35066L6.56648 5.43494Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M8.74043 4.78271L8.95629 5.44705H9.65473L9.08969 5.8576L9.30551 6.52186L8.74043 6.11131L8.17535 6.52186L8.39121 5.8576L7.82617 5.44705H8.52461L8.74043 4.78271Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M15.6075 6.08704L15.3917 6.75141H14.6932L15.2583 7.16192L15.0425 7.82618L15.6075 7.41567L16.1727 7.82618L15.9568 7.16192L16.5218 6.75141H15.8234L15.6075 6.08704Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M13.4336 5.43494L13.2177 6.09927H12.5193L13.0844 6.50978L12.8685 7.17404L13.4336 6.76353L13.9987 7.17404L13.7828 6.50978L14.3478 6.09927H13.6494L13.4336 5.43494Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M11.2596 4.78271L11.0438 5.44705H10.3453L10.9104 5.8576L10.6946 6.52186L11.2596 6.11131L11.8247 6.52186L11.6089 5.8576L12.1739 5.44705H11.4755L11.2596 4.78271Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M11.7392 10.4348L10 8.26086L9.13045 8.69563V9.5652L7.82611 10.4348H6.95654V11.5582C8.23107 12.0743 9.13045 13.3231 9.13045 14.7826H10V13.9131L10.8696 13.0435L11.7392 13.9131L12.6087 13.0435V12.1739L13.4783 10.8696L11.7392 10.4348Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2039">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagKosovo;
