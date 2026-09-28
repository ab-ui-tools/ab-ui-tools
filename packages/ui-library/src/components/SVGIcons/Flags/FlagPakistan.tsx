import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagPakistan = ({
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
    <g clipPath="url(#clip0_9419_882)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M0 9.99998C0 13.7904 2.10895 17.088 5.21738 18.7841V1.21588C2.10895 2.91194 0 6.20955 0 9.99998Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 0C8.2676 0 6.63815 0.440742 5.21741 1.2159V18.7841C6.63815 19.5593 8.2676 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47719 15.5228 0 10 0Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M14.2755 11.6538C13.0104 12.5679 11.2438 12.2834 10.3297 11.0183C9.41558 9.75316 9.70015 7.98655 10.9653 7.07249C11.3597 6.78749 11.8029 6.61902 12.2538 6.56046C11.3864 6.43074 10.4694 6.6262 9.7023 7.18046C8.14527 8.30554 7.79499 10.4798 8.92003 12.0369C10.0451 13.5939 12.2194 13.9442 13.7765 12.8191C14.5436 12.2648 15.0171 11.4557 15.1662 10.5913C14.9691 11.0009 14.67 11.3688 14.2755 11.6538Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M14.2213 6.52185L14.934 7.28986L15.8846 6.84955L15.3743 7.76455L16.087 8.53263L15.059 8.33009L14.5488 9.24517L14.4237 8.20494L13.3958 8.0024L14.3464 7.56209L14.2213 6.52185Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_882">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagPakistan;
