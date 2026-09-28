import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagVaticanCity = ({
  size,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', 'svg-flag', {
      [`svg-icon__size-${size}`]: size,
      [className]: className,
    })}
    viewBox="0 0 20 20"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-flag` : ''}
  >
    <g clipPath="url(#clip0_9419_2150)">
      <path
        d="M10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C10 19.5652 8.69568 10 8.69568 10L10 0Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path d="M10 20C4.47719 20 0 15.5228 0 10C0 4.47719 4.47719 0 10 0" style={{ fill: '#FFDA44' }} />
      <path
        d="M13.8292 8.70179L15.7086 11.188C15.4125 11.6363 15.4141 12.2404 15.7565 12.6934C16.1909 13.268 17.0089 13.3818 17.5836 12.9474C18.1582 12.513 18.272 11.695 17.8375 11.1203C17.4951 10.6673 16.9144 10.5011 16.4023 10.6637L13.4733 6.78894L12.7796 7.31332L11.739 8.0998L12.7878 9.4871L13.8292 8.70179ZM16.5348 11.56C16.7264 11.4152 16.9991 11.4531 17.1439 11.6446C17.2887 11.8362 17.2508 12.1089 17.0592 12.2537C16.8677 12.3984 16.595 12.3606 16.4503 12.169C16.3054 11.9775 16.3433 11.7048 16.5348 11.56Z"
        style={{ fill: '#ACABB1' }}
      />
      <path
        d="M17.0528 9.48706L18.1015 8.09976L17.061 7.31319L16.3673 6.78882L13.4383 10.6635C12.9263 10.501 12.3455 10.6673 12.0031 11.1202C11.5686 11.6949 11.6824 12.5129 12.257 12.9473C12.8317 13.3816 13.6497 13.2679 14.084 12.6933C14.4265 12.2403 14.428 11.6362 14.132 11.1878L16.0113 8.70167L17.0528 9.48706ZM13.3904 12.169C13.2456 12.3606 12.973 12.3984 12.7814 12.2537C12.5898 12.1088 12.5519 11.8361 12.6967 11.6446C12.8415 11.4531 13.1142 11.4151 13.3058 11.56C13.4973 11.7048 13.5352 11.9775 13.3904 12.169Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2150">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagVaticanCity;
