import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagTanzania = ({
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
    <g clipPath="url(#clip0_9419_1789)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M2.92892 17.0711C3.34841 17.4906 3.79599 17.8647 4.26548 18.1941L18.194 4.26552C17.8647 3.79603 17.4906 3.34845 17.0711 2.92896C16.6515 2.50947 16.204 2.13541 15.7345 1.80603L1.80603 15.7346C2.13533 16.204 2.50947 16.6516 2.92892 17.0711Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M2.92901 2.92896C-0.225758 6.0838 -0.831422 10.8217 1.11088 14.5851L14.5852 1.11087C10.8218 -0.83143 6.08381 -0.225727 2.92901 2.92896Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M17.071 17.0711C20.2258 13.9163 20.8314 9.17832 18.8892 5.41492L5.41492 18.8892C9.17824 20.8315 13.9162 20.2259 17.071 17.0711Z"
        style={{ fill: '#338AF3' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1789">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagTanzania;
