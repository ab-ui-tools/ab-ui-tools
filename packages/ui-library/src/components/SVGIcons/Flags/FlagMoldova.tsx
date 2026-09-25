import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMoldova = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_439)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M5.65219 0.992615C2.30727 2.61008 0 6.03543 0 10C0 13.9646 2.30727 17.3899 5.65219 19.0074V0.992615Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M14.3478 0.992615V19.0074C17.6927 17.3899 20 13.9646 20 10C20 6.03543 17.6927 2.61008 14.3478 0.992615Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M13.4782 7.86796H11.0869C11.0869 7.26765 10.6003 6.78101 9.99997 6.78101C9.39966 6.78101 8.91302 7.26765 8.91302 7.86796H6.52173C6.52173 8.45901 7.03661 8.93812 7.62759 8.93812H7.59196C7.59196 9.52921 8.0711 10.0084 8.6622 10.0084C8.6622 10.5317 9.03806 10.9666 9.53446 11.0595L8.6911 12.9635C9.0952 13.1278 9.53685 13.2191 9.99997 13.2191C10.4631 13.2191 10.9047 13.1278 11.3088 12.9635L10.4655 11.0595C10.9619 10.9666 11.3377 10.5317 11.3377 10.0084C11.9288 10.0084 12.408 9.52921 12.408 8.93812H12.3723C12.9634 8.93812 13.4782 8.45897 13.4782 7.86796Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M9.99996 9.34784L8.58691 10V11.3044L9.99996 12.1739L11.413 11.3044V10L9.99996 9.34784Z"
        style={{ fill: '#0052B4' }}
      />
      <path d="M8.58691 8.69568H11.413V10H8.58691V8.69568Z" style={{ fill: '#D80027' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_439">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMoldova;
