import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBermuda = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_414)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M9.99997 4.78259V8.15537L6.52173 4.78259H9.99997Z" style={{ fill: '#0052B4' }} />
      <path d="M5.21736 9.99996H8.15529L5.21736 6.08691L4.78259 9.13039L5.21736 9.99996Z" style={{ fill: '#0052B4' }} />
      <path
        d="M9.97327 10H10C10 9.99104 10 9.98229 10 9.97327C9.99112 9.98221 9.98221 9.99112 9.97327 10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47621 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15531 10H9.97328C9.98219 9.99109 9.99109 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.05917 1.30432C3.49514 2.19491 2.19487 3.49514 1.30432 5.05917V10.4348H3.91303V3.91311V3.91303H10.4348C10.4348 3.09026 10.4348 2.30643 10.4348 1.30432H5.05917Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10.3976 9.1677L6.44709 5.21735H5.21741V5.21742L10.3974 10.3975H10.3975C10.3976 10.3975 10.3976 9.54957 10.3976 9.1677Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.3043 5.21741V9.99998C11.3043 12.3297 17.3913 12.3297 17.3913 9.99998V5.21741H11.3043Z"
        style={{ fill: '#F3F3F3' }}
      />
      <path
        d="M11.3043 9.99998V9.99994C11.3043 12.3296 14.3478 13.0435 14.3478 13.0435C14.3478 13.0435 17.3913 12.3296 17.3913 9.99994V9.99998H11.3043Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M14.3479 8.08698L12.9348 8.69569V10L14.3479 10.8696L15.7609 10V8.69569L14.3479 8.08698Z"
        style={{ fill: '#A2001D' }}
      />
      <path d="M12.9348 7.3913H15.7609V8.69563H12.9348V7.3913Z" style={{ fill: '#338AF3' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_414">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBermuda;
