import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowSortFilled = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className,
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M6.28829 4.29327L2.29252 8.29327L2.20938 8.38752C1.90456 8.77997 1.93259 9.34719 2.29327 9.70748L2.38752 9.79062C2.77997 10.0954 3.34719 10.0674 3.70748 9.70673L6.001 7.41L6.00101 19.0007L6.00774 19.1173C6.0655 19.6146 6.48817 20.0007 7.00101 20.0007L7.11763 19.9939C7.61497 19.9362 8.00101 19.5135 8.00101 19.0007L8.001 7.417L10.2944 9.70757L10.3886 9.7907C10.7811 10.0955 11.3483 10.0674 11.7086 9.70664C12.0988 9.31586 12.0984 8.6827 11.7077 8.29243L7.70242 4.29243L7.60816 4.20931C7.21571 3.90456 6.64855 3.93262 6.28829 4.29327ZM17 4.00317L16.8834 4.0099C16.386 4.06767 16 4.49034 16 5.00317L16 16.583L13.7068 14.2925L13.6125 14.2094C13.2201 13.9045 12.6529 13.9325 12.2926 14.2932C11.9022 14.6839 11.9025 15.3171 12.2932 15.7074L16.297 19.7074L16.3912 19.7905C16.7837 20.0954 17.3509 20.0674 17.7112 19.7067L21.7074 15.7067L21.7906 15.6125C22.0954 15.22 22.0674 14.6528 21.7068 14.2925L21.6125 14.2094C21.2201 13.9045 20.6529 13.9325 20.2926 14.2932L18 16.587L18 5.00317L17.9933 4.88655C17.9355 4.38921 17.5128 4.00317 17 4.00317Z"
      fill="#222222"
    />
  </svg>
);

export default IconArrowSortFilled;
