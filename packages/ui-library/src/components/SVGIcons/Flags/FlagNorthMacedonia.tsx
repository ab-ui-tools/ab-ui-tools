import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNorthMacedonia = ({
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
    <g clipPath="url(#clip0_9419_1166)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M11.5208 19.885C13.1472 19.6369 14.6443 18.9964 15.9136 18.064L10 10L11.5208 19.885Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M8.47916 0.11499C6.85279 0.363115 5.35568 1.00358 4.0863 1.93597L9.99998 10L8.47916 0.11499Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M4.0863 18.064C5.3556 18.9964 6.85271 19.6369 8.47908 19.8851L9.99998 10L4.0863 18.064Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M1.93597 4.0863C1.00354 5.35568 0.363154 6.85275 0.11499 8.47916L10 9.99998L1.93597 4.0863Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0.11499 11.5208C0.363115 13.1472 1.00358 14.6443 1.93601 15.9136L10 10L0.11499 11.5208Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M19.885 8.47924C19.6369 6.85287 18.9964 5.35576 18.064 4.08643L10 10.0001L19.885 8.47924Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.9136 1.93593C14.6443 1.00354 13.1472 0.363115 11.5208 0.11499L10 10L15.9136 1.93593Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M18.0641 15.9136C18.9965 14.6443 19.6369 13.1471 19.8851 11.5208L10 10L18.0641 15.9136Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99997 13.4782C11.921 13.4782 13.4782 11.921 13.4782 9.99997C13.4782 8.07899 11.921 6.52173 9.99997 6.52173C8.07899 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.921 8.07899 13.4782 9.99997 13.4782Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99995 12.6087C11.4407 12.6087 12.6087 11.4407 12.6087 9.99995C12.6087 8.5592 11.4407 7.39124 9.99995 7.39124C8.5592 7.39124 7.39124 8.5592 7.39124 9.99995C7.39124 11.4407 8.5592 12.6087 9.99995 12.6087Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1166">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNorthMacedonia;
