import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconFunnel = ({
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
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M9.20614 12.4499C6.99418 10.7961 5.41786 8.97703 4.55714 7.95437C4.29071 7.6378 4.20341 7.40613 4.15091 6.99805C3.97117 5.60071 3.8813 4.90205 4.29103 4.45102C4.70075 4 5.42533 4 6.87447 4H17.1246C18.5737 4 19.2983 4 19.708 4.45102C20.1177 4.90205 20.0279 5.60071 19.8481 6.99805C19.7956 7.40614 19.7083 7.63781 19.4419 7.95437C18.58 8.97833 17.0005 10.8006 14.784 12.4565C14.5835 12.6063 14.4513 12.8504 14.4268 13.1212C14.2072 15.5484 14.0047 16.8779 13.8787 17.5504C13.6753 18.6362 12.1357 19.2894 11.3115 19.8723C10.8209 20.2192 10.2256 19.8062 10.162 19.2692C10.0408 18.2454 9.81249 16.1657 9.56331 13.1212C9.54092 12.8479 9.40827 12.601 9.20614 12.4499Z"
      stroke="#222222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconFunnel;
