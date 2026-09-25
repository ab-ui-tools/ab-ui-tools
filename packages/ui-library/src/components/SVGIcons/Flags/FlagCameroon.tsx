import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCameroon = ({
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
    <g clipPath="url(#clip0_9419_748)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99996 6.52173L10.8632 9.17872H13.6573L11.397 10.8211L12.2603 13.4782L9.99996 11.836L7.73961 13.4782L8.60309 10.8211L6.34277 9.17872H9.13664L9.99996 6.52173Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M5.65219 0.992615C2.30727 2.61004 0 6.03539 0 10C0 13.9646 2.30727 17.39 5.65219 19.0074V0.992615Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M14.3478 0.992615V19.0074C17.6927 17.39 20 13.9646 20 10C20 6.03543 17.6927 2.61004 14.3478 0.992615Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_748">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCameroon;
