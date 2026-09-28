import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNorthernCyprus = ({
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
    <g clipPath="url(#clip0_9419_841)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M2.41957 3.47827C2.06867 3.88581 1.75012 4.32187 1.46777 4.78261H18.5323C18.25 4.32187 17.9314 3.88577 17.5805 3.47827H2.41957Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M2.41953 16.5218H17.5805C17.9314 16.1143 18.25 15.6782 18.5323 15.2175H1.46777C1.75008 15.6782 2.06863 16.1143 2.41953 16.5218Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M8.72031 8.17139L9.54078 9.30205L10.8696 8.87119L10.0478 10.0009L10.8682 11.1315L9.53988 10.699L8.71813 11.8287L8.71895 10.4318L7.39062 9.99928L8.71945 9.56842L8.72031 8.17139Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M6.48121 12.8261C4.92043 12.8261 3.65512 11.5608 3.65512 10C3.65512 8.43923 4.92043 7.17392 6.48121 7.17392C6.96785 7.17392 7.42578 7.29696 7.82555 7.5136C7.1984 6.90028 6.3407 6.52173 5.39426 6.52173C3.47324 6.52173 1.91602 8.07899 1.91602 9.99997C1.91602 11.9209 3.47328 13.4782 5.39426 13.4782C6.3407 13.4782 7.1984 13.0997 7.82555 12.4863C7.42578 12.7031 6.96789 12.8261 6.48121 12.8261Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_841">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNorthernCyprus;
