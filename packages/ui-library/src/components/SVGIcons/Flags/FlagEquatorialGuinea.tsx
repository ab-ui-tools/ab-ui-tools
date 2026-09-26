import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEquatorialGuinea = ({
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
    <g clipPath="url(#clip0_9419_1259)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M6.08689 6.52176H19.3779C17.965 2.71375 14.2996 0 9.99994 0C7.23846 0 4.73873 1.11949 2.9292 2.92926L6.08689 6.52176Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M6.08689 13.4783H19.3779C17.965 17.2863 14.2996 20 9.99994 20C7.23846 20 4.73873 18.8805 2.9292 17.0708L6.08689 13.4783Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M11.7391 8.26086V10.4348C11.7391 11.766 13.4783 12.174 13.4783 12.174C13.4783 12.174 15.2174 11.766 15.2174 10.4348V8.26086H11.7391Z"
        style={{ fill: '#DEDDE0' }}
      />
      <path d="M13.0435 10.0435H13.913V11.3043H13.0435V10.0435Z" style={{ fill: '#786145' }} />
      <path
        d="M14.3479 9.56525C14.3479 9.08498 13.9586 8.69568 13.4783 8.69568C12.998 8.69568 12.6087 9.08498 12.6087 9.56525C12.3686 9.56525 12.174 9.7599 12.174 10C12.174 10.2401 12.3686 10.4348 12.6087 10.4348H14.3479C14.588 10.4348 14.7826 10.2401 14.7826 10C14.7826 9.7599 14.588 9.56525 14.3479 9.56525Z"
        style={{ fill: '#6DA544' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1259">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEquatorialGuinea;
