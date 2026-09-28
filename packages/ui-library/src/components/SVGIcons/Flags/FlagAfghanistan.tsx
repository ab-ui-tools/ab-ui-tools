import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAfghanistan = ({
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
    <g clipPath="url(#clip0_9419_68)">
      <path
        d="M14.3478 0.992266C13.0331 0.356562 11.5582 0 9.99998 0C8.44177 0 6.96685 0.356562 5.65216 0.992266L4.78259 10L5.65216 19.0077C6.96685 19.6434 8.44177 20 9.99998 20C11.5582 20 13.0331 19.6434 14.3478 19.0077L15.2174 10L14.3478 0.992266Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M5.65219 0.992615C2.30727 2.61008 0 6.03543 0 10C0 13.9646 2.30727 17.3899 5.65219 19.0074V0.992615Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M14.3478 0.992615V19.0074C17.6927 17.3899 20 13.9646 20 10C20 6.03543 17.6927 2.61008 14.3478 0.992615Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M9.99997 6.52173C8.07895 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.9209 8.07899 13.4782 9.99997 13.4782C11.9209 13.4782 13.4782 11.9209 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173ZM9.99997 12.1739C8.79935 12.1739 7.82606 11.2006 7.82606 9.99997C7.82606 8.79938 8.79938 7.82606 9.99997 7.82606C11.2006 7.82606 12.1739 8.79938 12.1739 9.99997C12.1739 11.2006 11.2006 12.1739 9.99997 12.1739Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99994 8.69562C9.51967 8.69562 9.13037 9.08491 9.13037 9.56519V10.8695H10.8695V9.56519C10.8695 9.08491 10.4802 8.69562 9.99994 8.69562Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_68">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAfghanistan;
