import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAngola = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_108)">
      <path
        d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10C19.5652 10 10 11.3043 10 11.3043L0 10Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10" style={{ fill: 'black' }} />
      <path
        d="M8.62878 7.95355L9.47652 8.56879L9.15347 9.56519L10.0006 8.94894L10.8484 9.56418L10.5241 8.56808L11.3711 7.95191L10.3237 7.95254L9.99933 6.95648L9.67625 7.95289L8.62878 7.95355Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M12.5 5.66986C11.712 5.2149 10.8504 5.00017 10 5.00166V6.30572C10.6286 6.30459 11.2654 6.46318 11.8478 6.79951C13.6126 7.81841 14.2194 10.0831 13.2005 11.8479C12.1816 13.6126 9.91695 14.2195 8.15215 13.2006C7.63801 12.9037 7.22297 12.5007 6.91703 12.0356L5.82812 12.7545C6.24207 13.3837 6.80441 13.9285 7.5 14.3301C9.88766 15.7086 12.9516 14.8876 14.3301 12.5C15.7086 10.1123 14.8877 7.04837 12.5 5.66986Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M7.1168 9.13043C6.77109 9.76242 7.0032 10.555 7.63515 10.9007L11.8714 13.2156C11.5834 13.7422 11.7364 14.3832 12.263 14.6713L13.4073 15.2972C13.9339 15.5854 14.5945 15.3919 14.8826 14.8653L15.5086 13.721L7.1168 9.13043Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_108">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAngola;
