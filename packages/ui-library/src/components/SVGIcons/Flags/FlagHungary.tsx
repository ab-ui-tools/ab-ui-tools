import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagHungary = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1743)">
      <path
        d="M0.621992 6.52179C0.220039 7.60515 0 8.77683 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 14.3478L19.378 13.4783C19.78 12.395 20 11.2232 20 10C20 8.77683 19.78 7.60515 19.378 6.52179L10 5.65222L0.621992 6.52179Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 0C5.70043 0 2.03496 2.71375 0.62207 6.52176H19.3781C17.9651 2.71375 14.2997 0 10 0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.3781 13.4783H0.62207C2.03496 17.2863 5.70043 20 10 20Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1743">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagHungary;
