import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBalearicIslands = ({
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
    <g clipPath="url(#clip0_9419_282)">
      <path
        d="M9.99998 6.10352e-05C15.5228 6.10352e-05 20 4.47724 20 10C20 15.5228 15.5228 20 9.99998 20C4.47718 20 0 15.5228 0 10"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M9.78259 4.44451H18.3155C17.7537 3.60518 17.068 2.85596 16.2848 2.22229H9.78259V4.44451Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.78259 8.88893H19.9382C19.853 8.11839 19.6803 7.37436 19.4302 6.66675H9.78259V8.88893Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M0.569813 13.3334H19.4301C19.6802 12.6258 19.853 11.8817 19.9382 11.1111H0.0617676C0.146924 11.8817 0.319658 12.6258 0.569813 13.3334Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M3.71511 17.7778H16.2848C17.0679 17.1442 17.7536 16.3949 18.3155 15.5556H1.68445C2.24632 16.3949 2.93195 17.1442 3.71511 17.7778Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10 6.10352e-05C4.47718 6.10352e-05 -3.90622e-05 4.47724 2.55604e-10 10.0001C2.28226 10 4.47718 10.0001 9.99998 10.0001L10 6.10352e-05Z"
        style={{ fill: '#4A1F63' }}
      />
      <path
        d="M8.26093 5.21741V6.08698H7.82617V5.21741H6.9566V6.08698H6.52183V4.34784H4.7827V6.08698H4.34789V5.21741H3.47836V6.08698H3.04356V5.21741H2.17395V7.82608H9.1305V5.21741H8.26093Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_282">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBalearicIslands;
