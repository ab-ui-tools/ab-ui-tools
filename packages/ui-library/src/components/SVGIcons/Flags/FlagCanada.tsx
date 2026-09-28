import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCanada = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_753)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M20 9.99998C20 6.03537 17.6927 2.60975 14.3478 0.992249V19.0077C17.6927 17.3902 20 13.9646 20 9.99998Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0 9.99998C0 13.9646 2.30723 17.3902 5.65219 19.0077V0.992249C2.30723 2.60975 0 6.03537 0 9.99998Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.7391 11.3043L13.4782 10.4347L12.6087 9.99996V9.13039L10.8695 9.99996L11.7391 8.26082H10.8695L9.99997 6.95648L9.1304 8.26082H8.26083L9.1304 9.99996L7.39126 9.13039V9.99996L6.52173 10.4347L8.26083 11.3043L7.82606 12.1739H9.5652V13.4782H10.4347V12.1739H12.1739L11.7391 11.3043Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_753">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCanada;
