import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMali = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_295)">
      <path
        d="M13.4783 0.621992C12.395 0.220039 11.2232 0 10 0C8.77683 0 7.60511 0.220039 6.52179 0.621992L5.65222 10L6.52179 19.378C7.60511 19.78 8.77683 20 10 20C11.2232 20 12.395 19.78 13.4783 19.378L14.3478 10L13.4783 0.621992Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M20 9.99998C20 5.70037 17.2863 2.0349 13.4783 0.622009V19.3781C17.2863 17.9651 20 14.2997 20 9.99998Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0 9.99998C0 14.2997 2.71375 17.9651 6.52176 19.378V0.622009C2.71375 2.0349 0 5.70037 0 9.99998Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_295">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMali;
