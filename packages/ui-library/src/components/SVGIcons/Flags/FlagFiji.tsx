import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagFiji = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1403)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        style={{ fill: '#338AF3' }}
      />
      <path d="M9.99997 4.78259V8.15537L6.52173 4.78259H9.99997Z" style={{ fill: '#0052B4' }} />
      <path d="M5.21736 9.99996H8.15533L5.21736 6.08691L4.78259 9.13039L5.21736 9.99996Z" style={{ fill: '#0052B4' }} />
      <path
        d="M9.97327 10H10C10 9.99104 10 9.98229 10 9.97327C9.99112 9.98221 9.98221 9.99112 9.97327 10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47625 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15535 10H9.97332C9.98223 9.99109 9.99113 9.98219 10.0001 9.97324C10.0001 9.29953 10.0001 8.6984 10.0001 8.15539L7.06203 5.21738H10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.05917 1.30432C3.49514 2.19491 2.19491 3.49514 1.30432 5.05917V9.99999H3.91303V3.91311V3.91303H9.99999C9.99999 3.09026 9.99999 2.30643 9.99999 1.30432H5.05917Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99999 8.77026L6.44713 5.21741H5.21741V5.21749L9.99991 9.99999H9.99999C9.99999 9.99999 9.99999 9.15206 9.99999 8.77026Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.3043 6.52179V10C11.3043 12.3297 14.3478 13.0435 14.3478 13.0435C14.3478 13.0435 17.3913 12.3297 17.3913 10V6.52179L14.3478 5.65222L11.3043 6.52179Z"
        style={{ fill: '#F3F3F3' }}
      />
      <path
        d="M17.3913 6.52174V5.21741H11.3043V6.52174H13.913V9.13049H11.3043V9.99999V10.0001L13.913 10.0001V12.9101C14.1754 13.003 14.3478 13.0435 14.3478 13.0435C14.3478 13.0435 14.5201 13.003 14.7825 12.9101V10.0001H17.3913V9.99999V9.13045H14.7825V6.5217H17.3913V6.52174Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1403">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagFiji;
