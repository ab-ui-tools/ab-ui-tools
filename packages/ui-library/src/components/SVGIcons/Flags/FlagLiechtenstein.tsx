import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagLiechtenstein = ({
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
    <g clipPath="url(#clip0_9419_162)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0.434766 10 10 8.69568 10 8.69568L20 10Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" style={{ fill: '#0052B4' }} />
      <path
        d="M7.39133 6.9565C7.39133 6.23615 6.80735 5.65217 6.087 5.65217C5.75282 5.65217 5.44825 5.77795 5.21743 5.98455V5.21736H5.65219V4.34779H5.21743V3.91302H4.34786V4.34779H3.91309V5.21736H4.34786V5.98455C4.11704 5.77795 3.81247 5.65217 3.47829 5.65217C2.75793 5.65217 2.17395 6.23615 2.17395 6.9565C2.17395 7.34271 2.34196 7.68959 2.60872 7.92845V8.69564H6.95653V7.92845C7.22336 7.68959 7.39133 7.34271 7.39133 6.9565Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_162">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagLiechtenstein;
