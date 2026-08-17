import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconNoteFilled = ({
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
      d="M17.75 3C19.5449 3 21 4.45507 21 6.25V13H16.25C14.4551 13 13 14.4551 13 16.25V21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75ZM20.56 14.5L14.5 20.56V16.25C14.5 15.2835 15.2835 14.5 16.25 14.5H20.56Z"
      fill="#222222"
    />
  </svg>
);

export default IconNoteFilled;
