import type { ReactElement } from 'react';

import React from 'react';
import classnames from 'classnames';

import type { TButtonIconPropTypes } from './types';

import { ICON_SIZE_MAPPING } from './consts';
import { Loader } from '../../helperComponents';

export const ButtonIcon = (props: TButtonIconPropTypes): ReactElement => {
  const {
    size = 'medium',
    className = '',
    iconProps,
    buttonActionType = 'button',
    disabled,
    isLoading,
    formId,
    dataId = '',
    onClick,
    refHandler = null,
    ...rest
  } = props;

  return (
    <button
      ref={refHandler}
      data-id={dataId}
      disabled={disabled}
      type={buttonActionType}
      className={classnames('btn-icon', `btn-icon--${size}`, className)}
      onClick={onClick}
      form={formId}
      {...rest}
    >
      {isLoading ? (
        <Loader size={size} type={'dark'} />
      ) : (
        <iconProps.Component size={ICON_SIZE_MAPPING[size]} type={disabled ? 'disabled' : 'tertiary'} />
      )}
    </button>
  );
};
