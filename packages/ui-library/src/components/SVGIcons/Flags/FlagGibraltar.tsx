import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagGibraltar = ({
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
    <g clipPath="url(#clip0_9419_1553)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F9F9F9' }}
      />
      <path
        d="M10.0001 20C14.2997 20 17.9652 17.2863 19.3781 13.4783H0.62207C2.03504 17.2863 5.70043 20 10.0001 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M13.9132 8.26083V6.95649H14.348V6.08692H13.4784V6.52173H12.6089V6.08692H11.7393V6.95649H12.1741V8.26083H11.3045V5.21743H11.7393V4.3479H10.8697V4.78259H10.4349V4.3479H9.56538V4.78259H9.13058V4.3479H8.26101V5.21743H8.69581V8.26083H7.82624V6.95649H8.26101V6.08692H7.39144V6.52173H6.5219V6.08692H5.65233V6.95649H6.0871V8.26083H5.21753V11.7391H14.7828V8.26083H13.9132Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M10.0001 11.3043C9.27974 11.3043 8.69575 11.8883 8.69575 12.6087C8.69575 13.1765 9.0588 13.6594 9.56532 13.8385V15.6522H8.26099V17.3913H10.4349V13.8385C10.9414 13.6595 11.3045 13.1765 11.3045 12.6087C11.3044 11.8883 10.7204 11.3043 10.0001 11.3043ZM10.0001 13.0435C9.75997 13.0435 9.56532 12.8488 9.56532 12.6087C9.56532 12.3686 9.75997 12.1739 10.0001 12.1739C10.2402 12.1739 10.4349 12.3686 10.4349 12.6087C10.4349 12.8488 10.2402 13.0435 10.0001 13.0435Z"
        style={{ fill: '#FFDA44' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1553">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagGibraltar;
