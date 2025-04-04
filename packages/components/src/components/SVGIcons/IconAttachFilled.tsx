import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconAttachFilled = ({
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
        d="M15.9999 2C19.3136 2 21.9999 4.68629 21.9999 8C21.9999 9.5373 21.4178 10.9843 20.396 12.0835L20.2061 12.2784L11.479 21.0053L11.4259 21.0548L11.3702 21.0997C10.7009 21.6759 9.84594 22 8.9429 22C6.88779 22 5.22179 20.334 5.22179 18.2789C5.22179 17.3775 5.54481 16.5248 6.11735 15.8574L6.26564 15.6945L6.28072 15.6826L13.5717 8.37879C13.9619 7.98793 14.5951 7.98737 14.986 8.37755C15.3768 8.76774 15.3774 9.4009 14.9872 9.79177L7.69618 17.0956L7.68524 17.1039C7.38894 17.4208 7.22179 17.8354 7.22179 18.2789C7.22179 19.2294 7.99236 20 8.9429 20C9.32185 20 9.67979 19.8781 9.97412 19.6571L10.0962 19.5564L10.097 19.558L18.7994 10.8571L18.958 10.6927C19.6231 9.96299 19.9999 9.0125 19.9999 8C19.9999 5.79086 18.2091 4 15.9999 4C14.9383 4 13.9453 4.4146 13.2048 5.13858L13.0501 5.29842L13.0316 5.31139L3.70629 14.6403C3.31585 15.0309 2.68269 15.031 2.29207 14.6406C1.90146 14.2501 1.90132 13.617 2.29176 13.2264L11.6007 3.91324L11.6473 3.87021C12.7712 2.68577 14.3316 2 15.9999 2Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconAttachFilled;
