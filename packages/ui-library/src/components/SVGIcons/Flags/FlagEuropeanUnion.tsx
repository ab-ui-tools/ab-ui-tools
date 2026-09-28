import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagEuropeanUnion = ({
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
    <g clipPath="url(#clip0_9419_1284)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M10 3.91309L10.3238 4.90953H11.3715L10.5239 5.52535L10.8476 6.5218L10 5.90594L9.15237 6.5218L9.47616 5.52535L8.62854 4.90953H9.67624L10 3.91309Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M5.6959 5.69594L6.6295 6.17157L7.37032 5.43079L7.20637 6.46555L8.13993 6.94122L7.10512 7.10512L6.94122 8.13997L6.46555 7.20641L5.43079 7.37036L6.17161 6.62954L5.6959 5.69594Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M3.91309 10L4.90953 9.67624V8.62854L5.52531 9.4762L6.5218 9.15241L5.9059 10L6.5218 10.8476L5.52531 10.5239L4.90953 11.3715V10.3238L3.91309 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M5.6959 14.3042L6.17157 13.3706L5.43079 12.6298L6.46559 12.7938L6.94118 11.8602L7.10512 12.895L8.13989 13.0589L7.20645 13.5346L7.37032 14.5694L6.6295 13.8286L5.6959 14.3042Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M10 16.087L9.6762 15.0906H8.62854L9.4762 14.4748L9.15237 13.4784L10 14.0942L10.8476 13.4784L10.5239 14.4748L11.3715 15.0906H10.3238L10 16.087Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M14.3042 14.3042L13.3706 13.8286L12.6298 14.5694L12.7937 13.5346L11.8602 13.0589L12.895 12.895L13.0589 11.8602L13.5345 12.7938L14.5693 12.6298L13.8285 13.3707L14.3042 14.3042Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M16.0869 10L15.0905 10.3238V11.3715L14.4746 10.5239L13.4783 10.8476L14.0941 10L13.4783 9.15241L14.4747 9.4762L15.0905 8.62854V9.67627L16.0869 10Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M14.3042 5.6959L13.8285 6.6295L14.5693 7.37032L13.5345 7.20633L13.0589 8.13989L12.895 7.10508L11.8602 6.94114L12.7937 6.46551L12.6298 5.43079L13.3707 6.17157L14.3042 5.6959Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1284">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagEuropeanUnion;
