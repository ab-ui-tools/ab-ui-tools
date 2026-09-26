import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagIran = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1765)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M13.2479 7.39127H11.9395C11.9503 7.53506 11.9565 7.68014 11.9565 7.82604C11.9565 8.79338 11.7147 9.731 11.2932 10.3984C11.1631 10.6043 10.9446 10.895 10.6521 11.0911V7.39124H9.34776V11.0911C9.0553 10.895 8.83675 10.6043 8.70671 10.3984C8.28515 9.731 8.04339 8.79338 8.04339 7.82604C8.04339 7.68014 8.04956 7.53502 8.06034 7.39127H6.75198C6.74358 7.53436 6.73901 7.67928 6.73901 7.82604C6.73901 10.5079 8.17136 12.6087 9.99987 12.6087C11.8284 12.6087 13.2607 10.5079 13.2607 7.82604C13.2608 7.67928 13.2562 7.53436 13.2479 7.39127Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M4.13047 4.78262H5.43481V5.65219H6.73914V4.78262H8.04348V5.65219H9.34782V4.78262H10.6522V5.65219H11.9565V4.78262H13.2608V5.65219H14.5652V4.78262H15.8695V5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0C6.03547 0 2.60981 2.30723 0.99231 5.65219H4.13047V4.78262Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M15.8696 14.3478V15.2173H14.5653V14.3478H13.2609V15.2173H11.9566V14.3478H10.6523V15.2173H9.34793V14.3478H8.0436V15.2173H6.73926V14.3478H5.43481V15.2173H4.13047V14.3478H0.99231C2.60981 17.6927 6.03543 20 10 20C13.9647 20 17.3903 17.6927 19.0078 14.3478H15.8696Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1765">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagIran;
