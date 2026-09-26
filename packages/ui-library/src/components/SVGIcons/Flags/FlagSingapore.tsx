import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSingapore = ({
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
    <g clipPath="url(#clip0_9419_1374)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path d="M0 10C0 4.47719 4.47719 0 10 0C15.5228 0 20 4.47719 20 10" style={{ fill: '#D80027' }} />
      <path
        d="M6.08685 5.21739C6.08685 3.76043 7.11079 2.54333 8.47813 2.24469C8.26798 2.19883 8.04997 2.17395 7.82595 2.17395C6.14505 2.17395 4.78247 3.53653 4.78247 5.21743C4.78247 6.89832 6.14505 8.2609 7.82595 8.2609C8.04989 8.2609 8.26794 8.23602 8.47813 8.19012C7.11079 7.89149 6.08685 6.67438 6.08685 5.21739Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M9.99999 2.39136L10.2158 3.05562H10.9143L10.3492 3.4662L10.5651 4.13046L9.99999 3.71995L9.43491 4.13046L9.65077 3.4662L9.08569 3.05562H9.78413L9.99999 2.39136Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M8.30549 3.69568L8.52131 4.35998H9.21979L8.65471 4.77052L8.87057 5.43478L8.30549 5.02427L7.74033 5.43478L7.95623 4.77052L7.39111 4.35998H8.08959L8.30549 3.69568Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M11.6943 3.69568L11.9102 4.35998H12.6087L12.0435 4.77052L12.2594 5.43478L11.6943 5.02427L11.1292 5.43478L11.3451 4.77052L10.78 4.35998H11.4785L11.6943 3.69568Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M11.0422 5.65222L11.2581 6.31652H11.9565L11.3914 6.72707L11.6073 7.39132L11.0422 6.98082L10.4771 7.39132L10.693 6.72707L10.1279 6.31652H10.8263L11.0422 5.65222Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M8.95779 5.65222L9.17361 6.31652H9.87213L9.30701 6.72707L9.52291 7.39132L8.95779 6.98082L8.39268 7.39132L8.60854 6.72707L8.04346 6.31652H8.74193L8.95779 5.65222Z"
        style={{ fill: '#F0F0F0' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1374">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSingapore;
