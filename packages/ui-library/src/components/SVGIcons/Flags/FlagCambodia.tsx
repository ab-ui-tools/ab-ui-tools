import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagCambodia = ({
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
    <g clipPath="url(#clip0_9419_742)">
      <path
        d="M0 10C0 11.7324 0.440742 13.3619 1.2159 14.7826L10 15.6522L18.7841 14.7826C19.5593 13.3619 20 11.7324 20 10C20 8.26761 19.5593 6.63815 18.7841 5.21741L10 4.34784L1.2159 5.21741C0.440742 6.63815 0 8.26761 0 10H0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M1.21594 5.21738H18.7841C17.0881 2.10895 13.7905 0 10 0C6.20961 0 2.912 2.10895 1.21594 5.21738Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M10 20C13.7905 20 17.0881 17.891 18.7841 14.7826H1.21594C2.912 17.891 6.20961 20 10 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M13.4783 11.9565V10.6522H12.6087V8.91303L11.7392 8.04346L10.8696 8.91303V7.17389L10 6.30432L9.13046 7.17389V8.91303L8.26089 8.04346L7.39132 8.91303V10.6522H6.52179V11.9565H5.65222V13.2608H14.3478V11.9565H13.4783Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_742">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagCambodia;
