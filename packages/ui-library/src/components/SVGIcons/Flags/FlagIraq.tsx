import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagIraq = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1848)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M7.60874 9.34776C7.60327 9.34776 7.59792 9.34811 7.59245 9.34819V9.34776H5.68085C5.77776 8.97331 6.11753 8.69557 6.52179 8.69557V7.39124C5.32308 7.39124 4.34788 8.36647 4.34788 9.56514V10.6304V10.6521H7.59245H7.60874C7.72862 10.6521 7.82612 10.7497 7.82612 10.8695V11.3043H3.47827V12.6086H9.13046V10.8695C9.13046 10.0304 8.4478 9.34776 7.60874 9.34776Z"
        style={{ fill: '#496E2D' }}
      />
      <path d="M10.8696 11.3043V7.39124H9.56531V12.6087H11.7392V11.3043H10.8696Z" style={{ fill: '#496E2D' }} />
      <path
        d="M15.2174 11.3043V7.39124H13.9131V11.3043H13.4783V9.99999H12.174V12.6087H16.087V11.3043H15.2174Z"
        style={{ fill: '#496E2D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1848">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagIraq;
