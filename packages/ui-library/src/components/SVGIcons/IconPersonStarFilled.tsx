import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconPersonStarFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M10.9941 17.5C10.9941 16.211 11.3693 15.0097 12.0165 13.9992H5.24692C4.0049 13.9992 2.99805 15.0061 2.99805 16.2481V17.1681C2.99805 17.7401 3.17645 18.298 3.50841 18.7639C5.05058 20.9282 7.57354 22.0004 10.9945 22.0004C11.5944 22.0004 12.1667 21.9674 12.711 21.9014C11.6451 20.7436 10.9941 19.1978 10.9941 17.5ZM10.9945 2.00391C13.7559 2.00391 15.9945 4.24248 15.9945 7.00391C15.9945 9.76533 13.7559 12.0039 10.9945 12.0039C8.23308 12.0039 5.99451 9.76533 5.99451 7.00391C5.99451 4.24248 8.23308 2.00391 10.9945 2.00391ZM22.9941 17.5C22.9941 20.5376 20.5317 23 17.4941 23C14.4566 23 11.9941 20.5376 11.9941 17.5C11.9941 14.4624 14.4566 12 17.4941 12C20.5317 12 22.9941 14.4624 22.9941 17.5ZM18.0495 14.4206C17.8747 13.8598 17.1136 13.8598 16.9388 14.4206L16.3818 16.2077H14.5792C14.0135 16.2077 13.7783 16.9623 14.236 17.3089L15.6943 18.4134L15.1372 20.2004C14.9624 20.7612 15.5782 21.2276 16.0358 20.881L17.4941 19.7766L18.9524 20.881C19.4101 21.2276 20.0258 20.7612 19.851 20.2004L19.294 18.4134L20.7523 17.3089C21.21 16.9623 20.9748 16.2077 20.4091 16.2077H18.6065L18.0495 14.4206Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconPersonStarFilled;
