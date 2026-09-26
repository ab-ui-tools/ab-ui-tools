import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagOman = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_862)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0 9.99998C0 13.7904 2.10898 17.0881 5.21738 18.7841V1.21588C2.10898 2.9119 0 6.20955 0 9.99998Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60501 19.378 6.52173H0.622031C0.220039 7.60501 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.622031 13.4782L10 14.3478L19.378 13.4782Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10 20C14.2997 20 17.9651 17.2863 19.3781 13.4783H0.62207C2.03496 17.2863 5.70043 20 10 20Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M0 9.99999C0 14.6203 3.13363 18.508 7.39129 19.6555V0.344482C3.13363 1.49198 0 5.37972 0 9.99999Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.11783 4.40058L5.19553 3.47827L4.58068 4.09319L3.96584 3.47827L3.04354 4.40058L3.65842 5.01546L3.04346 5.63038L3.96576 6.55269L4.58064 5.93776L5.19553 6.55269L6.11783 5.63038L5.50295 5.01546L6.11783 4.40058Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_862">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagOman;
