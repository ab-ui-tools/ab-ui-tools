import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagKenya = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_2015)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 0C6.03543 0 2.60981 2.30723 0.99231 5.65219H19.0077C17.3903 2.30723 13.9646 0 10 0Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M10 20C6.03543 20 2.60981 17.6927 0.99231 14.3478H19.0077C17.3903 17.6927 13.9646 20 10 20Z"
        style={{ fill: '#496E2D' }}
      />
      <path
        d="M19.5278 6.95654H0.472227C0.165898 7.91627 0 8.93873 0 10C0 11.0613 0.165898 12.0838 0.472227 13.0435H19.5277C19.8341 12.0838 20 11.0613 20 10C20 8.93873 19.8341 7.91627 19.5278 6.95654Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M13.1138 4.62119L11.9296 4.07458L9.99998 8.44376L8.07037 4.07458L6.88611 4.62119L9.28173 10.0001L6.88611 15.3789L8.07037 15.9255L9.99998 11.5563L11.9296 15.9255L13.1138 15.3789L10.7182 10.0001L13.1138 4.62119Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10.8044 5.13638C10.3459 4.63571 10 4.3479 10 4.3479C10 4.3479 9.65412 4.63567 9.19568 5.13638V14.8637C9.65412 15.3645 10 15.6523 10 15.6523C10 15.6523 10.3459 15.3645 10.8044 14.8638V5.13638Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M7.82605 7.0017V12.9983C8.3105 13.8567 8.90343 14.5603 9.34781 15.0267V4.97327C8.90343 5.43971 8.31046 6.14334 7.82605 7.0017Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M12.1739 7.0017C11.6894 6.14331 11.0965 5.43971 10.6521 4.97327V15.0267C11.0964 14.5603 11.6894 13.8567 12.1739 12.9983V7.0017Z"
        style={{ fill: '#A2001D' }}
      />
      <path
        d="M12.174 7.00171V12.9983C12.6644 12.1292 13.0435 11.1015 13.0435 10C13.0435 8.89858 12.6644 7.87085 12.174 7.00171Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M7.82611 7.00171V12.9983C7.33568 12.1292 6.95654 11.1015 6.95654 10C6.95654 8.89858 7.33568 7.87085 7.82611 7.00171Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_2015">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagKenya;
