import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMalta = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_299)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path d="M10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20" style={{ fill: '#D80027' }} />
      <path
        d="M6.95649 3.91304V2.6087H5.65215V3.91304H4.34778V5.21738H5.65215V6.52175H6.95649V5.21738H8.26083V3.91304H6.95649Z"
        style={{ fill: '#ACABB1' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_299">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMalta;
