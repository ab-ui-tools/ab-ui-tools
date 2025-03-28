import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconTimer = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M12 5C16.6944 5 20.5 8.80558 20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5ZM12 6.5C8.13401 6.5 5 9.63401 5 13.5C5 17.366 8.13401 20.5 12 20.5C15.866 20.5 19 17.366 19 13.5C19 9.63401 15.866 6.5 12 6.5ZM12 8C12.3797 8 12.6935 8.28215 12.7432 8.64823L12.75 8.75V13.25C12.75 13.6642 12.4142 14 12 14C11.6203 14 11.3065 13.7178 11.2568 13.3518L11.25 13.25V8.75C11.25 8.33579 11.5858 8 12 8ZM19.1472 5.11371L19.2298 5.17355L20.3882 6.13773C20.7066 6.40272 20.7498 6.87562 20.4849 7.19398C20.2419 7.48581 19.8243 7.54649 19.5112 7.35047L19.4286 7.29063L18.2702 6.32645C17.9518 6.06146 17.9086 5.58856 18.1735 5.2702C18.4165 4.97837 18.8341 4.91769 19.1472 5.11371ZM14.25 2.5C14.6642 2.5 15 2.83579 15 3.25C15 3.6297 14.7178 3.94349 14.3518 3.99315L14.25 4H9.75C9.33579 4 9 3.66421 9 3.25C9 2.8703 9.28215 2.55651 9.64823 2.50685L9.75 2.5H14.25Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconTimer;
