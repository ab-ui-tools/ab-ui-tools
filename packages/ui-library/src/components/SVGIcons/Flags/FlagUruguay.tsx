import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagUruguay = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_2093)">
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
      <path d="M10 0V2.17391H16.2249C14.5167 0.813437 12.3535 0 10 0Z" style={{ fill: '#338AF3' }} />
      <path
        d="M10 7.3913H19.6555C19.4048 6.46107 19.0237 5.58447 18.5323 4.78259H10V7.3913Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M0 10C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 10H0Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M8.69575 5.85236L7.47442 6.42685L8.12477 7.60966L6.7986 7.35599L6.63056 8.69564L5.70688 7.71033L4.78313 8.69564L4.61513 7.35599L3.28895 7.60959L3.93927 6.42681L2.71802 5.85236L3.93931 5.27794L3.28895 4.09513L4.61509 4.3488L4.78317 3.00916L5.70688 3.99447L6.6306 3.00916L6.7986 4.3488L8.12481 4.09513L7.47446 5.27798L8.69575 5.85236Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2093">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagUruguay;
