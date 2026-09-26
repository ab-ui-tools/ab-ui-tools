import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagTaiwan = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1770)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C3.43477 6.56523 6.34781 3.65219 10 0C15.5228 0 20 4.47719 20 10Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M10 10C10 4.47719 10 3.82609 10 0C4.47719 0 0 4.47719 0 10H10Z" style={{ fill: '#0052B4' }} />
      <path
        d="M8.69563 5.85236L7.47434 6.42689L8.12465 7.60966L6.79852 7.35591L6.63043 8.69564L5.70676 7.71033L4.78301 8.69564L4.615 7.35591L3.28883 7.60959L3.93915 6.42681L2.7179 5.85236L3.93918 5.27794L3.28883 4.09513L4.61497 4.34884L4.78305 3.00916L5.70676 3.99447L6.63047 3.00916L6.79852 4.34884L8.12469 4.09513L7.47434 5.27798L8.69563 5.85236Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.7069 7.71361C6.73495 7.71361 7.56835 6.88022 7.56835 5.85217C7.56835 4.82412 6.73495 3.99072 5.7069 3.99072C4.67886 3.99072 3.84546 4.82412 3.84546 5.85217C3.84546 6.88022 4.67886 7.71361 5.7069 7.71361Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M5.7068 6.84422C5.15989 6.84422 4.71497 6.39926 4.71497 5.85235C4.71497 5.30543 5.15993 4.86047 5.7068 4.86047C6.25372 4.86047 6.69868 5.30543 6.69868 5.85235C6.69864 6.39926 6.25364 6.84422 5.7068 6.84422Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1770">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagTaiwan;
