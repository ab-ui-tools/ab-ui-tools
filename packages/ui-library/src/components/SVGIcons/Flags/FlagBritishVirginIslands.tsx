import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBritishVirginIslands = ({
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
    <g clipPath="url(#clip0_9419_601)">
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
        d="M14.3479 10L11.645 12.7029C12.1516 13.6798 13.1714 14.3478 14.3479 14.3478C15.5243 14.3478 16.5442 13.6798 17.0507 12.7029L14.3479 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.9999 8.77026L6.44697 5.21741H5.21729V5.21749L9.99982 9.99999H9.9999C9.9999 9.99999 9.9999 9.15206 9.9999 8.77026Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.3044 5.21741V9.99998V10C11.3045 12.3297 14.3479 13.0435 14.3479 13.0435C14.3479 13.0435 17.3914 12.3297 17.3914 10V9.99998V5.21741H11.3044Z"
        style={{ fill: '#6DA544' }}
      />
      <path d="M13.6956 7.3913H14.9999V10.8695H13.6956V7.3913Z" style={{ fill: '#F0F0F0' }} />
      <path
        d="M14.3477 8.04345C14.7079 8.04345 14.9999 7.75146 14.9999 7.39126C14.9999 7.03107 14.7079 6.73907 14.3477 6.73907C13.9876 6.73907 13.6956 7.03107 13.6956 7.39126C13.6956 7.75146 13.9876 8.04345 14.3477 8.04345Z"
        style={{ fill: '#A2001D' }}
      />
      <path d="M12.1738 6.08698H13.0434V6.95655H12.1738V6.08698Z" style={{ fill: '#FFDA44' }} />
      <path d="M12.1738 8.04352H13.0434V8.91309H12.1738V8.04352Z" style={{ fill: '#FFDA44' }} />
      <path d="M12.1738 10H13.0434V10.8696H12.1738V10Z" style={{ fill: '#FFDA44' }} />
      <path d="M15.6521 6.08698H16.5217V6.95655H15.6521V6.08698Z" style={{ fill: '#FFDA44' }} />
      <path d="M15.6521 8.04352H16.5217V8.91309H15.6521V8.04352Z" style={{ fill: '#FFDA44' }} />
      <path d="M15.6521 10H16.5217V10.8696H15.6521V10Z" style={{ fill: '#FFDA44' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_601">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBritishVirginIslands;
