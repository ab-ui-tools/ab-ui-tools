import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAlbania = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_83)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M15.6522 7.42221H12.0301C12.2537 7.18807 12.3913 6.87108 12.3913 6.52174C12.3913 5.80139 11.8074 5.21741 11.087 5.21741C10.6332 5.21741 10.2337 5.44928 10 5.80088C9.76642 5.44928 9.36689 5.21741 8.9131 5.21741C8.19274 5.21741 7.60876 5.80139 7.60876 6.52174C7.60876 6.87108 7.74638 7.18811 7.96997 7.42221H4.3479C4.3479 8.38272 5.1845 9.16131 6.14493 9.16131H6.08696C6.08696 10.1219 6.8656 10.9005 7.82614 10.9005C7.82614 11.2116 7.90813 11.5032 8.05126 11.7557L6.60868 13.1983L7.71548 14.3051L9.28548 12.7351C9.34696 12.7576 9.4106 12.7757 9.4763 12.788L8.52759 14.93L10 16.5217L11.4725 14.9299L10.5238 12.788C10.5895 12.7757 10.6531 12.7576 10.7146 12.735L12.2846 14.305L13.3914 13.1982L11.9488 11.7556C12.092 11.5032 12.174 11.2115 12.174 10.9004C13.1345 10.9004 13.9131 10.1218 13.9131 9.1612H13.8552C14.8156 9.16127 15.6522 8.38272 15.6522 7.42221Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_83">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAlbania;
