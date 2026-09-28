import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagStLucia = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1644)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#338AF3' }}
      />
      <path d="M6.30432 13.4782H13.6956L9.99998 4.78259L6.30432 13.4782Z" style={{ fill: '#F3F3F3' }} />
      <path d="M7.58875 12.6088L10 7.12402L12.4113 12.6088H7.58875Z" style={{ fill: '#333333' }} />
      <path d="M6.30432 13.4782H13.6956L9.99998 10L6.30432 13.4782Z" style={{ fill: '#FFDA44' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_1644">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagStLucia;
