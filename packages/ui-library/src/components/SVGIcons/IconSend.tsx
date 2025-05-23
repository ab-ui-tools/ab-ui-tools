import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconSend = ({
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
        d="M5.69362 11.9999L2.29933 3.27174C2.0631 2.66427 2.65544 2.08334 3.2414 2.28983L3.33375 2.32909L21.3337 11.3291C21.852 11.5882 21.8844 12.2977 21.4309 12.6132L21.3337 12.6707L3.33375 21.6707C2.75077 21.9622 2.11746 21.4262 2.2688 20.8237L2.29933 20.7281L5.69362 11.9999L2.29933 3.27174L5.69362 11.9999ZM4.4021 4.54032L7.01109 11.2493L13.6387 11.2499C14.0184 11.2499 14.3322 11.5321 14.3818 11.8981L14.3887 11.9999C14.3887 12.3796 14.1065 12.6934 13.7404 12.7431L13.6387 12.7499L7.01109 12.7493L4.4021 19.4595L19.3213 11.9999L4.4021 4.54032Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconSend;
