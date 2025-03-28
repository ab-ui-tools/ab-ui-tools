import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconBroomFilled = ({
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
      d="M22.4523 1.92279C22.7452 2.21569 22.7452 2.69056 22.4523 2.98345L16.1393 9.29646C15.9927 9.11591 15.8353 8.94117 15.6672 8.77309C15.4768 8.58264 15.2778 8.40594 15.0715 8.24301L21.3917 1.92279C21.6846 1.6299 22.1594 1.6299 22.4523 1.92279ZM15.0277 9.3474C12.7822 7.10189 9.14151 7.10189 6.896 9.34741L6.65197 9.59144L14.7837 17.7232L15.0277 17.4791C17.2732 15.2336 17.2732 11.5929 15.0277 9.3474ZM1.88378 12.966L5.49663 10.5574L13.8177 18.8785L11.4091 22.4913C11.2845 22.6783 11.0826 22.7995 10.859 22.8216C10.6354 22.8438 10.4136 22.7645 10.2548 22.6056L1.76948 14.1203C1.6106 13.9615 1.53132 13.7397 1.55346 13.5161C1.5756 13.2925 1.69683 13.0906 1.88378 12.966Z"
      fill="#222222"
    />
  </svg>
);

export default IconBroomFilled;
