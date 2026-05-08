import { components, type OptionProps } from 'react-select';
import React from 'react';

import type { TOption } from '../types';

import { Text } from '../../Text';
import { IconCheckmark } from '../../SVGIcons';
import { Radio } from '../../Radio';
import { Checkbox } from '../../Checkbox';

export const Option = (props: OptionProps<TOption>) => {
  const { selectProps, isDisabled, isSelected, label } = props;
  const isCheckbox = props.selectProps?.isCheckbox;
  const isRadio = props.selectProps?.isRadio;

  if (!selectProps.isMulti) {
    return (
      <components.Option {...props}>
        <div className="flexbox align-items--center justify-content--between">
          <Text>{label}</Text>
          {isSelected && <IconCheckmark size="small" type={isDisabled ? 'disabled' : 'brand-light'} />}
        </div>
      </components.Option>
    );
  }
  return (
    <components.Option {...props}>
      <div className="pointer-events-none">
        {isCheckbox && (
          <Checkbox
            disabled={isDisabled}
            selectedValue={isSelected}
            label={label}
            onClick={() => {}}
            setFieldValue={() => {}}
          />
        )}
        {!isCheckbox && isRadio && (
          <Radio
            disabled={isDisabled}
            isSelected={isSelected}
            label={label}
            onClick={() => {}}
            setFieldValue={() => {}}
          />
        )}
        {!isRadio && !isCheckbox && (
          <div className="flexbox align-items-center justify-content--between">
            <Text>{label}</Text>
            {isSelected && <IconCheckmark size="small" type={isDisabled ? 'disabled' : 'brand-light'} />}
          </div>
        )}
      </div>
    </components.Option>
  );
};
