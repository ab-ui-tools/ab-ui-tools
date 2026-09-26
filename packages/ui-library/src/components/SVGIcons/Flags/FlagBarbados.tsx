import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBarbados = ({
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
    <g clipPath="url(#clip0_9419_366)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M5.65219 0.992615C2.30727 2.61004 0 6.03539 0 10C0 13.9646 2.30727 17.39 5.65219 19.0074V0.992615Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M14.3478 0.992615V19.0074C17.6927 17.39 20 13.9646 20 10C20 6.03543 17.6927 2.61004 14.3478 0.992615Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M13.0434 6.08698L13.6268 6.37862L13.0434 6.08698L12.4601 5.79534C12.4249 5.86569 11.6632 7.41542 11.5388 9.78264H10.6522V6.08698L9.99997 5.21741L9.34778 6.08698V9.78264H8.4611C8.33664 7.41542 7.575 5.86569 7.53981 5.79534L6.37317 6.37866C6.38122 6.39467 7.17391 8.00815 7.17391 10.4348V11.087H9.34782V14.7827H10.6522V11.087H12.8261V10.4348C12.8261 9.18018 13.0431 8.14565 13.2253 7.4987C13.4238 6.79323 13.6255 6.38124 13.6275 6.37713L13.0434 6.08698Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_366">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBarbados;
