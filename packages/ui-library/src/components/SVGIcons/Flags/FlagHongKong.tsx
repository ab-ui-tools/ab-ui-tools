import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagHongKong = ({
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
    <g clipPath="url(#clip0_9419_1735)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M11.0324 7.56511C10.8051 8.51038 10.4013 8.33011 10.2031 9.15448C9.03583 8.87382 8.31693 7.69999 8.59759 6.53261C8.87814 5.3653 10.0521 4.64639 11.2194 4.92706C10.8231 6.57577 11.2357 6.71968 11.0324 7.56511Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M8.00338 8.26563C8.83217 8.77383 8.53592 9.10223 9.25865 9.54547C8.63099 10.569 7.29252 10.8898 6.269 10.2622C5.24552 9.63462 4.92455 8.29606 5.5522 7.27258C6.99775 8.15899 7.26201 7.81106 8.00338 8.26563Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M7.73353 11.3629C8.47303 10.7318 8.69369 11.115 9.33857 10.5646C10.1181 11.4777 10.0096 12.8499 9.0965 13.6294C8.1833 14.4089 6.81111 14.3004 6.03174 13.3873C7.32135 12.2864 7.07209 11.9274 7.73353 11.3629Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10.5959 12.5767C10.224 11.6784 10.6567 11.5868 10.3325 10.8035C11.4419 10.3444 12.7134 10.8715 13.1726 11.9808C13.6317 13.0902 13.1045 14.3617 11.9951 14.8208C11.3468 13.2541 10.9285 13.3802 10.5959 12.5767Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M12.6347 10.2295C11.6655 10.3056 11.712 9.86573 10.8669 9.93206C10.773 8.73522 11.6673 7.6887 12.8642 7.59475C14.0611 7.50104 15.1076 8.39526 15.2014 9.59222C13.5109 9.72475 13.5016 10.1616 12.6347 10.2295Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1735">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagHongKong;
