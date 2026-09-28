import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAustria = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_247)">
      <path
        d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60509 19.378 6.52173L10 5.65216L0.621992 6.52173C0.220039 7.60509 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 14.3478L19.378 13.4782Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99999 20C14.2996 20 17.9651 17.2863 19.378 13.4783H0.621948C2.03492 17.2863 5.70031 20 9.99999 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10 0C5.70031 0 2.03492 2.71375 0.621948 6.52176H19.378C17.9651 2.71375 14.2996 0 10 0Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_247">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAustria;
