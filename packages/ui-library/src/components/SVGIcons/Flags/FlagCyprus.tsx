import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCyprus = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1095)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#FCFCFC' }}
      />
      <path
        d="M15.6522 8.69568C15.3479 8.69568 14.971 8.69568 14.3479 8.69568C14.3479 11.0969 12.4012 13.0435 10 13.0435C7.59876 13.0435 5.65224 11.0969 5.65224 8.69568C5.23192 8.69568 4.76813 8.69568 4.3479 8.69568C4.3479 11.2822 6.08524 13.4629 8.45673 14.1345C8.19673 14.6285 8.23634 15.2503 8.60774 15.7138C9.09556 15.3228 9.6006 14.9181 10.029 14.5748C10.4575 14.9181 10.9625 15.3228 11.4503 15.7138C11.8254 15.2457 11.8623 14.616 11.5937 14.1197C13.9392 13.4316 15.6522 11.2638 15.6522 8.69568Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M6.52173 8.26088C6.52173 8.26088 6.52173 10.4348 8.69563 10.4348L9.1304 10.8696H9.99997C9.99997 10.8696 10.4347 9.56522 11.3043 9.56522C11.3043 9.56522 11.3043 8.69565 12.1739 8.69565C13.0434 8.69565 13.4782 8.69565 13.4782 8.69565C13.4782 8.69565 13.0434 6.95651 15.2174 5.65217L14.3478 5.21741C14.3478 5.21741 11.3043 7.39131 9.1304 6.95655V7.82612H8.26083L7.82606 7.39135L6.52173 8.26088Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1095">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCyprus;
