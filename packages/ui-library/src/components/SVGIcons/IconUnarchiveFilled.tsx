import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconUnarchiveFilled = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className,
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.7001 17.3364C19.7001 19.3539 18.0509 20.9894 16.0165 20.9897H7.66595C7.02619 20.9896 6.4246 20.8279 5.90033 20.5434L13.9755 12.5815C14.0475 12.5326 14.1086 12.4703 14.1591 12.3998L17.3046 9.29925H19.7001V17.3364ZM19.7109 3.22893C20.025 2.9198 20.512 2.9411 20.7988 3.27581C21.0853 3.61053 21.063 4.13177 20.749 4.44085L4.62299 20.3119C4.30893 20.621 3.82185 20.6005 3.5351 20.266C3.24837 19.9313 3.27078 19.4092 3.5849 19.1L19.7109 3.22893ZM10.1972 11.2475H10.122C9.71524 11.2475 9.38589 11.5746 9.38568 11.978C9.38568 12.0002 9.38568 12.0226 9.38763 12.0444L3.98236 17.3735V9.29925H12.1728L10.1972 11.2475ZM13.6552 7.83733H4.47357C3.65981 7.83733 3.00001 7.18342 2.99994 6.3764V4.91448C3.00028 4.10769 3.65998 3.45354 4.47357 3.45354H18.1015L13.6552 7.83733ZM20.6826 6.3764C20.6825 7.18336 20.0226 7.83724 19.2089 7.83733H18.787L20.6826 5.96819V6.3764Z"
      fill="#222222"
    />
  </svg>
);

export default IconUnarchiveFilled;
