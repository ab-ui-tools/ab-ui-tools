import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNiger = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_687)">
      <path
        d="M0.992266 5.65216C0.356562 6.96685 0 8.44173 0 9.99998C0 11.5582 0.356562 13.0331 0.992266 14.3478L10 15.2174L19.0077 14.3478C19.6434 13.0331 20 11.5582 20 9.99998C20 8.44173 19.6434 6.96685 19.0077 5.65216L10 4.78259L0.992266 5.65216Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0.992676 14.3478C2.6101 17.6928 6.03545 20 10.0001 20C13.9647 20 17.39 17.6928 19.0074 14.3478H0.992676Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M0.992676 5.65219H19.0074C17.39 2.30723 13.9646 0 10.0001 0C6.03549 0 2.6101 2.30723 0.992676 5.65219Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M10.0001 13.4782C11.9211 13.4782 13.4783 11.921 13.4783 9.99997C13.4783 8.07899 11.9211 6.52173 10.0001 6.52173C8.07911 6.52173 6.52185 8.07899 6.52185 9.99997C6.52185 11.921 8.07911 13.4782 10.0001 13.4782Z"
        style={{ fill: '#FF9811' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_687">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNiger;
