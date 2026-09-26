import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagDjibouti = ({
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
    <g clipPath="url(#clip0_9419_1117)">
      <path
        d="M9.13048 10.8696C9.13048 10.8696 2.93481 2.92754 2.92896 2.92895C4.73856 1.1193 7.2386 0 10 0C15.5229 0 20 4.47719 20 10L9.13048 10.8696Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M9.13048 10C9.13048 10 2.93481 17.0725 2.92896 17.0711C4.73856 18.8807 7.2386 20 10 20C15.5229 20 20 15.5228 20 10H9.13048Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M4.04725 7.39124L4.69471 9.38405H6.79026L5.09502 10.6158L5.74245 12.6087L4.04725 11.377L2.35198 12.6087L2.99956 10.6158L1.30432 9.38405H3.39971L4.04725 7.39124Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1117">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagDjibouti;
