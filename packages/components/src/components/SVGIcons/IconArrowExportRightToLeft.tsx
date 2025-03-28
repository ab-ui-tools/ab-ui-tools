import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconArrowExportRightToLeft = ({
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
    <g id="Direction=RTL, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M21.2446 4.5C20.8649 4.5 20.5511 4.78227 20.5015 5.14836L20.4947 5.25014L20.4971 18.2542C20.4971 18.6684 20.833 19.0041 21.2472 19.0041C21.6269 19.0041 21.9406 18.7218 21.9902 18.3557L21.9971 18.2539L21.9947 5.24986C21.9946 4.83565 21.6588 4.5 21.2446 4.5ZM8.34997 6.30373L8.27735 6.21961C8.01105 5.95338 7.59439 5.92921 7.3008 6.1471L7.21669 6.21972L2.22007 11.2174C1.95398 11.4835 1.92968 11.8999 2.14724 12.1935L2.21976 12.2776L7.21638 17.2811C7.50907 17.5742 7.98394 17.5745 8.27704 17.2818C8.54349 17.0157 8.56798 16.5991 8.35032 16.3053L8.27776 16.2211L4.56707 12.504L18.2441 12.5049C18.6238 12.5049 18.9376 12.2228 18.9873 11.8567L18.9941 11.7549C18.9941 11.3752 18.712 11.0615 18.3459 11.0118L18.2441 11.0049L4.55407 11.004L8.27746 7.28028C8.54369 7.01398 8.56786 6.59732 8.34997 6.30373L8.27735 6.21961L8.34997 6.30373Z"
        fill="#222222"
      />
    </g>
  </svg>
);

export default IconArrowExportRightToLeft;
