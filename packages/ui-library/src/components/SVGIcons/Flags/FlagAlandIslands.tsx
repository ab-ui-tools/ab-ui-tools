import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagAlandIslands = ({
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
    <g clipPath="url(#clip0_9419_75)">
      <path
        d="M19.6555 12.6087C19.8797 11.7769 20 10.9026 20 9.99998C20 9.09736 19.8797 8.22306 19.6555 7.39127L9.13043 0.0380249C7.17648 0.206384 5.3834 0.936462 3.91305 2.06619L0.344492 7.39127C0.120313 8.22306 0 9.09736 0 9.99998C0 10.8973 0.118867 11.7668 0.340547 12.5942L3.91301 17.9338C5.38336 19.0635 7.17645 19.7936 9.13039 19.9619L19.6555 12.6087Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M0.344482 12.6087C0.923076 14.7555 2.19827 16.6162 3.91304 17.9338V12.6087H0.344482Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.13037 19.9619C9.41701 19.9866 9.70689 20 9.99994 20C14.6202 20 18.5079 16.8664 19.6554 12.6087H9.13037V19.9619Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.6554 7.39129C18.5079 3.13363 14.6202 0 9.99994 0C9.70689 0 9.41701 0.0133594 9.13037 0.0380469V7.39129H19.6554Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M3.91304 2.06622C2.19827 3.3838 0.923076 5.24446 0.344482 7.3913H3.91304V2.06622Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.9154 8.69564H7.82613H7.82609V0.237671C6.90195 0.442593 6.02582 0.774741 5.21738 1.21587V8.6956H0.0846484C0.0289844 9.12259 0 9.55791 0 9.99998C0 10.442 0.0289844 10.8774 0.0846484 11.3043H5.21734H5.21738V18.784C6.02582 19.2251 6.90195 19.5574 7.82609 19.7622V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.442 20 9.99998C20 9.55791 19.9709 9.12259 19.9154 8.69564Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_75">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagAlandIslands;
