import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNepal = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_651)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path d="M19.9414 11.087L19.9411 11.0867L19.941 11.087H19.9414Z" style={{ fill: '#0052B4' }} />
      <path
        d="M19.941 11.087C19.941 11.0869 19.9411 11.0868 19.9411 11.0867L8.97445 0.052002C8.47973 0.102432 7.99562 0.188916 7.52488 0.308799C3.19914 1.41017 0 10 0 10C0 10 13.9999 19.3686 15.5971 18.2877C15.9166 18.0714 16.223 17.8372 16.5148 17.5864L10.0154 11.087H19.941Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M17.3913 10L7.66582 0.274597C3.26906 1.32604 0 5.28096 0 10C0 15.5228 4.47719 20 10 20C12.0949 20 14.0389 19.3554 15.6457 18.2544L7.39129 10H17.3913Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.51061 14.7654L8.28932 14.1909L8.93967 13.0082L7.6135 13.2619L7.44545 11.9221L6.52174 12.9075L5.59803 11.9221L5.42995 13.2619L4.10381 13.0081L4.75416 14.1909L3.53284 14.7654L4.75416 15.3398L4.10381 16.5226L5.43002 16.269L5.59799 17.6086L6.52174 16.6233L7.44545 17.6086L7.6135 16.269L8.93963 16.5227L8.28928 15.3399L9.51061 14.7654Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M8.69563 5.54624L7.80735 5.12847L8.28036 4.26819L7.31579 4.45272L7.19356 3.47827L6.52172 4.19495L5.84989 3.47827L5.72762 4.45272L4.76305 4.26819L5.2361 5.12847L4.34778 5.54624L6.52172 5.98108L8.69563 5.54624Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.13039 5.54626C9.13039 6.98701 7.96242 8.15498 6.52167 8.15498C5.08093 8.15498 3.91296 6.98701 3.91296 5.54626"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_651">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNepal;
