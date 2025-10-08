import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { TItemSelectProps } from './types';

import { Text } from '../Text';
import { Radio } from '../Radio';
import { Image } from '../Image';

export const ItemSelect = (props: TItemSelectProps): ReactElement => {
  const {
    leftIconProps,
    title,
    subtitle,
    image,
    disabled,
    className,
    handleChange,
    name,
    value,
    itemValue,
    setFieldValue,
    rightIconProps,
    rightContent,
    deSelectable,
  } = props;
  const selected = itemValue === value;
  const itemSelectStyle = classNames(
    `item-select ${disabled ? 'item-select--disabled' : selected ? 'item-select--selected' : ''}`,
    className
  );
  const handleItemSelectValue = (selected: number | string) => {
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true });
    }
    handleChange?.(selected);
  };

  const handleItemSelect = () => {
    if (!disabled && itemValue && (!selected || deSelectable)) {
      handleItemSelectValue(itemValue);
    }
  };

  return (
    <div className={itemSelectStyle} onClick={handleItemSelect}>
      {image || leftIconProps ? (
        <div className={'item-select__left mr-16'}>
          {image ? (
            <div className={'item-select__image flexbox align-items--center justify-content--center'}>
              <Image imagePath={image} />
            </div>
          ) : leftIconProps ? (
            leftIconProps
          ) : null}
        </div>
      ) : null}
      <div className={'item-select__content'}>
        {title ? (
          <Text type={disabled ? 'disabled' : 'primary'} weight={'bold'}>
            {title}
          </Text>
        ) : null}
        {subtitle ? (
          <Text type={disabled ? 'disabled' : 'primary'} className={'mt-2'}>
            {subtitle}
          </Text>
        ) : null}
      </div>
      {rightContent ? <div className={'item-select__right ml-16'}>{rightContent}</div> : null}
      {rightIconProps && rightIconProps.Component ? (
        selected ? (
          <rightIconProps.Component {...rightIconProps} />
        ) : null
      ) : (
        <Radio name={name} isSelected={selected} disabled={disabled} className={'item-select__radio ml-16'} />
      )}
    </div>
  );
};
