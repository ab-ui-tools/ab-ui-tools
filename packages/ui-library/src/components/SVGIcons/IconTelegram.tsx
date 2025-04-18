import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconTelegram = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className,
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <g id="Company=Telegram, Style=Gray, Background=None" clipPath="url(#clip0_697_1790)">
      <path
        id="Subtract"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4301 8.85893C11.263 9.3444 8.93026 10.3492 5.43201 11.8733C4.86395 12.0992 4.56638 12.3202 4.53929 12.5363C4.49351 12.9015 4.95084 13.0453 5.5736 13.2411C5.65831 13.2678 5.74608 13.2954 5.83606 13.3246C6.44876 13.5238 7.27295 13.7568 7.70141 13.766C8.09007 13.7744 8.52385 13.6142 9.00276 13.2853C12.2713 11.079 13.9585 9.96381 14.0644 9.93977C14.1392 9.92281 14.2427 9.90148 14.3129 9.96385C14.3831 10.0262 14.3762 10.1443 14.3687 10.176C14.3234 10.3691 12.5282 12.0381 11.5992 12.9018C11.3096 13.171 11.1042 13.362 11.0622 13.4056C10.9681 13.5033 10.8722 13.5958 10.7801 13.6846C10.2109 14.2333 9.78403 14.6448 10.8037 15.3168C11.2937 15.6397 11.6859 15.9067 12.077 16.1731C12.5043 16.4641 12.9304 16.7543 13.4817 17.1157C13.6222 17.2077 13.7563 17.3034 13.887 17.3965C14.3842 17.751 14.8309 18.0694 15.3827 18.0186C15.7034 17.9891 16.0346 17.6876 16.2028 16.7884C16.6003 14.6631 17.3818 10.0585 17.5623 8.16097C17.5782 7.99473 17.5583 7.78197 17.5423 7.68857C17.5263 7.59518 17.4929 7.46211 17.3715 7.3636C17.2277 7.24694 17.0058 7.22234 16.9065 7.22408C16.4551 7.23203 15.7627 7.47282 12.4301 8.85893Z"
        fill="#555555"
      />
    </g>
    <defs>
      <clipPath id="clip0_697_1790">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconTelegram;
