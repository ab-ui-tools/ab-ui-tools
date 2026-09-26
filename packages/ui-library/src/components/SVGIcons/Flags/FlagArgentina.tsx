import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagArgentina = ({
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
    <g clipPath="url(#clip0_9419_213)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99992 0C6.03531 0 2.60969 2.30723 0.992188 5.65219H19.0076C17.3902 2.30723 13.9645 0 9.99992 0Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M9.99992 20C13.9645 20 17.3902 17.6928 19.0077 14.3478H0.992188C2.60969 17.6928 6.03531 20 9.99992 20Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M12.989 9.99998L11.7677 10.5745L12.418 11.7572L11.0919 11.5035L10.9238 12.8432L10.0001 11.8579L9.07635 12.8432L8.90834 11.5035L7.58217 11.7572L8.23248 10.5744L7.01123 9.99998L8.23252 9.42549L7.58217 8.24275L8.9083 8.49643L9.07639 7.15674L10.0001 8.14205L10.9238 7.15674L11.0919 8.49643L12.4181 8.24275L11.7677 9.42553L12.989 9.99998Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_213">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagArgentina;
