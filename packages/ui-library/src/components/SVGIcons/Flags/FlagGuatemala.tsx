import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGuatemala = ({
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
    <g clipPath="url(#clip0_9419_1606)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M20 10C20 6.03543 17.6927 2.60981 14.3478 0.99231V19.0077C17.6927 17.3903 20 13.9646 20 10Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M0 10C0 13.9646 2.30723 17.3903 5.65219 19.0078V0.99231C2.30723 2.60981 0 6.03543 0 10Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M12.6132 11.691L10.9223 10.0001L12.5318 8.39053L12.4589 7.54045L11.9981 7.07959L9.99996 9.07772L8.00184 7.07959L7.54105 7.54045L7.46812 8.39053L9.07762 10.0001L7.38672 11.691L8.30906 12.6132L9.99996 10.9224L11.6909 12.6132L12.6132 11.691Z"
        style={{ fill: '#ACABB1' }}
      />
      <path
        d="M12.4595 7.54053L11.5372 8.46283C11.9306 8.85623 12.1739 9.39971 12.1739 10C12.1739 11.2006 11.2006 12.1739 10 12.1739C8.79942 12.1739 7.82606 11.2006 7.82606 10C7.82606 9.39971 8.06942 8.85623 8.46282 8.46283L7.54052 7.54053C6.91103 8.1699 6.52173 9.03947 6.52173 10C6.52173 11.921 8.07899 13.4783 9.99997 13.4783C11.9209 13.4783 13.4782 11.921 13.4782 10C13.4782 9.03951 13.0889 8.16994 12.4595 7.54053Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1606">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGuatemala;
