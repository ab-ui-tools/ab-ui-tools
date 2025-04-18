import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconChatFilled = ({
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
      d="M12.4219 2C17.9447 2 22.4219 6.47715 22.4219 12C22.4219 17.5228 17.9447 22 12.4219 22C10.7814 22 9.19704 21.6039 7.77765 20.8583L3.48726 21.9753C3.03297 22.0937 2.56878 21.8213 2.45045 21.367C2.41386 21.2266 2.41386 21.0791 2.45042 20.9386L3.56677 16.6502C2.81907 15.2294 2.42188 13.6428 2.42188 12C2.42188 6.47715 6.89903 2 12.4219 2ZM13.6736 13H9.17188L9.0701 13.0068C8.70403 13.0565 8.42188 13.3703 8.42188 13.75C8.42188 14.1297 8.70403 14.4435 9.0701 14.4932L9.17188 14.5H13.6736L13.7753 14.4932C14.1414 14.4435 14.4236 14.1297 14.4236 13.75C14.4236 13.3703 14.1414 13.0565 13.7753 13.0068L13.6736 13ZM15.6719 9.5H9.17188L9.0701 9.50685C8.70403 9.55651 8.42188 9.8703 8.42188 10.25C8.42188 10.6297 8.70403 10.9435 9.0701 10.9932L9.17188 11H15.6719L15.7736 10.9932C16.1397 10.9435 16.4219 10.6297 16.4219 10.25C16.4219 9.8703 16.1397 9.55651 15.7736 9.50685L15.6719 9.5Z"
      fill="#222222"
    />
  </svg>
);

export default IconChatFilled;
