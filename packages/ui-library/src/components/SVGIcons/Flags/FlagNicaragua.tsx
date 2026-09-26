import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNicaragua = ({
  size,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_678)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M10 20C13.9646 20 17.3903 17.6928 19.0078 14.3478H0.99231C2.60981 17.6928 6.03543 20 10 20Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M10 6.95654C8.31916 6.95654 6.95654 8.31916 6.95654 10C6.95654 11.6809 8.31916 13.0435 10 13.0435C11.6809 13.0435 13.0435 11.6809 13.0435 10C13.0435 8.31916 11.6809 6.95654 10 6.95654ZM10 11.7392C9.03955 11.7392 8.26088 10.9606 8.26088 10C8.26088 9.03947 9.03951 8.26088 10 8.26088C10.9605 8.26088 11.7392 9.03947 11.7392 10C11.7392 10.9606 10.9605 11.7392 10 11.7392Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M11.5062 10.4348L10 10L8.49385 10.4348L7.99182 11.3043H12.0082L11.5062 10.4348Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.99995 7.82611L8.99585 9.56525L9.99995 10L11.0041 9.56525L9.99995 7.82611Z"
        style={{ fill: '#338AF3' }}
      />
      <path d="M8.49377 10.4348H11.5061L11.004 9.56525H8.99584L8.49377 10.4348Z" style={{ fill: '#6DA544' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_678">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNicaragua;
