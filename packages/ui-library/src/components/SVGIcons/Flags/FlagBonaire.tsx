import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBonaire = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_518)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.929 2.92897C0.785834 5.07213 -0.180846 7.94612 0.0282558 10.7487L10.7487 0.0282653C7.94611 -0.180875 5.07216 0.785805 2.929 2.92897Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M3.57068 17.659C7.49962 20.9645 13.373 20.769 17.0711 17.071C20.7691 13.373 20.9646 7.49959 17.659 3.57068L3.57068 17.659Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.96438 9.59721L10.8261 9.13041L9.96438 8.66362C9.76316 7.35655 8.73043 6.32377 7.42336 6.1226L6.95652 5.2608L6.48973 6.12256C5.1827 6.32373 4.14996 7.35651 3.94871 8.66358L3.08691 9.13041L3.94867 9.59721C4.14988 10.9043 5.18262 11.9371 6.48969 12.1382L6.95652 13L7.42332 12.1383C8.73043 11.9371 9.76316 10.9043 9.96438 9.59721ZM6.95656 10.8696C5.99605 10.8696 5.21742 10.091 5.21742 9.13041C5.21742 8.16987 5.99602 7.39127 6.95656 7.39127C7.91711 7.39127 8.6957 8.16987 8.6957 9.13041C8.6957 10.091 7.91707 10.8696 6.95656 10.8696Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M6.95648 7.82611L7.333 8.47826H8.08608L7.70952 9.13045L8.08608 9.78263H7.333L6.95648 10.4348L6.57995 9.78263H5.8269L6.20343 9.13045L5.8269 8.47826H6.57995L6.95648 7.82611Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_518">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBonaire;
