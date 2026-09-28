import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMicronesia = ({
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
    <g clipPath="url(#clip0_9419_356)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M9.9999 4.34784L10.4315 5.67643H11.8286L10.6984 6.49757L11.1301 7.82612L9.9999 7.00503L8.8697 7.82612L9.30146 6.49757L8.17126 5.67643H9.56826L9.9999 4.34784Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M4.34778 10.0001L5.67637 9.56836V8.17133L6.49751 9.30156L7.82606 8.86988L7.00497 10.0001L7.82606 11.1302L6.49751 10.6984L5.67637 11.8286V10.4317L4.34778 10.0001Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99998 15.6522L9.5683 14.3236H8.17126L9.3015 13.5025L8.86982 12.174L9.99998 12.995L11.1301 12.174L10.6984 13.5025L11.8286 14.3236H10.4316L9.99998 15.6522Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M15.6521 9.99996L14.3235 10.4316V11.8286L13.5024 10.6984L12.1738 11.1301L12.9949 9.99996L12.1738 8.86984L13.5024 9.30156L14.3235 8.17133V9.56832L15.6521 9.99996Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_356">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMicronesia;
