import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagFinland = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1417)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M19.9154 8.69564H7.82613H7.82609V0.237671C6.90195 0.442593 6.02582 0.774741 5.21738 1.21587V8.69556V8.6956H0.0846484C0.0289844 9.12259 0 9.55791 0 9.99998C0 10.442 0.0289844 10.8774 0.0846484 11.3043H5.21734H5.21738V18.784C6.02582 19.2251 6.90195 19.5574 7.82609 19.7622V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.442 20 9.99998C20 9.55791 19.9709 9.12259 19.9154 8.69564Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1417">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagFinland;
