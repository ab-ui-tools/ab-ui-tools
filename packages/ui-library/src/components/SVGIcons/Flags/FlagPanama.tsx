import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagPanama = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_898)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0 10C0 15.5228 4.47719 20 10 20C10 16.1971 10 10 10 10C10 10 3.47824 10 0 10Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M10 0C15.5228 0 20 4.47719 20 10C16.1971 10 10 10 10 10C10 10 10 3.47824 10 0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M5.95269 3.47827L6.60022 5.47116H8.69565L7.00042 6.7028L7.64792 8.69569L5.95269 7.46401L4.25745 8.69569L4.90495 6.7028L3.20972 5.47116H5.30515L5.95269 3.47827Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M14.0473 11.3043L14.6948 13.2972H16.7903L15.095 14.5289L15.7425 16.5217L14.0473 15.2901L12.3521 16.5217L12.9996 14.5289L11.3043 13.2972H13.3998L14.0473 11.3043Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_898">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagPanama;
