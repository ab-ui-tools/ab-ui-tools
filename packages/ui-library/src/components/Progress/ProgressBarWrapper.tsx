import type { FC, PropsWithChildren } from 'react';

import React from 'react';
import classnames from 'classnames';

import type { TProgressBarWrapperPropTypes } from './types';

export const ProgressBarWrapper: FC<PropsWithChildren<TProgressBarWrapperPropTypes>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classnames('progress-bar-wrapper', className)} {...rest}>
      {children}
    </div>
  );
};
