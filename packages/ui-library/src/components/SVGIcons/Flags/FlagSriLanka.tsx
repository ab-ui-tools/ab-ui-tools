import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSriLanka = ({
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
    <g clipPath="url(#clip0_9419_1628)">
      <path
        d="M9.99998 20C15.5228 20 20 15.5228 20 9.99998C20 4.47714 15.5228 0 9.99998 0C4.47714 0 0 4.47714 0 9.99998C0 15.5228 4.47714 20 9.99998 20Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M7.82621 1.73914H4.36389C4.21046 1.84402 4.0603 1.9532 3.91315 2.06621L3.04358 9.99997L3.91315 17.9337C4.0603 18.0468 4.21046 18.156 4.36389 18.2608H7.82621V1.73914Z"
        style={{ fill: '#FF9811' }}
      />
      <path
        d="M0 10.0001C0 13.2323 1.53391 16.1058 3.91305 17.9339V2.06628C1.53391 3.89433 0 6.76786 0 10.0001Z"
        style={{ fill: '#6DA544' }}
      />
      <path d="M16.087 6.09631V6.34651L16.0963 6.34792L16.087 6.09631Z" style={{ fill: '#FFDA44' }} />
      <path
        d="M19.203 12.6087H17.3189L16.5218 13.4783V15.2174H14.7827V14.3478H15.6522V12.6087H11.7392V13.6956H10.8696V11.6241C10.6028 11.3853 10.4348 11.0384 10.4348 10.6522V5C10.4348 4.27965 11.0188 3.69566 11.7392 3.69566V11.7392H13.4783L14.075 11.2418C13.9708 10.9936 13.9131 10.721 13.9131 10.4348V9.13048H12.6087V6.5218H15.2174C15.2174 6.08703 15.8696 5.65223 15.8696 5.65223C15.8696 5.65223 16.5218 6.087 16.5218 6.5218V7.17399V9.13052C17.0055 9.13626 17.774 9.12372 18.6043 9.13052C18.3862 8.74927 18.2609 8.29688 18.2609 7.82618C18.2609 7.05895 18.5922 6.36918 19.1194 5.89184C18.3594 4.20766 17.1467 2.77164 15.6362 1.73914H9.13049V18.2609H15.6363C17.473 17.0054 18.8694 15.1534 19.5469 12.9839L19.203 12.6087Z"
        style={{ fill: '#A2001D' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1628">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSriLanka;
