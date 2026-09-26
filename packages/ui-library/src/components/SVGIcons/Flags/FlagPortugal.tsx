import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagPortugal = ({
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
    <g clipPath="url(#clip0_9419_1058)">
      <path
        d="M0 10C0 14.2996 2.71375 17.9651 6.52168 19.378L7.39129 9.99998L6.52168 0.622009C2.71375 2.03498 0 5.70037 0 10Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M20 10C20 4.47719 15.5229 0 10 0C8.77685 0 7.60509 0.220039 6.52173 0.621992V19.378C7.60509 19.78 8.77685 20 10 20C15.5229 20 20 15.5228 20 10Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.5217 13.4782C8.44268 13.4782 9.99994 11.921 9.99994 9.99997C9.99994 8.07899 8.44268 6.52173 6.5217 6.52173C4.60072 6.52173 3.04346 8.07899 3.04346 9.99997C3.04346 11.921 4.60072 13.4782 6.5217 13.4782Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M4.56519 8.26086V10.4348C4.56519 11.5153 5.44112 12.3913 6.52171 12.3913C7.60229 12.3913 8.47823 11.5154 8.47823 10.4348V8.26086H4.56519Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.52182 11.0869C6.16221 11.0869 5.86963 10.7943 5.86963 10.4347V9.56519H7.17396V10.4348C7.17396 10.7943 6.88139 11.0869 6.52182 11.0869Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1058">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagPortugal;
