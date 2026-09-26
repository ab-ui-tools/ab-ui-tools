import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMarshallIslands = ({
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
    <g clipPath="url(#clip0_9419_303)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 8.32176 19.5859 6.74039 18.8554 5.35156L9.98824 10.0117L14.6484 1.14461C13.2596 0.414062 11.6782 0 10 0C4.47719 0 0 4.47719 0 10C0 12.7614 1.1193 15.2614 2.92891 17.0711C4.73855 18.8807 7.23855 20 10 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M18.8449 5.36244C18.3871 4.49119 17.792 3.67318 17.0594 2.9406C16.3268 2.20803 15.5089 1.61291 14.6376 1.15521L2.91724 17.0828L18.8449 5.36244Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.91724 17.0828L18.8449 5.36245C18.3871 4.4912 17.792 3.67319 17.0594 2.94061L2.91724 17.0828Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M8.68391 5.86415L7.46266 6.43861L8.11301 7.62142L6.78684 7.36771L6.61879 8.7074L5.69504 7.72205L4.77129 8.7074L4.60333 7.36771L3.27715 7.62134L3.92743 6.43857L2.70618 5.86415L3.92747 5.28966L3.27715 4.10693L4.60325 4.36056L4.77133 3.02087L5.69504 4.00623L6.61879 3.02087L6.78684 4.36056L8.11305 4.10693L7.4627 5.2897L8.68391 5.86415Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_303">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMarshallIslands;
