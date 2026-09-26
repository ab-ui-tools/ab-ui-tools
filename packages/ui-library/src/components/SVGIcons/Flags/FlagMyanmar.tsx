import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMyanmar = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_494)">
      <path
        d="M19.378 13.4782C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60501 19.378 6.52173L10 5.65216L0.621992 6.52173C0.220039 7.60501 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782L10 14.3478L19.378 13.4782Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M19.378 6.52176C17.965 2.71375 14.2996 0 9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M16.8573 8.46042H11.6188L9.99996 3.47827L8.38113 8.46042H3.14258L7.38066 11.5396L5.76184 16.5218L9.99996 13.4783L14.2381 16.5217L12.6193 11.5395L16.8573 8.46042Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_494">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMyanmar;
