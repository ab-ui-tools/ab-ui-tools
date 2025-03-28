import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconLeafFilled = ({
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
      d="M11.0375 3.04789C11.7168 2.59961 12.6397 2.67442 13.2376 3.27233L16.949 6.98371C19.6821 9.71686 19.6821 14.1482 16.949 16.8813C16.802 17.0283 16.6502 17.1673 16.494 17.2985C16.1034 17.6263 15.6854 17.9048 15.2483 18.1339C14.4616 18.5463 13.6128 18.7987 12.7502 18.8912V21.2496C12.7502 21.6638 12.4144 21.9996 12.0002 21.9996C11.586 21.9996 11.2502 21.6638 11.2502 21.2496V18.8912C9.71657 18.7268 8.22688 18.0569 7.05133 16.8814C4.31817 14.1482 4.31818 9.71688 7.05133 6.98373L10.7627 3.27235C10.7627 3.27236 10.7627 3.27234 10.7627 3.27235C10.8482 3.18684 10.9404 3.11201 11.0375 3.04789ZM12.0001 10.9996C11.5859 10.9996 11.2501 11.3354 11.2501 11.7496V17.3801C11.7476 17.4483 12.2527 17.4483 12.7501 17.3801V11.7496C12.7501 11.3354 12.4144 10.9996 12.0001 10.9996Z"
      fill="#222222"
    />
  </svg>
);

export default IconLeafFilled;
