import type { FC } from 'react';

import type { TContainerProps } from './types';

export const Container: FC<TContainerProps> = props => {
  const { children } = props;

  return <div className="container">{children}</div>;
};
