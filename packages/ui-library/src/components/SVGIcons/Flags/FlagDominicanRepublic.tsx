import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagDominicanRepublic = ({
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
    <g clipPath="url(#clip0_9419_1152)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0.344482 12.6088C1.26784 16.0347 3.96538 18.7322 7.39132 19.6556V12.6088H0.344482Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M7.39128 0.344482C3.96538 1.2678 1.2678 3.96538 0.344482 7.39128H7.39132V0.344482H7.39128Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.6556 7.39128C18.7322 3.96538 16.0347 1.2678 12.6088 0.344482V7.39132H19.6556V7.39128Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M12.6088 19.6555C16.0347 18.7321 18.7322 16.0346 19.6556 12.6086H12.6088V19.6555Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M12.6087 9.99995C12.6087 11.4407 11.4407 12.6087 9.99995 12.6087C8.5592 12.6087 7.39124 11.4407 7.39124 9.99995C7.39124 8.55917 9.99995 7.39124 9.99995 7.39124C9.99995 7.39124 12.6087 8.55917 12.6087 9.99995Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M7.39124 9.99995C7.39124 8.55917 8.5592 7.39124 9.99995 7.39124C11.4407 7.39124 12.6087 8.55917 12.6087 9.99995"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M8.53259 8.69568V10.3261C8.53259 11.1365 9.18955 11.7935 9.99998 11.7935C10.8104 11.7935 11.4674 11.1365 11.4674 10.3261V8.69568H8.53259Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1152">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagDominicanRepublic;
