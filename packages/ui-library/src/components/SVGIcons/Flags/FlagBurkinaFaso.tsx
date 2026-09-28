import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBurkinaFaso = ({
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
    <g clipPath="url(#clip0_9419_640)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" style={{ fill: '#6DA544' }} />
      <path
        d="M9.99992 6.52173L10.7553 8.84665H13.2001L11.2223 10.2836L11.9777 12.6087L9.99992 11.1718L8.02215 12.6087L8.77766 10.2836L6.7998 8.84665H9.24449L9.99992 6.52173Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_640">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBurkinaFaso;
