import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCuracao = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1087)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M10 20C13.2813 20 16.1934 18.4196 18.0168 15.9785H1.98328C3.80671 18.4196 6.71878 20 10 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 11.1825 0.20582 12.3169 0.582656 13.3699H19.4173C19.7942 12.3169 20 11.1825 20 10Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M6.8447 6.41333L7.38427 8.07395H9.13052L7.71783 9.10044L8.2574 10.7611L6.8447 9.73474L5.43201 10.7611L5.97166 9.10044L4.55896 8.07395H6.30513L6.8447 6.41333Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M3.84589 4.67419L4.16964 5.6706H5.21742L4.3698 6.28646L4.69355 7.2829L3.84589 6.66705L2.99828 7.2829L3.32207 6.28646L2.47449 5.6706H3.52222L3.84589 4.67419Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1087">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCuracao;
