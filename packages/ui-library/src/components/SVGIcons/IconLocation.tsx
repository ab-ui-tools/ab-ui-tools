import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconLocation = ({
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
        d="M5.84303 4.56831C9.24344 1.1679 14.7566 1.1679 18.157 4.56831C21.5574 7.96872 21.5574 13.4819 18.157 16.8823L16.97 18.0562C16.0952 18.9149 14.96 20.0188 13.5642 21.3684C12.6919 22.2117 11.3081 22.2116 10.436 21.3681L6.9449 17.9723C6.50614 17.5414 6.13887 17.1781 5.84303 16.8823C2.44262 13.4819 2.44262 7.96872 5.84303 4.56831ZM17.0963 5.62897C14.2817 2.81435 9.71832 2.81435 6.90369 5.62897C4.08907 8.4436 4.08907 13.007 6.90369 15.8216L8.39077 17.2891C9.20967 18.0905 10.2391 19.0909 11.4788 20.2899C11.7695 20.5711 12.2308 20.5711 12.5215 20.29L15.9164 16.9885C16.3854 16.5282 16.7787 16.1393 17.0963 15.8216C19.911 13.007 19.911 8.4436 17.0963 5.62897ZM12 7.99897C13.6577 7.99897 15.0016 9.34281 15.0016 11.0005C15.0016 12.6582 13.6577 14.0021 12 14.0021C10.3423 14.0021 8.99847 12.6582 8.99847 11.0005C8.99847 9.34281 10.3423 7.99897 12 7.99897ZM12 9.49897C11.1707 9.49897 10.4985 10.1712 10.4985 11.0005C10.4985 11.8298 11.1707 12.5021 12 12.5021C12.8293 12.5021 13.5016 11.8298 13.5016 11.0005C13.5016 10.1712 12.8293 9.49897 12 9.49897Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconLocation;
