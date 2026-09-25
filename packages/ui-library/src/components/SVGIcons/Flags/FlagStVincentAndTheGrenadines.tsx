import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagStVincentAndTheGrenadines = ({
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
    <g clipPath="url(#clip0_9419_1649)">
      <path
        d="M14.7826 1.2159C13.3618 0.440742 11.7324 0 9.99997 0C8.26754 0 6.63809 0.440742 5.21735 1.2159L4.34778 10L5.21735 18.7841C6.63809 19.5593 8.26754 20 9.99997 20C11.7324 20 13.3618 19.5593 14.7826 18.7841L15.6522 10L14.7826 1.2159Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M5.21738 18.784V1.21582C2.10895 2.91191 0 6.20953 0 9.99996C0 13.7904 2.10895 17.088 5.21738 18.784Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M20 9.99996C20 6.20953 17.891 2.91191 14.7826 1.21582V18.784C17.891 17.088 20 13.7904 20 9.99996Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M7.82609 12.6087L6.08691 9.99995L7.82605 7.39124L9.56527 9.99995L7.82609 12.6087Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M12.174 12.6087L10.4348 9.99995L12.174 7.39124L13.9131 9.99995L12.174 12.6087Z"
        style={{ fill: '#6DA544' }}
      />
      <path d="M10 16.0869L8.26086 13.4782L10 10.8695L11.7391 13.4782L10 16.0869Z" style={{ fill: '#6DA544' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_1649">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagStVincentAndTheGrenadines;
