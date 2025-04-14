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
    label,
    image,
    disabled,
    className,
    handleChange,
    name,
    value,
    itemValue,
    setFieldValue,
    icon,
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
        <div className={'item-select__left mr-12'}>
          {image ? (
            <div className={'item-select__image flexbox align-items--center justify-content--center'}>
              <Image imagePath={image} />
            </div>
          ) : leftIconProps ? (
            leftIconProps
          ) : null}
        </div>
      ) : null}
      <div className={'item-select__content text-truncate'}>
        <Text type={disabled ? 'disabled' : 'primary'} className={'full-width text-truncate'}>
          <>{label}</>
        </Text>
      </div>
      {icon && icon.Component ? (
        selected ? (
          <icon.Component {...icon} />
        ) : null
      ) : (
        <Radio name={name} isSelected={selected} disabled={disabled} className={'item-select__radio ml-16'} />
      )}
    </div>
  );
};
