import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGermany = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1456)">
      <path
        d="M0.621948 13.4783C2.03488 17.2863 5.70031 20.0001 9.99996 20.0001C14.2996 20.0001 17.965 17.2863 19.378 13.4783L9.99996 12.6088L0.621948 13.4783Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176L9.99996 7.39129L19.378 6.52172C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M0.621992 6.52173C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1456">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGermany;
