import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconHandOpenHeartFilled = ({
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
        d="M16.0708 12.6185L12.0488 8.22032C12.0244 8.24581 11.9979 8.26988 11.9692 8.29226C11.6796 8.51827 11.267 8.49294 11.0072 8.23322L6.33621 3.56361C5.98468 3.21219 5.41484 3.21227 5.06341 3.56379C4.71199 3.91532 4.71208 4.48516 5.0636 4.83659L9.70108 9.47273C9.97108 9.74265 9.97122 10.1803 9.70139 10.4504C9.43139 10.7207 8.9934 10.7208 8.72327 10.4507L3.9363 5.6637C3.58483 5.31223 3.01498 5.31223 2.66351 5.6637C2.31203 6.01517 2.31203 6.58502 2.66351 6.93649L7.52688 11.7999C7.75522 12.0282 7.75531 12.3984 7.52708 12.6269C7.29868 12.8555 6.92817 12.8556 6.69967 12.6271L3.9363 9.8637C3.58483 9.51223 3.01498 9.51223 2.66351 9.8637C2.31203 10.2152 2.31203 10.785 2.66351 11.1365L7.24971 15.7227C7.06066 15.7576 6.8562 15.8025 6.64315 15.8606C5.70789 16.1155 4.5117 16.6493 3.79754 17.7884C3.4926 18.2748 3.57533 18.8098 3.86276 19.1863C4.13461 19.5425 4.58248 19.7601 5.06016 19.7566C7.64568 19.7378 10.7839 20.2146 13.2834 21.2404C14.7207 21.8303 16.509 21.751 17.7405 20.615L19.2413 19.2307C20.3306 18.2258 20.6928 16.6561 20.154 15.2756L19.0004 12.3201L18.7275 12.6185C18.0139 13.3989 16.7845 13.3989 16.0708 12.6185ZM11.6676 16.7359C11.371 16.8838 11.0108 16.7632 10.8629 16.4666C10.7151 16.1701 10.8357 15.8098 11.1322 15.662C11.8555 15.3014 12.8852 15.1394 13.8986 15.3084C14.9258 15.4796 15.9885 16.0014 16.6991 17.0672C16.8829 17.3429 16.8084 17.7154 16.5327 17.8993C16.257 18.0831 15.8845 18.0086 15.7007 17.7329C15.2113 16.9988 14.474 16.6209 13.7012 16.492C12.9146 16.3609 12.1443 16.4983 11.6676 16.7359ZM11.2054 3.50043C10.832 4.27198 10.7175 5.1327 10.8576 5.95726L8.6636 3.63659C8.31208 3.28516 8.31199 2.71532 8.66341 2.36379C9.01484 2.01227 9.58468 2.01219 9.93621 2.36361C10.2794 2.70674 10.7178 3.08944 11.2054 3.50043ZM17.3991 3.60349L16.6453 3.01241C15.4027 2.03811 13.6067 2.24934 12.624 3.48535C11.7454 4.5904 11.8 6.17003 12.7527 7.21184L16.9564 11.8087C17.1942 12.0688 17.604 12.0688 17.8419 11.8087L22.0459 7.2113C22.9983 6.16974 23.053 4.59059 22.1749 3.48563C21.1926 2.24948 19.3967 2.03788 18.154 3.01187L17.3991 3.60349Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconHandOpenHeartFilled;
