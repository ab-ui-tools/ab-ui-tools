import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNamibia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_499)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.92896 17.0711C3.34845 17.4906 3.79603 17.8647 4.26552 18.194L18.194 4.26552C17.8647 3.79603 17.4906 3.34845 17.071 2.92896C16.6515 2.50947 16.204 2.13541 15.7345 1.80603L1.80603 15.7345C2.13537 16.204 2.50947 16.6516 2.92896 17.0711Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M2.92906 2.92902C-0.225788 6.08387 -0.831414 10.8218 1.11089 14.5852L14.5852 1.11094C10.8218 -0.831369 6.08382 -0.225666 2.92906 2.92902Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M17.071 17.0711C20.2258 13.9163 20.8314 9.17832 18.8892 5.41492L5.41492 18.8892C9.17824 20.8315 13.9162 20.2259 17.071 17.0711Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M8.26085 5.65217L7.14031 6.17924L7.73703 7.26447L6.52027 7.03174L6.36605 8.26084L5.51855 7.35682L4.67101 8.26084L4.51687 7.03174L3.30007 7.26443L3.89675 6.1792L2.77625 5.65217L3.89679 5.12506L3.30007 4.0399L4.51683 4.27264L4.67105 3.04346L5.51855 3.94752L6.36609 3.04346L6.52027 4.27264L7.73703 4.0399L7.14039 5.1251L8.26085 5.65217Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_499">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNamibia;
