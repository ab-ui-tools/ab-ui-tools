import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSeychelles = ({
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
    <g clipPath="url(#clip0_9419_1364)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M16.7503 2.62254C14.9714 0.993945 12.6018 0 9.99996 0C9.57402 0 9.1543 0.0268359 8.74234 0.0785156L3.91301 5.65219L0.316406 12.5051C0.54875 13.4059 0.903984 14.2573 1.3623 15.0409L9.99996 10L16.7503 2.62254Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M18.3254 15.5405L4.33447 18.2405C5.94498 19.3499 7.89647 20 9.99998 20C13.4735 20 16.5328 18.2288 18.3254 15.5405Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M16.7518 2.6239L1.36804 15.0507C1.77042 15.7369 2.25218 16.3709 2.80089 16.94L20 10C20 7.07976 18.748 4.4521 16.7518 2.6239Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0 9.99998C0 10.8651 0.109922 11.7045 0.316445 12.5051L8.74238 0.0784912C3.8132 0.697007 0 4.9031 0 9.99998Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1364">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSeychelles;
