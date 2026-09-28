import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagTunisia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1897)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10 14.7826C12.6414 14.7826 14.7826 12.6414 14.7826 10C14.7826 7.35866 12.6414 5.21741 10 5.21741C7.35866 5.21741 5.21741 7.35866 5.21741 10C5.21741 12.6414 7.35866 14.7826 10 14.7826Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10.5892 8.17139L11.4097 9.30205L12.7385 8.87119L11.9167 10.0009L12.7371 11.1315L11.4087 10.699L10.587 11.8287L10.5878 10.4318L9.25952 9.99928L10.5883 9.56842L10.5892 8.17139Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.0869 12.8261C9.52614 12.8261 8.26083 11.5608 8.26083 10C8.26083 8.43923 9.52614 7.17392 11.0869 7.17392C11.5736 7.17392 12.0315 7.29696 12.4313 7.5136C11.8041 6.90028 10.9465 6.52173 9.99997 6.52173C8.07903 6.52173 6.52173 8.07899 6.52173 9.99997C6.52173 11.9209 8.07903 13.4782 9.99997 13.4782C10.9465 13.4782 11.8041 13.0997 12.4313 12.4863C12.0315 12.7031 11.5736 12.8261 11.0869 12.8261Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1897">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagTunisia;
