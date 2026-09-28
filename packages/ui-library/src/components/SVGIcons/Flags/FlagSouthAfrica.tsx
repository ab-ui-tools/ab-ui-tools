import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSouthAfrica = ({
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
    <g clipPath="url(#clip0_9419_1507)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.92893 17.0711C-0.976309 13.1659 -0.976309 6.83423 2.92893 2.92896C2.92865 2.92938 8.69568 10 8.69568 10L2.92893 17.0711Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M8.69561 9.99998L1.32623 5.02002C1.09775 5.41717 0.89627 5.8317 0.723145 6.26076L4.45396 10L0.723262 13.7395C0.89623 14.1682 1.09752 14.5825 1.32584 14.9794L8.69561 9.99998Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M19.9154 8.69568H8.69542L2.92886 2.92908C2.30745 3.55048 1.76757 4.25326 1.32632 5.02009L6.29659 10L1.32593 14.9793C1.76718 15.7463 2.30729 16.4494 2.92886 17.0709L8.69542 11.3043H19.9154C19.971 10.8774 20 10.4421 20 10C20 9.55794 19.971 9.12263 19.9154 8.69568Z"
        style={{ fill: '#6DA544' }}
      />
      <path
        d="M3.91162 17.9327C5.59791 19.2289 7.70873 20.0001 9.99998 20.0001C14.6203 20.0001 18.508 16.8664 19.6555 12.6088H9.23564L3.91162 17.9327Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.6555 7.39129C18.508 3.13363 14.6203 0 9.99998 0C7.70873 0 5.59791 0.771133 3.91162 2.0673L9.23561 7.39129H19.6555Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1507">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSouthAfrica;
