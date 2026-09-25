import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagTransnistria = ({
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
    <g clipPath="url(#clip0_9419_1837)">
      <path
        d="M19.6555 7.39129C18.508 3.13363 14.6203 0 9.99999 0C5.37972 0 1.49198 3.13363 0.344482 7.39129L9.99999 7.82609L19.6555 7.39129Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M0.344482 12.6088C1.49198 16.8664 5.37972 20 9.99999 20C14.6203 20 18.508 16.8664 19.6555 12.6088L9.99999 12.174L0.344482 12.6088Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M19.6555 7.39124H0.344492C0.120313 8.22299 0 9.09733 0 9.99995C0 10.9026 0.120313 11.7769 0.344492 12.6087H19.6555C19.8797 11.7769 20 10.9026 20 9.99995C20 9.09733 19.8797 8.22299 19.6555 7.39124Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1837">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagTransnistria;
