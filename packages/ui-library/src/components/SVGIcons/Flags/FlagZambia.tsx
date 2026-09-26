import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagZambia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1213)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#496E2D' }}
      />
      <path d="M13.913 10H10V20C11.1689 20 12.2907 19.7988 13.3333 19.4302L13.913 10Z" style={{ fill: '#D80027' }} />
      <path
        d="M16.6666 17.4529C18.7122 15.6218 20 12.9614 20 10H16.0869L16.6666 17.4529Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M13.3333 10V19.4302C14.5753 18.9911 15.7048 18.3138 16.6666 17.4529V10H13.3333Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M18.4783 6.52179H15.8696C15.8696 6.04156 15.4802 5.65222 15 5.65222C14.5198 5.65222 14.1304 6.04156 14.1304 6.52179H11.5217C11.5217 7.00207 11.94 7.39136 12.4202 7.39136H12.3913C12.3913 7.87164 12.7806 8.26093 13.2609 8.26093C13.2609 8.74121 13.6501 9.1305 14.1304 9.1305H15.8696C16.3498 9.1305 16.7392 8.74121 16.7392 8.26093C17.2194 8.26093 17.6087 7.87164 17.6087 7.39136H17.5798C18.06 7.39132 18.4783 7.00203 18.4783 6.52179Z"
        style={{ fill: '#FF9811' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1213">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagZambia;
