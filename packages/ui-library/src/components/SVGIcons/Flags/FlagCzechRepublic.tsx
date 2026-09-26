import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCzechRepublic = ({
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
    <g clipPath="url(#clip0_9419_1099)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.13048 10C9.13048 10 2.93481 17.0725 2.92896 17.0711C4.73856 18.8807 7.2386 20 10 20C15.5229 20 20 15.5228 20 10H9.13048Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z"
        style={{ fill: '#0052B4' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1099">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCzechRepublic;
