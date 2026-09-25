import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagPitcairnIslands = ({
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
    <g clipPath="url(#clip0_9419_1042)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.97314 10H9.9999C9.9999 9.99104 9.9999 9.98229 9.9999 9.97327C9.991 9.98221 9.98209 9.99112 9.97314 10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47621 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15531 10H9.97328C9.98219 9.99109 9.99109 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.05929 1.30432C3.49526 2.19491 2.19499 3.49514 1.30444 5.05917V9.99999H3.91315V3.91311V3.91303H10.0001C10.0001 3.09026 10.0001 2.30643 10.0001 1.30432H5.05929Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10.0001 8.77026L6.44722 5.21741H5.21753V5.21749L10.0001 9.99999H10.0001C10.0001 9.99999 10.0001 9.15206 10.0001 8.77026Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.6521 6.08693L14.3477 6.52174L13.0434 6.08693L12.6086 4.99998L13.0434 3.91302H15.6521L15.2173 4.99998L15.6521 6.08693Z"
        style={{ fill: '#ACABB1' }}
      />
      <path
        d="M11.3044 6.08698V10.8696C11.3044 13.1992 14.3479 13.9131 14.3479 13.9131C14.3479 13.9131 17.3914 13.1992 17.3914 10.8696V6.08698H11.3044Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M11.5786 12.0026C12.3267 13.4389 14.3478 13.9131 14.3478 13.9131C14.3478 13.9131 16.3688 13.4389 17.1169 12.0026L14.3478 7.39136L11.5786 12.0026Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M17.3914 10.8212L14.3479 6.08698L11.3044 10.8213V10.8696C11.3044 11.3007 11.4089 11.6764 11.5788 12.0026L14.3479 7.69498L17.1171 12.0026C17.2869 11.6764 17.3914 11.3007 17.3914 10.8695V10.8212Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1042">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagPitcairnIslands;
