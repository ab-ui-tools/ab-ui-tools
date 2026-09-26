import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagFaroeIslands = ({
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
    <g clipPath="url(#clip0_9419_1399)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M19.5651 10L19.9151 8.6957C19.857 8.25113 19.7698 7.81566 19.6555 7.39137H9.13034V0.0380859C8.68659 0.0762891 8.25124 0.143828 7.82601 0.238125L6.08687 1.30437L5.2173 1.2166C4.75968 1.46629 4.3237 1.75066 3.91296 2.06625V7.39133H0.344404C0.230068 7.81562 0.142881 8.25109 0.0847559 8.69566L0.434678 10L0.0847168 11.3044C0.142842 11.7489 0.230029 12.1844 0.344365 12.6087H3.91292V17.9338C4.32366 18.2494 4.75968 18.5338 5.21726 18.7834L6.52159 18.6957L7.82593 19.7619C8.2512 19.8562 8.68655 19.9237 9.13026 19.962V12.6087H19.6553C19.7697 12.1845 19.8569 11.749 19.915 11.3044L19.5651 10Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M19.9154 8.69564H7.82613H7.82609V0.237671C6.90195 0.442593 6.02582 0.774741 5.21738 1.21587V8.6956H0.0846484C0.0290625 9.12259 0 9.55791 0 9.99998C0 10.442 0.0290625 10.8774 0.0846484 11.3043H5.21734H5.21738V18.784C6.02582 19.2251 6.90195 19.5574 7.82609 19.7622V11.3044V11.3044H19.9154C19.9709 10.8774 20 10.442 20 9.99998C20 9.55791 19.9709 9.12259 19.9154 8.69564Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1399">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagFaroeIslands;
