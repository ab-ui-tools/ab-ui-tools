import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagJersey = ({ size, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
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
    <g clipPath="url(#clip0_9419_1886)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M17.9334 16.0889L11.8446 10.0001H11.8445L17.9334 3.91114C17.6708 3.56989 17.3836 3.24157 17.071 2.92895C16.7584 2.61637 16.4301 2.32907 16.0888 2.06653L9.99996 8.1554L9.99992 8.15543L3.91105 2.06653C3.56984 2.32911 3.24148 2.61633 2.92887 2.92895C2.61625 3.24157 2.32898 3.56989 2.06645 3.91114L8.15531 9.99997L8.15535 10L2.06641 16.089C2.32902 16.4302 2.61629 16.7585 2.92883 17.0711C3.24145 17.3837 3.56973 17.671 3.91102 17.9336L9.99992 11.8447L9.99996 11.8447L16.0888 17.9335C16.43 17.6709 16.7584 17.3837 17.071 17.0711C17.3836 16.7585 17.6709 16.4302 17.9334 16.0889Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M8.26074 3.04354L9.99988 3.4783L11.739 3.04354V1.56529L11.0434 1.91311L9.99988 0.869629L8.95641 1.91311L8.26074 1.56529V3.04354Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M8.26074 3.04346V4.13049C8.26074 5.46174 9.99988 5.86963 9.99988 5.86963C9.99988 5.86963 11.739 5.4617 11.739 4.13049V3.04346H8.26074Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1886">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagJersey;
