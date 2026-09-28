import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSaoTomeAndPrincipe = ({
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
    <g clipPath="url(#clip0_9419_1309)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M6.08689 6.52176H19.3779C17.965 2.71375 14.2996 0 9.99994 0C7.23846 0 4.73873 1.11949 2.9292 2.92926L6.08689 6.52176Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M6.08689 13.4783H19.3779C17.965 17.2863 14.2996 20 9.99994 20C7.23846 20 4.73873 18.8805 2.9292 17.0708L6.08689 13.4783Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M12.6983 8.26086L13.1299 9.58946H14.5269L13.3967 10.4106L13.8284 11.7391L12.6983 10.918L11.5681 11.7391L11.9997 10.4106L10.8696 9.58946H12.2666L12.6983 8.26086Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M17.0461 8.26086L17.4777 9.58946H18.8747L17.7446 10.4106L18.1762 11.7391L17.0461 10.918L15.9159 11.7391L16.3476 10.4106L15.2174 9.58946H16.6144L17.0461 8.26086Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1309">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSaoTomeAndPrincipe;
