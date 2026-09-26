import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagDemocraticRepublicOfCongo = ({
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
    <g clipPath="url(#clip0_9419_1103)">
      <path
        d="M18.8896 5.41467C18.4275 4.5194 17.8219 3.67908 17.0714 2.92862C16.3209 2.17811 15.4806 1.57244 14.5853 1.11041L7.54043 7.54033L1.11047 14.5852C1.57254 15.4805 2.17821 16.3208 2.92868 17.0713C3.67915 17.8218 4.5195 18.4274 5.41473 18.8895L12.4596 12.4596L18.8896 5.41467Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M2.92863 17.0714C3.34812 17.4909 3.79574 17.865 4.26523 18.1944L18.1943 4.2653C17.865 3.7958 17.4908 3.34819 17.0713 2.92869C16.6518 2.5092 16.2042 2.1351 15.7347 1.80573L1.80566 15.7348C2.135 16.2042 2.5091 16.6519 2.92863 17.0714Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92855 2.92865C-0.226407 6.08361 -0.832071 10.8218 1.11035 14.5853L14.5852 1.11049C10.8217 -0.831895 6.08348 -0.226153 2.92855 2.92865Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M17.0714 17.0714C20.2263 13.9165 20.8319 9.17827 18.8896 5.41479L5.41479 18.8896C9.17827 20.832 13.9165 20.2264 17.0714 17.0714Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M5.32915 3.04321L5.86876 4.70403H7.61501L6.20228 5.73044L6.74188 7.39122L5.32915 6.36477L3.91634 7.39122L4.45603 5.73044L3.04321 4.70403H4.78946L5.32915 3.04321Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1103">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagDemocraticRepublicOfCongo;
