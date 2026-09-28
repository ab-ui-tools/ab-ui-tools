import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNorthKorea = ({
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
    <g clipPath="url(#clip0_9419_721)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99994 0C6.96904 0 4.2533 1.34859 2.41943 3.47824H17.5804C15.7466 1.34859 13.0308 0 9.99994 0Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M17.5805 16.5217H2.41943C4.2533 18.6514 6.96904 20 9.99994 20C13.0308 20 15.7466 18.6514 17.5805 16.5217Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M18.5323 4.78259H1.46773C0.536914 6.30154 0 8.08798 0 9.99998C0 11.912 0.536914 13.6985 1.46773 15.2174H18.5323C19.4631 13.6985 20 11.912 20 9.99998C20 8.08798 19.4631 6.30154 18.5323 4.78259Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.15213 13.8478C8.27722 13.8478 9.99995 12.1251 9.99995 9.99997C9.99995 7.87489 8.27722 6.15216 6.15213 6.15216C4.02705 6.15216 2.30432 7.87489 2.30432 9.99997C2.30432 12.1251 4.02705 13.8478 6.15213 13.8478Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M6.1522 6.15216L7.01552 8.80923H9.81388L7.54916 10.4515L8.41923 13.1165L6.1522 11.4664L3.88861 13.1134L4.75525 10.4515L2.49255 8.80923H5.28884L6.1522 6.15216Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_721">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNorthKorea;
