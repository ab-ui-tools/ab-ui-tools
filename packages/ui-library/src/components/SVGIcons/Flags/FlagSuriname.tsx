import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSuriname = ({
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
    <g clipPath="url(#clip0_9419_1662)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M19.378 6.52173H0.621953C0.220039 7.60509 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621953 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60509 19.378 6.52173Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M10.029 20C13.4541 20 16.4766 18.2777 18.2788 15.6522H1.77917C3.58144 18.2777 6.60386 20 10.029 20Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M10.029 0.00012207C13.4541 0.00012207 16.4766 1.72247 18.2788 4.34793H1.77917C3.58144 1.72247 6.60386 0.00012207 10.029 0.00012207Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M10 6.52173L10.8634 9.17876H13.6573L11.397 10.8211L12.2604 13.4782L10 11.8361L7.73969 13.4782L8.60313 10.8211L6.34277 9.17876H9.13672L10 6.52173Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1662">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSuriname;
