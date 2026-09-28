import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBelize = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_400)">
      <path
        d="M20 9.99999C20 6.56792 18.2707 3.54006 15.6362 1.73913L10 1.30432L4.36379 1.73909C1.7293 3.54006 0 6.56795 0 9.99999C0 13.4321 1.7293 16.4599 4.36379 18.2608L10 18.6957L15.6362 18.2609C18.2707 16.4599 20 13.4321 20 9.99999Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M15.6362 1.73914C14.0313 0.642031 12.0908 0 9.99998 0C7.90924 0 5.96865 0.642031 4.36377 1.73914H15.6362Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M4.36377 18.2609C5.96861 19.358 7.90924 20 9.99998 20C12.0908 20 14.0313 19.358 15.6362 18.2609H4.36377Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M9.9999 14.7826C12.6413 14.7826 14.7825 12.6414 14.7825 10C14.7825 7.35866 12.6413 5.21741 9.9999 5.21741C7.35854 5.21741 5.21729 7.35866 5.21729 10C5.21729 12.6414 7.35854 14.7826 9.9999 14.7826Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99996 13.9131C12.1611 13.9131 13.913 12.1611 13.913 10C13.913 7.83891 12.1611 6.08698 9.99996 6.08698C7.83884 6.08698 6.08691 7.83891 6.08691 10C6.08691 12.1611 7.83884 13.9131 9.99996 13.9131Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M10.0001 12.6087C11.4408 12.6087 12.6088 11.4408 12.6088 10C12.6088 8.55926 11.4408 7.3913 10.0001 7.3913C8.55932 7.3913 7.39136 8.55926 7.39136 10C7.39136 11.4408 8.55932 12.6087 10.0001 12.6087Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99996 9.34784L8.58691 10V11.087L9.99996 11.9566L11.413 11.087V10L9.99996 9.34784Z"
        style={{ fill: '#0052B4' }}
      />
      <path d="M8.58691 8.69568H11.413V10H8.58691V8.69568Z" style={{ fill: '#FFDA44' }} />
    </g>
    <defs>
      <clipPath id="clip0_9419_400">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBelize;
