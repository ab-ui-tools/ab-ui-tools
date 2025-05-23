import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconDocumentEditFilled = ({
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
      d="M12 2V8C12 9.10457 12.8954 10 14 10H18.9209C18.324 10.2196 17.7756 10.5541 17.3621 10.9704L11.3114 17.0623C10.9598 17.4164 10.7086 17.8576 10.5836 18.3407L10.0588 20.3701C9.90491 20.9651 10.0168 21.5396 10.3007 22H5.5C4.67157 22 4 21.3284 4 20.5V3.5C4 2.67157 4.67157 2 5.5 2H12ZM13.5 2.5V8C13.5 8.27614 13.7239 8.5 14 8.5H19.5L13.5 2.5ZM12.1957 17.5719L18.0981 11.6695C18.9907 10.7768 20.4379 10.7768 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719Z"
      fill="#222222"
    />
  </svg>
);

export default IconDocumentEditFilled;
