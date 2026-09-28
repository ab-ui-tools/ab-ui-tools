import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBelarus = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_385)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FCFCFC' }}
      />
      <path
        d="M4.13041 9.27535L3.04346 7.30336L4.13041 5.3623L5.21736 7.30336L4.13041 9.27535Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M1.95658 9.27535L0.869629 7.30336L1.95658 5.3623L3.04353 7.30336L1.95658 9.27535Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M4.13041 14.6377L3.04346 12.6657L4.13041 10.7246L5.21736 12.6657L4.13041 14.6377Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M1.95658 14.6377L0.869629 12.6657L1.95658 10.7246L3.04353 12.6657L1.95658 14.6377Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M5.21741 1.94107L4.90968 1.39154C4.35772 1.71857 3.84003 2.0972 3.36304 2.5208L4.13046 3.91302L5.21741 1.94107Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M4.13053 16.0869L3.35498 17.4719C3.83154 17.8961 4.34889 18.2753 4.90061 18.603L5.21752 18.028L4.13053 16.0869Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M6.08691 12.6087V19.2049C7.28883 19.7165 8.61121 20 9.99996 20C14.2996 20 17.965 17.2862 19.378 13.4782L6.08691 12.6087Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 10C20 4.47719 15.5228 0 9.99996 0C8.61133 0 7.28883 0.28332 6.08691 0.794844V13.4783H19.378V13.4782Z"
        style={{ fill: '#A2001D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_385">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBelarus;
