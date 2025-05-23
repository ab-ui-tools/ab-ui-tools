import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconDocument = ({
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
      d="M18.5 20C18.5 20.275 18.276 20.5 18 20.5H6C5.724 20.5 5.5 20.275 5.5 20V4C5.5 3.725 5.724 3.5 6 3.5H12V8C12 9.104 12.896 10 14 10H18.5V20ZM13.5 4.621L17.378 8.5H14C13.724 8.5 13.5 8.275 13.5 8V4.621ZM19.414 8.414L13.585 2.586C13.559 2.56 13.527 2.54 13.5 2.516C13.429 2.452 13.359 2.389 13.281 2.336C13.241 2.309 13.195 2.291 13.153 2.268C13.082 2.228 13.012 2.184 12.937 2.152C12.74 2.07 12.528 2.029 12.313 2.014C12.266 2.011 12.22 2 12.172 2H12.171H12H6C4.896 2 4 2.896 4 4V20C4 21.104 4.896 22 6 22H18C19.104 22 20 21.104 20 20V10V9.828C20 9.298 19.789 8.789 19.414 8.414Z"
      fill="#222222"
    />
  </svg>
);

export default IconDocument;
