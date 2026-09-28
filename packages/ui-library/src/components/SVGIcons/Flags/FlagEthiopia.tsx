import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEthiopia = ({
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
    <g clipPath="url(#clip0_9419_1276)">
      <path
        d="M0 10C0 11.2233 0.220039 12.395 0.622031 13.4784L10 14.3478L19.378 13.4784C19.78 12.395 20 11.2233 20 10C20 8.79359 19.7863 7.63707 19.3948 6.56625L10 5.65222L0.605234 6.56628C0.213711 7.63707 0 8.79359 0 10H0Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.99996 20C14.2996 20 17.965 17.2863 19.378 13.4783H0.621948C2.03488 17.2863 5.70031 20 9.99996 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99996 0C5.70031 0 2.03488 2.71375 0.621948 6.52176H19.378C17.965 2.71375 14.2996 0 9.99996 0Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M10 14.7826C12.6414 14.7826 14.7826 12.6414 14.7826 10C14.7826 7.35866 12.6414 5.21741 10 5.21741C7.35866 5.21741 5.21741 7.35866 5.21741 10C5.21741 12.6414 7.35866 14.7826 10 14.7826Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.999 6.29651L10.8624 8.95362H13.6607L11.3959 10.5958L12.2661 13.2608L9.999 11.6108L7.73541 13.2578L8.60205 10.5958L6.33936 8.95362H9.13564L9.999 6.29651Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M13.4423 10.6613L10.7034 9.77128L12.3961 7.44159L11.6927 6.93042L9.99988 9.26026L8.30727 6.93046L7.60375 7.44155L9.29641 9.77144L6.55762 10.6612L6.82629 11.4883L9.5652 10.5984V13.4782H10.4347V10.5984L13.1735 11.4883L13.4423 10.6613Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1276">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEthiopia;
