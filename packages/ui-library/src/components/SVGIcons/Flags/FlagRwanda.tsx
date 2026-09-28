import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagRwanda = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1191)">
      <path
        d="M0 9.99994C0 11.7324 0.440742 13.3618 1.2159 14.7826L10 15.6521L18.7841 14.7826C19.5593 13.3618 20 11.7324 20 9.99994L10 9.13037L0 9.99994Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M18.7841 5.21738C17.088 2.10895 13.7904 0 10 0C6.20957 0 2.91195 2.10895 1.2159 5.21738C0.440742 6.63812 0 8.26758 0 10H20C20 8.26758 19.5593 6.63812 18.7841 5.21738Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M10 20C13.7905 20 17.0881 17.891 18.7841 14.7826H1.21594C2.912 17.891 6.20961 20 10 20Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M11.3043 5.85236L12.5257 6.42685L11.8753 7.60966L13.2015 7.35599L13.3695 8.69564L14.2932 7.71033L15.2169 8.69564L15.3849 7.35599L16.7111 7.60959L16.0608 6.42681L17.2821 5.85236L16.0608 5.27794L16.7111 4.09513L15.385 4.3488L15.2169 3.00916L14.2932 3.99447L13.3695 3.00916L13.2015 4.3488L11.8753 4.09513L12.5256 5.27798L11.3043 5.85236Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1191">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagRwanda;
