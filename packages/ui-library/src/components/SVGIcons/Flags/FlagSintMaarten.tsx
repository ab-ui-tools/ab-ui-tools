import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSintMaarten = ({
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
    <g clipPath="url(#clip0_9419_1460)">
      <path
        d="M9.13048 10.8696C9.13048 10.8696 2.93481 2.92754 2.92896 2.92895C4.73856 1.1193 7.2386 0 10 0C15.5229 0 20 4.47719 20 10L9.13048 10.8696Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.13048 10C9.13048 10 2.93481 17.0725 2.92896 17.0711C4.73856 18.8807 7.2386 20 10 20C15.5229 20 20 15.5228 20 10H9.13048Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M2.92893 2.92896C-0.976309 6.83419 -0.976309 13.1659 2.92893 17.0711C4.54271 15.4574 6.09478 13.9053 10 10L2.92893 2.92896Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M1.09609 10C1.09063 10.0718 1.08691 10.1441 1.08691 10.2173C1.08691 11.7781 2.35223 13.0434 3.91301 13.0434C5.47379 13.0434 6.7391 11.7781 6.7391 10.2173C6.7391 10.1441 6.73539 10.0718 6.72992 10H1.09609Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M3.91303 8.69568C4.39328 8.69568 4.7826 8.30636 4.7826 7.82611C4.7826 7.34586 4.39328 6.95654 3.91303 6.95654C3.43278 6.95654 3.04346 7.34586 3.04346 7.82611C3.04346 8.30636 3.43278 8.69568 3.91303 8.69568Z"
        style={{ fill: '#FFDA44' }}
      />
      <path
        d="M1.95654 7.60876V10.4349C1.95654 11.9325 3.91307 12.3914 3.91307 12.3914C3.91307 12.3914 5.86959 11.9325 5.86959 10.4349V7.60876H1.95654Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M3.91398 11.4813C3.55101 11.3507 2.82605 11.0168 2.82605 10.4348V8.47827H5V10.4348C5 11.0187 4.27511 11.3517 3.91398 11.4813Z"
        style={{ fill: '#338AF3' }}
      />
      <path
        d="M4.34782 9.56527V9.13047L3.91305 8.91309L3.47825 9.13047V9.56527L3.26086 9.78266V10.6522H4.56524V9.78266L4.34782 9.56527Z"
        style={{ fill: '#F3F3F3' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1460">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSintMaarten;
