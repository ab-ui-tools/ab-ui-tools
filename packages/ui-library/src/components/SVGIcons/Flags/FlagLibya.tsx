import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagLibya = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_155)">
      <path
        d="M0.992266 5.65216C0.356562 6.96685 0 8.44173 0 9.99998C0 11.5582 0.356562 13.0331 0.992266 14.3478L10 15.2174L19.0077 14.3478C19.6434 13.0331 20 11.5582 20 9.99998C20 8.44173 19.6434 6.96685 19.0077 5.65216L10 4.78259L0.992266 5.65216Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M0.992676 14.3478C2.6101 17.6928 6.03545 20 10.0001 20C13.9646 20 17.39 17.6928 19.0074 14.3478H0.992676Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M0.992676 5.65219H19.0074C17.39 2.30723 13.9646 0 10.0001 0C6.03545 0 2.6101 2.30723 0.992676 5.65219Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M12.3275 8.17133L13.148 9.30199L14.4768 8.87113L13.655 10.0008L14.4754 11.1314L13.1471 10.6989L12.3253 11.8286L12.3262 10.4317L10.9978 9.99922L12.3266 9.56836L12.3275 8.17133Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10.0883 12.8261C8.52749 12.8261 7.26217 11.5608 7.26217 10C7.26217 8.43923 8.52749 7.17392 10.0883 7.17392C10.5749 7.17392 11.0328 7.29696 11.4326 7.5136C10.8054 6.90028 9.94776 6.52173 9.00131 6.52173C7.0803 6.52173 5.52307 8.07899 5.52307 9.99997C5.52307 11.9209 7.08034 13.4782 9.00131 13.4782C9.9478 13.4782 10.8055 13.0997 11.4326 12.4863C11.0328 12.7031 10.5749 12.8261 10.0883 12.8261Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_155">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagLibya;
