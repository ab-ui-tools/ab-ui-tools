import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBelgium = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_396)">
      <path
        d="M13.4782 0.621992C12.3948 0.220039 11.2231 0 9.99991 0C8.77671 0 7.60499 0.220039 6.52167 0.621992L5.6521 10L6.52167 19.378C7.60499 19.78 8.77671 20 9.99991 20C11.2231 20 12.3948 19.78 13.4782 19.378L14.3477 10L13.4782 0.621992Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M20 9.99998C20 5.70037 17.2863 2.0349 13.4783 0.622009V19.3781C17.2863 17.9651 20 14.2997 20 9.99998Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0 9.99998C0 14.2997 2.71375 17.9651 6.52176 19.378V0.622009C2.71375 2.0349 0 5.70037 0 9.99998Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_396">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBelgium;
