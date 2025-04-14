import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { HeadingPropTypes } from './types';

import { noop } from '../../utils/helpers';

export const Heading = (props: HeadingPropTypes): ReactElement => {
  const {
    children,
    className = '',
    size = 'small',
    lineHeight = 'large',
    type: As = 'h1',
    weight = 'regular',
    onClick = noop,
    dataId = '',
  } = props;

  return (
    <As
      dataid={dataId}
      onClick={onClick}
      className={classNames('heading', size && `heading-${size}`, weight, lineHeight && `lh-${lineHeight}`, className)}
    >
      {children}
    </As>
  );
};
