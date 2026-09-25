import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBurundi = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_729)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M16.0889 2.0665C12.5088 -0.68842 7.49129 -0.68842 3.91113 2.06646L10 8.15537L16.0889 2.0665Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99996 11.8447L3.91113 17.9335C7.49129 20.6884 12.5088 20.6884 16.0889 17.9335L10 11.8446L9.99996 11.8447Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M8.1553 9.99998L2.06644 3.91107C-0.688486 7.49123 -0.688486 12.5087 2.06644 16.0889L8.1553 9.99998Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M11.8446 9.99998L17.9334 16.0889C20.6884 12.5087 20.6884 7.49123 17.9334 3.91107L11.8446 9.99998Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M10 14.3478C12.4013 14.3478 14.3478 12.4012 14.3478 9.99997C14.3478 7.59874 12.4013 5.65216 10 5.65216C7.5988 5.65216 5.65222 7.59874 5.65222 9.99997C5.65222 12.4012 7.5988 14.3478 10 14.3478Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10.0001 6.95654L10.3766 7.60873H11.1297L10.7531 8.26088L11.1297 8.91307H10.3766L10.0001 9.56525L9.62353 8.91307H8.87048L9.24701 8.26088L8.87048 7.60873H9.62353L10.0001 6.95654Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M8.08615 10L8.46268 10.6522H9.21572L8.8392 11.3043L9.21572 11.9565H8.46268L8.08615 12.6087L7.70959 11.9565H6.95654L7.33307 11.3043L6.95654 10.6522H7.70959L8.08615 10Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.9139 10L12.2904 10.6522H13.0435L12.667 11.3043L13.0435 11.9565H12.2904L11.9139 12.6087L11.5373 11.9565H10.7843L11.1608 11.3043L10.7843 10.6522H11.5373L11.9139 10Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_729">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBurundi;
