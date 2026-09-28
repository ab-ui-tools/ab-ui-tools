import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBenin = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_410)">
      <path
        d="M6.52173 9.13043L7.3913 19.6555C8.22306 19.8797 9.09735 20 9.99997 20C15.5228 20 20 15.5228 20 10L6.52173 9.13043Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.52173 10L7.39126 0.344492C8.22306 0.120313 9.09735 0 9.99997 0C15.5228 0 20 4.47719 20 10H6.52173Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_410">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBenin;
