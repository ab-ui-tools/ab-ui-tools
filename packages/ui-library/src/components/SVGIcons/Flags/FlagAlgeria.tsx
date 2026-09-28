import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAlgeria = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_86)">
      <path
        d="M10 0C15.5228 0 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C10 19.5652 8.69568 10 8.69568 10L10 0Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path d="M10 20C4.47719 20 0 15.5228 0 10C0 4.47719 4.47719 0 10 0" style={{ fill: '#496E2D' }} />
      <path
        d="M12.1485 8.08191L11.3281 9.21257L9.99927 8.78164L10.8211 9.91132L10.0007 11.042L11.329 10.6095L12.1508 11.7392L12.1499 10.3423L13.4782 9.90976L12.1495 9.4789L12.1485 8.08191Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10.8296 12.8261C9.26882 12.8261 8.00351 11.5608 8.00351 10C8.00351 8.43923 9.26882 7.17392 10.8296 7.17392C11.3162 7.17392 11.7742 7.29696 12.1739 7.5136C11.5467 6.90028 10.6891 6.52173 9.74265 6.52173C7.82163 6.52173 6.2644 8.07899 6.2644 9.99997C6.2644 11.9209 7.82167 13.4782 9.74265 13.4782C10.6891 13.4782 11.5468 13.0997 12.1739 12.4863C11.7742 12.7031 11.3162 12.8261 10.8296 12.8261Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_86">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAlgeria;
