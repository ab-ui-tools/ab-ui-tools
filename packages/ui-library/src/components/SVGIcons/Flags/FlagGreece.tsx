import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGreece = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1559)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 7.3913H19.6555C19.4048 6.46107 19.0237 5.58447 18.5323 4.78259H10V7.3913Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M3.77516 17.8261H16.2249C17.1375 17.0992 17.9202 16.2164 18.5323 15.2174H1.46777C2.07992 16.2163 2.86258 17.0992 3.77516 17.8261Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M3.47828 2.41943C2.69211 3.09643 2.01246 3.89365 1.46777 4.78256H3.47828V2.41943Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M10 9.99995C10 8.98135 10 8.12889 10 7.39124H6.08695V9.99995H3.47824V7.39124H0.344492C0.120313 8.22303 0 9.09733 0 9.99995C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 9.99995H10Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M9.99996 0C8.61133 0 7.28887 0.28332 6.08691 0.794844V4.78262H9.99996C9.99996 3.87199 9.99996 3.0975 9.99996 2.17391H16.2248C14.5166 0.813438 12.3534 0 9.99996 0Z"
        style={{ fill: '#338AF3' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1559">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGreece;
