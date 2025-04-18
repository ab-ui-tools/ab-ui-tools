import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconRedoFilled = ({
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
        d="M18.0001 7.58649L14.359 3.9514C11.7578 1.35018 7.54042 1.35018 4.9392 3.9514C2.33798 6.55262 2.33798 10.77 4.9392 13.3713L13.2777 21.7082C13.6683 22.0987 14.3014 22.0985 14.6919 21.708C15.0824 21.3175 15.0822 20.6842 14.6916 20.2938L6.35341 11.957C4.53324 10.1369 4.53324 7.18579 6.35341 5.36562C8.1167 3.60233 10.9413 3.54722 12.7714 5.20074L12.9453 5.36609L16.5851 8.99949L12.0001 9.00002C11.4873 9.00002 11.0646 9.38606 11.0069 9.8834L11.0001 10C11.0001 10.5129 11.3862 10.9355 11.8835 10.9933L12.0001 11H19.0001C19.513 11 19.9356 10.614 19.9934 10.1166L20.0001 10V3.00284C20.0001 2.45055 19.5524 2.00284 19.0001 2.00284C18.4873 2.00284 18.0646 2.38888 18.0069 2.88622L18.0001 3.00284V7.58649L14.359 3.9514L18.0001 7.58649Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconRedoFilled;
