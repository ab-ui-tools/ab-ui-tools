import type { JSX } from 'react';

import React from 'react';

import type { TErrorMessageProps } from './types';

import { IconDynamicComponent } from '../IconDynamicComponent';
import { Text } from '../../components/Text';

export const ErrorMessage = (props: TErrorMessageProps): JSX.Element => {
  const { message, icon, dataId, className } = props;
  return (
    <Text
      className={`error-message ${className}`}
      size="small"
      type="danger-light"
      dataId={dataId ? `${dataId}-error-message` : ''}
    >
      <>
        {icon && <IconDynamicComponent componentName={icon} className="mr-4" size="xsmall" type="danger-light" />}
        <span>{message}</span>
      </>
    </Text>
  );
};
