import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGeorgia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1448)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M19.9154 8.69566H11.3044H11.3044V0.0846484C10.8774 0.0290625 10.4421 0 10 0C9.55793 0 9.12262 0.0290625 8.69566 0.0846484V8.69559V8.69563H0.0846484C0.0290625 9.12262 0 9.55793 0 10C0 10.4421 0.0290625 10.8774 0.0846484 11.3043H8.69559H8.69563V19.9154C9.12262 19.9709 9.55793 20 10 20C10.4421 20 10.8774 19.971 11.3043 19.9154V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.4421 20 10C20 9.55793 19.9709 9.12262 19.9154 8.69566Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.08698 4.78265V3.47827H4.78265V4.78265H3.47827V6.08698H4.78265V7.39132H6.08698V6.08698H7.39132V4.78265H6.08698Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.2174 4.78265V3.47827H13.9131V4.78265H12.6088V6.08698H13.9131V7.39132H15.2174V6.08698H16.5218V4.78265H15.2174Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.08698 13.9131V12.6088H4.78265V13.9131H3.47827V15.2174H4.78265V16.5218H6.08698V15.2174H7.39132V13.9131H6.08698Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.2174 13.9131V12.6088H13.9131V13.9131H12.6088V15.2174H13.9131V16.5218H15.2174V15.2174H16.5218V13.9131H15.2174Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1448">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGeorgia;
