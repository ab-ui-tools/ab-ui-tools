import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGuam = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1595)">
      <path
        d="M4.36377 18.2608C5.96861 19.3579 7.90924 19.9999 9.99998 19.9999C12.0907 19.9999 14.0313 19.3579 15.6362 18.2608L9.99998 17.3912L4.36377 18.2608Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.6362 1.73914C14.0313 0.64207 12.0907 0 9.99998 0C7.90924 0 5.96861 0.64207 4.36377 1.73914L9.99998 2.60871L15.6362 1.73914Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M20 9.99999C20 6.69101 18.0189 3.36796 15.6362 1.73914H4.36379C1.7293 3.54007 0 6.56796 0 9.99999C0 13.4321 1.7293 16.4599 4.36379 18.2609H15.6362C18.2707 16.4599 20 13.4321 20 9.99999Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.43406 16.3124C9.29742 16.1952 6.08691 13.4042 6.08691 9.99998C6.08691 6.59572 9.29738 3.80474 9.43406 3.68759L9.99996 3.20251L10.5659 3.68755C10.7025 3.80474 13.913 6.59568 13.913 9.99998C13.913 13.4043 10.7025 16.1952 10.5659 16.3124L9.99996 16.7974L9.43406 16.3124Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M13.0435 9.99997C13.0435 6.95649 10 4.34778 10 4.34778C10 4.34778 6.95654 6.95657 6.95654 9.99997C6.95654 10.931 7.24158 11.8212 7.63697 12.6087H12.3631C12.7585 11.8212 13.0435 10.931 13.0435 9.99997Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M13.0435 10C13.0435 10.9311 12.7585 11.8212 12.3631 12.6087L10 13.0435L7.63697 12.6087C7.24158 11.8213 6.95654 10.9311 6.95654 10H13.0435Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M10 15.6522C10 15.6522 11.4659 14.3953 12.3631 12.6088H7.63696C8.53407 14.3953 10 15.6522 10 15.6522Z"
        style={{ fill: '#FFDA44' }}
      />
      <path d="M8.04346 8.26086H11.9565L9.99998 10.2174L8.04346 8.26086Z" style={{ fill: '#6DA544' }} />
      <path d="M9.34778 9.56519H10.6521V13.4782H9.34778V9.56519Z" style={{ fill: '#A2001D' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_1595">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGuam;
