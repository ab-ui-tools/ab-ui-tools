import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagRepublicOfTheCongo = ({
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
    <g clipPath="url(#clip0_9419_1179)">
      <path
        d="M5.42075 18.8924L12.767 12.7671L18.8923 5.42079C17.94 3.57517 16.4299 2.06427 14.585 1.11072L7.23293 7.23301L1.11072 14.585C2.06419 16.43 3.57509 17.94 5.42075 18.8924Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M17.0713 17.0714C20.2262 13.9165 20.8319 9.1783 18.8895 5.41479L5.41467 18.8896C9.17818 20.832 13.9164 20.2263 17.0713 17.0714Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92839 2.92851C-0.226525 6.08343 -0.832149 10.8216 1.11015 14.5851L14.585 1.11031C10.8215 -0.832068 6.08331 -0.226366 2.92839 2.92851Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1179">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagRepublicOfTheCongo;
