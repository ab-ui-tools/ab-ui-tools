import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSlovenia = ({
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
    <g clipPath="url(#clip0_9419_1478)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M19.378 6.5218H8.69566V3.91309H3.47824V6.5218H0.621992C0.220039 7.60508 0 8.77683 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60508 19.378 6.5218Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M3.47827 6.5218V7.39133C3.47827 9.38825 6.08698 10.0001 6.08698 10.0001C6.08698 10.0001 8.69569 9.38825 8.69569 7.39133V6.5218L7.82612 7.39137L6.08698 6.08704L4.34784 7.39137L3.47827 6.5218Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1478">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSlovenia;
