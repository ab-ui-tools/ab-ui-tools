import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAzerbaijan = ({
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
    <g clipPath="url(#clip0_9419_252)">
      <path
        d="M20 10C20 8.77682 19.78 7.60506 19.378 6.52178L10 6.08698L0.621992 6.52174C0.220039 7.60506 0 8.77682 0 10C0 11.2232 0.220039 12.395 0.621992 13.4783L10 13.9131L19.378 13.4783C19.78 12.395 20 11.2232 20 10Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M10.2174 12.8261C8.65664 12.8261 7.39132 11.5608 7.39132 10C7.39132 8.43923 8.65664 7.17392 10.2174 7.17392C10.7041 7.17392 11.162 7.29696 11.5618 7.5136C10.9346 6.90028 10.0769 6.52173 9.13046 6.52173C7.20945 6.52173 5.65222 8.07899 5.65222 9.99997C5.65222 11.9209 7.20949 13.4782 9.13046 13.4782C10.0769 13.4782 10.9346 13.0997 11.5618 12.4863C11.162 12.7031 10.7041 12.8261 10.2174 12.8261Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M12.3913 8.04346L12.7657 9.09623L13.7748 8.61647L13.2951 9.62561L14.3479 9.99998L13.2951 10.3744L13.7748 11.3835L12.7657 10.9037L12.3913 11.9565L12.017 10.9037L11.0079 11.3835L11.4876 10.3744L10.4348 9.99998L11.4876 9.62561L11.0079 8.61647L12.017 9.09623L12.3913 8.04346Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_252">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAzerbaijan;
