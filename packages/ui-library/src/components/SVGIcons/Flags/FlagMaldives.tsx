import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagMaldives = ({
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
    <g clipPath="url(#clip0_9419_291)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#D80027' }}
      />
      <path d="M3.47827 5.21741H16.5217V14.7826H3.47827V5.21741Z" style={{ fill: '#6DA544' }} />
      <path
        d="M11.6105 12.8261C10.0497 12.8261 8.78439 11.5608 8.78439 10C8.78439 8.43923 10.0497 7.17392 11.6105 7.17392C12.0971 7.17392 12.5551 7.29696 12.9548 7.5136C12.3277 6.90028 11.4701 6.52173 10.5235 6.52173C8.60259 6.52173 7.04529 8.07899 7.04529 9.99997C7.04529 11.9209 8.60259 13.4782 10.5235 13.4782C11.4701 13.4782 12.3277 13.0997 12.9548 12.4863C12.5551 12.7031 12.0971 12.8261 11.6105 12.8261Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_291">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagMaldives;
