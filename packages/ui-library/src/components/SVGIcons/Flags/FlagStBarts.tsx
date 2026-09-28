import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagStBarts = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1635)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M17.855 8.04349H14.5652C14.5652 7.44319 14.0785 6.95654 13.4782 6.95654L12.6086 8.69566C12.6086 8.69566 13.5362 11.3044 13.5072 11.3044H14.5941C15.1945 11.3044 15.6811 10.8178 15.6811 10.2174C16.2814 10.2174 16.768 9.73081 16.768 9.13048H16.7318C17.3321 9.13044 17.855 8.64383 17.855 8.04349Z"
        style={{ fill: '#ACABB1' }}
      />
      <path
        d="M2.1449 8.04349H5.43474C5.43474 7.44319 5.92139 6.95654 6.52169 6.95654L7.39127 8.69566C7.39127 8.69566 6.46371 11.3044 6.49272 11.3044H5.40578C4.80544 11.3044 4.31883 10.8178 4.31883 10.2174C3.71849 10.2174 3.23188 9.73081 3.23188 9.13048H3.26808C2.66775 9.13044 2.1449 8.64383 2.1449 8.04349Z"
        style={{ fill: '#ACABB1' }}
      />
      <path
        d="M13.4782 13.913V14.3477H6.52171V13.913H4.78259V15.6521H6.52171V16.0869H13.4782V15.6521H15.2174V13.913H13.4782Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M6.52173 6.9565V11.3043C6.52173 13.9667 9.99997 14.7826 9.99997 14.7826C9.99997 14.7826 13.4782 13.9667 13.4782 11.3043V6.9565L9.99997 6.52173L6.52173 6.9565Z"
        style={{ fill: '#0052B4' }}
      />
      <path d="M6.52173 8.6958H13.4782V11.3045H6.52173V8.6958Z" style={{ fill: '#D80027' }} />
      <path
        d="M11.7391 4.78254V5.43472L11.3043 5.65212L10.8696 5.21732V3.91296H9.13043V5.21732L8.69566 5.65212L8.26085 5.43472V4.78254H6.52173V6.95644H13.4783V4.78254H11.7391Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1635">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagStBarts;
