import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSenegal = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1348)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99996 6.52185L10.8632 9.17888H13.6573L11.397 10.8212L12.2603 13.4783L9.99996 11.8361L7.73961 13.4783L8.60309 10.8212L6.34277 9.17888H9.13664L9.99996 6.52185Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M5.65219 0.992676C2.30727 2.61014 0 6.03549 0 10.0001C0 13.9646 2.30727 17.39 5.65219 19.0074V0.992676Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M14.3478 0.992676V19.0074C17.6927 17.39 20 13.9646 20 10.0001C20 6.03549 17.6927 2.61014 14.3478 0.992676Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1348">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSenegal;
