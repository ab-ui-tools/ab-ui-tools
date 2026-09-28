import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMauritania = ({
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
    <g clipPath="url(#clip0_9419_320)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M9.99997 11.5528C8.33489 11.5528 6.94388 10.3826 6.60259 8.81986C6.55017 9.0601 6.52173 9.3092 6.52173 9.56521C6.52173 11.4863 8.07895 13.0435 9.99997 13.0435C11.921 13.0435 13.4782 11.4862 13.4782 9.56521C13.4782 9.3092 13.4498 9.0601 13.3974 8.81982C13.0561 10.3826 11.665 11.5528 9.99997 11.5528Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99999 6.95654L10.3237 7.95299H11.3715L10.5239 8.56881L10.8476 9.56525L9.99999 8.94939L9.15237 9.56525L9.47616 8.56881L8.62854 7.95299H9.67624L9.99999 6.95654Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_320">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMauritania;
