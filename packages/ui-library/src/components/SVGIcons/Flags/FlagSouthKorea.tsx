import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagSouthKorea = ({
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
    <g clipPath="url(#clip0_9419_1514)">
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M13.4782 9.99997C13.4782 10.8695 11.9209 13.0434 9.99997 13.0434C8.07899 13.0434 6.52173 10.8695 6.52173 9.99997C6.52173 8.07895 8.07899 6.52173 9.99997 6.52173C11.9209 6.52173 13.4782 8.07895 13.4782 9.99997Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M13.4782 10C13.4782 11.921 11.9209 13.4782 9.99997 13.4782C8.07899 13.4782 6.52173 11.921 6.52173 10"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M13.6865 13.0746L14.6087 12.1524L15.2235 12.7672L14.3013 13.6894L13.6865 13.0746Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M12.1492 14.6116L13.0713 13.6894L13.6861 14.3042L12.764 15.2264L12.1492 14.6116Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M15.531 14.9188L16.4532 13.9967L17.068 14.6114L16.1458 15.5336L15.531 14.9188Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M13.9937 16.4561L14.9158 15.5339L15.5306 16.1487L14.6084 17.0708L13.9937 16.4561Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M14.6088 13.9967L15.5309 13.0745L16.1457 13.6893L15.2236 14.6115L14.6088 13.9967Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M13.0718 15.5337L13.9939 14.6115L14.6087 15.2263L13.6866 16.1485L13.0718 15.5337Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M15.535 6.92712L13.0759 4.46801L13.6907 3.85322L16.1498 6.31234L15.535 6.92712Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M13.0754 6.31262L12.1533 5.39046L12.768 4.7757L13.6902 5.69786L13.0754 6.31262Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M14.6124 7.84998L13.6903 6.92781L14.305 6.31305L15.2272 7.23522L14.6124 7.84998Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M14.9197 4.46802L13.9975 3.54585L14.6123 2.93107L15.5345 3.85323L14.9197 4.46802Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M16.4574 6.00549L15.5352 5.08333L16.15 4.46854L17.0722 5.39071L16.4574 6.00549Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M3.54504 13.995L6.00416 16.4541L5.38937 17.0689L2.93026 14.6098L3.54504 13.995Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M6.00403 14.6093L6.92619 15.5314L6.31144 16.1462L5.38927 15.224L6.00403 14.6093Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M4.46704 13.0726L5.38921 13.9948L4.77442 14.6096L3.85226 13.6874L4.46704 13.0726Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M5.38928 12.1503L7.8484 14.6094L7.23361 15.2242L4.7745 12.7651L5.38928 12.1503Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M6.00391 3.54395L3.54479 6.00306L2.93 5.38828L5.38912 2.92916L6.00391 3.54395Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M6.92615 4.46594L4.46703 6.92506L3.85224 6.31027L6.31136 3.85116L6.92615 4.46594Z"
        style={{ fill: 'black' }}
      />
      <path
        d="M7.84912 5.38867L5.39 7.84779L4.77525 7.23303L7.23436 4.77391L7.84912 5.38867Z"
        style={{ fill: 'black' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_1514">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagSouthKorea;
