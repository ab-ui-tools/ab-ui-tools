import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSouthSudan = ({
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
    <g clipPath="url(#clip0_9419_1536)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M19.2198 6.12316C17.7054 2.52586 14.1479 0 9.99994 0C7.23846 0 4.73873 1.11949 2.9292 2.92926L5.4335 6.12316H19.2198Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M5.46189 13.8406L2.9292 17.0707C4.73873 18.8805 7.23846 20 9.99994 20C14.1619 20 17.7295 17.4572 19.2353 13.8406H5.46189Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M2.17395 7.3551V12.6087H19.6556C19.8799 11.777 20 10.9026 20 10C20 9.08432 19.8767 8.1976 19.6461 7.3551H2.17395Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M3.25725 7.51379L4.47775 9.21696L6.47494 8.58239L5.23232 10.2696L6.45283 11.9729L4.46424 11.3124L3.22158 12.9996L3.23525 10.9042L1.24658 10.2437L3.24361 9.60914L3.25725 7.51379Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1536">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSouthSudan;
