import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconBroom = ({
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
      d="M22.4524 1.92279C22.7452 2.21569 22.7452 2.69056 22.4524 2.98345L15.5238 9.91202C17.2589 12.1668 17.0935 15.4134 15.0277 17.4791L14.1963 18.3106L11.4091 22.4913C11.2845 22.6783 11.0826 22.7995 10.859 22.8217C10.6354 22.8438 10.4136 22.7645 10.2548 22.6056L1.76948 14.1204C1.6106 13.9615 1.53132 13.7397 1.55346 13.5161C1.5756 13.2925 1.69683 13.0906 1.88378 12.966L6.06475 10.1787L6.89601 9.34742C8.96179 7.28165 12.2083 7.11629 14.4631 8.85136L21.3917 1.92279C21.6846 1.6299 22.1595 1.6299 22.4524 1.92279ZM7.60312 10.7616L13.6135 16.772L13.9671 16.4185C15.6268 14.7588 15.6268 12.0678 13.9671 10.4081C12.3074 8.74835 9.6164 8.74835 7.95668 10.4081L7.60312 10.7616ZM6.44689 11.7267L3.47704 13.7066L10.6685 20.8981L12.6484 17.9282L6.44689 11.7267Z"
      fill="#222222"
    />
  </svg>
);

export default IconBroom;
