import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagPhilippines = ({
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
    <g clipPath="url(#clip0_9419_1033)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 0V10L2.92896 17.0711C4.7386 18.8807 7.2386 20 10 20C15.5229 20 20 15.5228 20 10C20 4.47719 10 0 10 0Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10 0C7.2386 0 4.7386 1.1193 2.92896 2.92891C5.38247 5.38242 6.25345 6.25344 10 10H20C20 4.47719 15.5229 0 10 0Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M6.84736 9.99998L5.62611 9.42553L6.27646 8.24275L4.95029 8.49646L4.78225 7.15674L3.8585 8.14205L2.93478 7.15674L2.7667 8.49646L1.44057 8.24272L2.09092 9.42553L0.869629 9.99998L2.09092 10.5744L1.44057 11.7572L2.76682 11.5035L2.93475 12.8432L3.8585 11.8579L4.78225 12.8432L4.95029 11.5035L6.27639 11.7572L5.62607 10.5745L6.84736 9.99998Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M2.66694 3.91302L3.07335 4.48111L3.73917 4.27021L3.3244 4.83224L3.73081 5.40033L3.06808 5.17959L2.65335 5.74158L2.65855 5.04314L1.99585 4.82236L2.66179 4.61146L2.66694 3.91302Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M2.66694 14.2584L3.07335 14.8264L3.73917 14.6155L3.3244 15.1776L3.73081 15.7457L3.06808 15.5249L2.65335 16.0869L2.65855 15.3885L1.99585 15.1677L2.66179 14.9568L2.66694 14.2584Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M8.46358 9.08569L8.05722 9.65378L7.39136 9.4428L7.80612 10.0049L7.39972 10.573L8.06245 10.3522L8.47722 10.9142L8.47198 10.2158L9.13468 9.99503L8.46878 9.78413L8.46358 9.08569Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1033">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagPhilippines;
