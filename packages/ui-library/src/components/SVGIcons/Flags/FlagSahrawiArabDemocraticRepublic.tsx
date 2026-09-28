import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSahrawiArabDemocraticRepublic = ({
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
    <g clipPath="url(#clip0_9419_1205)">
      <path
        d="M0.992266 5.65216C0.356562 6.96685 0 8.44173 0 9.99998C0 11.5582 0.356562 13.0331 0.992266 14.3478L10 15.2174L19.0077 14.3478C19.6434 13.0331 20 11.5582 20 9.99998C20 8.44173 19.6434 6.96685 19.0077 5.65216L10 4.78259L0.992266 5.65216Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0.992676 14.3478C2.6101 17.6927 6.03549 20 10.0001 20C13.9646 20 17.39 17.6927 19.0074 14.3478H0.992676Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M0.992676 5.65219H19.0074C17.39 2.30723 13.9647 0 10.0001 0C6.03545 0 2.6101 2.30723 0.992676 5.65219Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M2.92893 2.92889C-0.976309 6.83413 -0.976309 13.1658 2.92893 17.0711C4.54271 15.4573 6.09478 13.9052 10 9.99999L2.92893 2.92889Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M12.6088 10C12.6088 8.54307 13.6328 7.32592 15.0001 7.02732C14.79 6.98143 14.5719 6.95654 14.3479 6.95654C12.667 6.95654 11.3044 8.31912 11.3044 10C11.3044 11.6809 12.667 13.0435 14.3479 13.0435C14.5719 13.0435 14.7899 13.0186 15.0001 12.9727C13.6328 12.6741 12.6088 11.457 12.6088 10Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.1279 8.04346L15.5597 9.37213H16.9566L15.8264 10.1931L16.2581 11.5217L15.1279 10.7006L13.9978 11.5217L14.4296 10.1931L13.2993 9.37213H14.6962L15.1279 8.04346Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1205">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSahrawiArabDemocraticRepublic;
