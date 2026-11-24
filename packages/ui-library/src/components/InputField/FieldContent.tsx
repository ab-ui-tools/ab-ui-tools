import type { JSX, ReactNode } from 'react';

import { isValidElement } from 'react';

import type { TInputFieldContentProps } from './types';

import { FieldSelect } from './FieldSelect';
import { ButtonIcon } from '../ButtonIcon';
import { Button } from '../Button';

type TFieldContentProps = {
  content: ReactNode | TInputFieldContentProps;
  side: 'left' | 'right';
  isLarge: boolean;
  disabled: boolean;
  readOnly: boolean;
  dataId: string;
};

const isContentProps = (content: TFieldContentProps['content']): content is TInputFieldContentProps =>
  typeof content === 'object' && content !== null && !isValidElement(content) && 'type' in content;

export const FieldContent = ({
  content,
  side,
  isLarge,
  disabled,
  readOnly,
  dataId,
}: TFieldContentProps): JSX.Element => {
  if (!isContentProps(content)) {
    return <>{content}</>;
  }

  const childDataId = (name: string) => (dataId ? `${dataId}${side === 'left' ? '-left' : ''}-${name}` : '');

  if (content.type === 'icon') {
    const { Component, type } = content.iconProps;

    return (
      <span className="input-field__icon" aria-hidden="true">
        <Component size="small" type={disabled || readOnly ? 'disabled' : type || 'tertiary'} />
      </span>
    );
  }

  if (content.type === 'iconButton') {
    const { type: _type, ...iconButtonProps } = content;

    return (
      <ButtonIcon
        {...iconButtonProps}
        size="small"
        disabled={disabled || iconButtonProps.disabled}
        dataId={iconButtonProps.dataId ?? childDataId('icon-button')}
      />
    );
  }

  if (content.type === 'select') {
    const { type: _type, ...selectProps } = content;

    return (
      <FieldSelect
        {...selectProps}
        side={side}
        disabled={disabled || readOnly || selectProps.disabled}
        dataId={selectProps.dataId ?? childDataId('select')}
      />
    );
  }

  const { type: _type, ...buttonProps } = content;

  return (
    <Button
      {...buttonProps}
      type={isLarge ? 'secondary' : 'text'}
      size="medium"
      disabled={disabled || buttonProps.disabled}
      dataId={buttonProps.dataId ?? childDataId('button')}
    />
  );
};
