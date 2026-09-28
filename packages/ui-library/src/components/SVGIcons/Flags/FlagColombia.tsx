import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagColombia = ({
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
    <g clipPath="url(#clip0_9419_943)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10L10 10.8696L0 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M1.33813 15C3.06724 17.9889 6.29864 20 10 20C13.7014 20 16.9328 17.9889 18.6619 15L10 14.3478L1.33813 15Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M18.6619 15C19.5127 13.5291 20 11.8215 20 10H0C0 11.8215 0.487266 13.5291 1.33812 15H18.6619Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_943">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagColombia;
