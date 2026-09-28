import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagIndia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1755)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M10 20C13.9646 20 17.3903 17.6927 19.0078 14.3478H0.99231C2.60981 17.6927 6.03543 20 10 20Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M9.99997 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.921 8.07899 13.4782 9.99997 13.4782Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99996 12.1739C11.2006 12.1739 12.1739 11.2006 12.1739 9.99996C12.1739 8.79934 11.2006 7.82605 9.99996 7.82605C8.79934 7.82605 7.82605 8.79934 7.82605 9.99996C7.82605 11.2006 8.79934 12.1739 9.99996 12.1739Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 7.31738L10.6707 8.8384L12.3232 8.65867L11.3413 9.99996L12.3232 11.3412L10.6707 11.1615L10 12.6825L9.32938 11.1615L7.67688 11.3412L8.65876 9.99996L7.67688 8.65867L9.32938 8.8384L10 7.31738Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1755">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagIndia;
