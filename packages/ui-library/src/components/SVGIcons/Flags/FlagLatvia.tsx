import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagLatvia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_2069)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99999 0C5.37972 0 1.49198 3.13363 0.344482 7.39129H19.6555C18.508 3.13363 14.6203 0 9.99999 0Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M9.99999 20.0001C14.6203 20.0001 18.508 16.8664 19.6555 12.6088H0.344482C1.49198 16.8664 5.37972 20.0001 9.99999 20.0001Z"
        style={{ fill: '#A2001D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2069">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagLatvia;
