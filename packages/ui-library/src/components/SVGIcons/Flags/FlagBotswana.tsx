import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagBotswana = ({
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
    <g clipPath="url(#clip0_9419_530)">
      <path
        d="M0.472188 6.95649C0.165859 7.91622 -3.90556e-05 8.9386 6.89667e-09 9.99997C-3.90556e-05 11.0613 0.165859 12.0837 0.472227 13.0434L10 13.4783L19.5277 13.0434C19.834 12.0837 20 11.0612 20 10C20 8.93868 19.8341 7.91622 19.5277 6.95649L9.99996 6.52173L0.472188 6.95649Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M20 9.99998C20 9.40674 19.948 8.82565 19.8489 8.2608H0.151094C0.0519531 8.82565 0 9.40666 0 9.99994C0 10.5932 0.0519922 11.1742 0.151094 11.7391H19.8489C19.948 11.1742 20 10.5932 20 9.99998Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M9.99994 20C14.4615 20 18.24 17.078 19.5277 13.0434H0.472168C1.75986 17.0779 5.53842 19.9999 9.99994 20Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M9.99998 6.10367e-05C5.53846 6.10367e-05 1.75994 2.92205 0.472168 6.95651L19.5276 6.95654C18.24 2.92205 14.4615 -1.70883e-05 9.99998 6.10367e-05Z"
        style={{ fill: '#338AF3' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_530">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagBotswana;
