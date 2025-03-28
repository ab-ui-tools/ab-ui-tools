import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconHomeAddFilled = ({
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
      d="M10.5492 2.53415C11.3872 1.82716 12.6128 1.82716 13.4508 2.53415L20.2008 8.22869C20.7076 8.6562 21 9.28545 21 9.94844V12.0218C19.9897 11.375 18.7886 11 17.5 11C13.9101 11 11 13.9101 11 17.5C11 19.0092 11.5143 20.3982 12.3773 21.5014H4.75C3.7835 21.5014 3 20.7179 3 19.7514V9.94844C3 9.28545 3.29241 8.6562 3.79916 8.22869L10.5492 2.53415ZM23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM18.0006 18L18.0011 20.5035C18.0011 20.7797 17.7773 21.0035 17.5011 21.0035C17.225 21.0035 17.0011 20.7797 17.0011 20.5035L17.0006 18H14.4956C14.2197 18 13.9961 17.7762 13.9961 17.5C13.9961 17.2239 14.2197 17 14.4956 17H17.0005L17 14.4993C17 14.2231 17.2239 13.9993 17.5 13.9993C17.7761 13.9993 18 14.2231 18 14.4993L18.0005 17H20.4966C20.7725 17 20.9961 17.2239 20.9961 17.5C20.9961 17.7762 20.7725 18 20.4966 18H18.0006Z"
      fill="#222222"
    />
  </svg>
);

export default IconHomeAddFilled;
