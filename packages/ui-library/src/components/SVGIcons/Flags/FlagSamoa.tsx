import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSamoa = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1219)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C3.43477 6.56523 6.34781 3.65219 10 0C15.5228 0 20 4.47719 20 10Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M10 10C10 4.47719 10 3.82609 10 0C4.47719 0 0 4.47719 0 10H10Z" style={{ fill: '#0052B4' }} />
      <path
        d="M8.00996 6.52185L8.17188 7.02009H8.6957L8.27188 7.32794L8.43379 7.82619L8.00996 7.51826L7.58613 7.82619L7.74805 7.32794L7.32422 7.02009H7.84805L8.00996 6.52185Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.37885 2.60876L5.64866 3.43919H6.52178L5.81538 3.95228L6.08526 4.78267L5.37885 4.26943L4.67249 4.78267L4.94233 3.95228L4.23596 3.43919H5.10901L5.37885 2.60876Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M7.98749 3.47827L8.2573 4.30874H9.13039L8.42402 4.82183L8.69382 5.65222L7.98749 5.13898L7.28113 5.65222L7.55097 4.82183L6.8446 4.30874H7.71765L7.98749 3.47827Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.92548 6.95654L6.19533 7.78697H7.06837L6.36201 8.30006L6.63185 9.13045L5.92548 8.61725L5.21912 9.13045L5.48896 8.30006L4.78259 7.78697H5.65568L5.92548 6.95654Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M3.63968 4.78271L3.90952 5.61314H4.78261L4.0762 6.12623L4.34605 6.95662L3.63968 6.44342L2.93335 6.95662L3.20315 6.12623L2.49683 5.61314H3.36987L3.63968 4.78271Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1219">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSamoa;
