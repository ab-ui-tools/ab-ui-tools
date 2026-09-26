import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMongolia = ({
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
    <g clipPath="url(#clip0_9419_449)">
      <path
        d="M9.99996 20C11.2232 20 12.3949 19.78 13.4782 19.378L13.913 10L13.4782 0.621992C12.3949 0.220039 11.2232 0 9.99996 0C8.77676 0 7.605 0.220039 6.52172 0.621992L6.08691 10L6.52168 19.378C7.605 19.78 8.77676 20 9.99996 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M0 10C0 14.2997 2.71375 17.9651 6.52176 19.378V0.622009C2.71375 2.03494 0 5.70037 0 10Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M13.4783 0.622009V19.3781C17.2863 17.9651 20 14.2997 20 10C20 5.70037 17.2863 2.03494 13.4783 0.622009Z"
        style={{ fill: '#A2001D' }}
      />
      <path d="M4.78259 10H5.65216V13.4782H4.78259V10Z" style={{ fill: '#FFDA44' }} />
      <path d="M1.30432 10H2.17389V13.4782H1.30432V10Z" style={{ fill: '#FFDA44' }} />
      <path
        d="M3.47821 12.174C3.95846 12.174 4.34778 11.7846 4.34778 11.3044C4.34778 10.8241 3.95846 10.4348 3.47821 10.4348C2.99796 10.4348 2.60864 10.8241 2.60864 11.3044C2.60864 11.7846 2.99796 12.174 3.47821 12.174Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M3.47822 8.69564C3.71834 8.69564 3.91299 8.50099 3.91299 8.26088C3.91299 8.02076 3.71834 7.82611 3.47822 7.82611C3.23811 7.82611 3.04346 8.02076 3.04346 8.26088C3.04346 8.50099 3.23811 8.69564 3.47822 8.69564Z"
        style={{ fill: '#FFDA44' }}
      />
      <path d="M2.60864 12.6088H4.34778V13.4783H2.60864V12.6088Z" style={{ fill: '#FFDA44' }} />
      <path d="M2.60864 9.13043H4.34778V10H2.60864V9.13043Z" style={{ fill: '#FFDA44' }} />
      <path
        d="M3.47829 5.21741L3.78626 6.16506H4.78266L3.97661 6.75077L4.28434 7.69842L3.47829 7.11272L2.67227 7.69842L2.98001 6.75077L2.17395 6.16506H3.17036L3.47829 5.21741Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_449">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMongolia;
