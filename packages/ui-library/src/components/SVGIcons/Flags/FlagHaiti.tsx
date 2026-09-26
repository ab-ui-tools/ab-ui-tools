import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagHaiti = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1708)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 4.47719 10 0 10 0C10 0 20 4.47719 20 10Z"
        style={{ fill: '#A2001D' }}
      />
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" style={{ fill: '#0052B4' }} />
      <path d="M13.4782 12.6087L9.99997 12.1739L6.52173 12.6087V7.39124H13.4782V12.6087Z" style={{ fill: '#F0F0F0' }} />
      <path
        d="M10 12.174C10.9605 12.174 11.7391 11.3953 11.7391 10.4348C11.7391 9.47432 10.9605 8.69568 10 8.69568C9.0395 8.69568 8.26086 9.47432 8.26086 10.4348C8.26086 11.3953 9.0395 12.174 10 12.174Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99994 11.3043C10.4802 11.3043 10.8695 10.915 10.8695 10.4348C10.8695 9.95451 10.4802 9.56519 9.99994 9.56519C9.51969 9.56519 9.13037 9.95451 9.13037 10.4348C9.13037 10.915 9.51969 11.3043 9.99994 11.3043Z"
        style={{ fill: '#A2001D' }}
      />
      <path d="M8.69568 8.26086H11.3044L10 9.56524L8.69568 8.26086Z" style={{ fill: '#6DA544' }} />
      <path d="M9.56519 9.13037H10.4348V11.7391H9.56519V9.13037Z" style={{ fill: '#FFDA44' }} />
      <path d="M11.3913 11.4783H8.6086L6.52173 12.6087H13.4782L11.3913 11.4783Z" style={{ fill: '#6DA544' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_1708">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagHaiti;
