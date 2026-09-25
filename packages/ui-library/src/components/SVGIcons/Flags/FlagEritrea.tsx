import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEritrea = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1267)">
      <path
        d="M9.13048 9.13037C9.13048 9.13037 2.93481 17.0724 2.92896 17.071C4.73856 18.8806 7.2386 19.9999 10 19.9999C15.5229 19.9999 20 15.5228 20 9.99994L9.13048 9.13037Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M9.13048 10C9.13048 10 2.93481 2.92754 2.92896 2.92895C4.73856 1.1193 7.2386 0 10 0C15.5229 0 20 4.47719 20 10H9.13048Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C2.92865 17.0727 20 10 20 10L2.92893 2.92896Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M5.21738 5.86963C3.29945 5.86963 1.73914 7.42998 1.73914 9.34787V10.6522C1.73914 12.5701 3.29949 14.1304 5.21738 14.1304C7.13527 14.1304 8.69562 12.5701 8.69562 10.6522V9.34787C8.69566 7.42998 7.13531 5.86963 5.21738 5.86963ZM7.39128 10.6522C7.39128 11.6238 6.75058 12.4484 5.86953 12.7261V11.3044L6.79234 10.3816L5.87003 9.45932L5.86953 9.13107V8.69576H4.56523V10.0001L3.64304 10.9222L4.56523 11.8444V12.7261C3.68417 12.4484 3.04347 11.6238 3.04347 10.6523V9.34795C3.04347 8.14924 4.01871 7.17404 5.21738 7.17404C6.41605 7.17404 7.39128 8.14928 7.39128 9.34795V10.6522Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1267">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEritrea;
