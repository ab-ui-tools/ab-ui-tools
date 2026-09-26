import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagIsleOfMan = ({
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
    <g clipPath="url(#clip0_9419_1860)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M13.7027 6.70355L12.9959 9.22585L10.8752 8.83425L9.51009 6.02039L5.82231 7.32902L5.53149 6.50949L4.56665 6.39062L5.29364 8.43941L7.83149 7.79039L8.55271 9.82277L6.79833 12.4119L9.77556 14.9512L9.21126 15.6128L9.59071 16.5079L11.0016 14.8538L9.17056 12.9805L10.57 11.3398L13.6895 11.5645L14.4 7.71648L15.2551 7.87441L15.8406 7.09824L13.7027 6.70355Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1860">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagIsleOfMan;
