import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGreenland = ({
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
    <g clipPath="url(#clip0_9419_1567)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" style={{ fill: '#D80027' }} />
      <path
        d="M6.95645 14.7826C9.59781 14.7826 11.7391 12.6414 11.7391 10C11.7391 7.35866 9.59781 5.21741 6.95645 5.21741C4.31508 5.21741 2.17383 7.35866 2.17383 10C2.17383 12.6414 4.31508 14.7826 6.95645 14.7826Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.17383 10C2.17383 7.35874 4.31508 5.21741 6.95645 5.21741C9.59785 5.21741 11.7391 7.3587 11.7391 10"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1567">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGreenland;
