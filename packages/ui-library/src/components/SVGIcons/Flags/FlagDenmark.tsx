import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagDenmark = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1110)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M7.82609 8.69566H19.9153C19.2761 3.78914 15.0807 0 9.99996 0C9.25328 0 8.52605 0.0825391 7.82605 0.237695V8.69566H7.82609Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M5.21733 8.69561V1.21588C2.47151 2.71408 0.505806 5.46217 0.0845947 8.69565H5.21733V8.69561Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M5.21729 11.3043H0.0845947C0.505806 14.5378 2.47151 17.2859 5.21733 18.784L5.21729 11.3043Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M7.82605 11.3044V19.7623C8.52605 19.9174 9.25328 20 9.99996 20C15.0807 20 19.2761 16.2108 19.9153 11.3043H7.82605V11.3044Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1110">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagDenmark;
