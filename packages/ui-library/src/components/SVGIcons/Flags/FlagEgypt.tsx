import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEgypt = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1243)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M13.4783 8.91303H10.8696C10.8696 8.43279 10.4802 8.04346 10 8.04346C9.51977 8.04346 9.13044 8.43279 9.13044 8.91303H6.52173C6.52173 9.3933 6.94005 9.7826 7.42028 9.7826H7.3913C7.3913 10.2629 7.7806 10.6522 8.26087 10.6522C8.26087 11.1324 8.65017 11.5217 9.13044 11.5217H10.8696C11.3499 11.5217 11.7391 11.1324 11.7391 10.6522C12.2194 10.6522 12.6087 10.2629 12.6087 9.7826H12.5798C13.06 9.7826 13.4783 9.3933 13.4783 8.91303Z"
        style={{ fill: '#FF9811' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1243">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEgypt;
