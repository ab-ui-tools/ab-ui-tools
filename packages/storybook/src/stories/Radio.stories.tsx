import type { StoryFn } from '@storybook/react';
import type { TRadioGroupProps, TRadioProps } from '@ab.uitools/ui-library/components/Radio/types';

import React, { useState } from 'react';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import { Radio as _Radio, RadioGroup as _RadioGroup } from '@ab.uitools/ui-library/components/Radio';

const RADIO_OPTIONS = [
  {
    label: 'Text1',
    helperText: 'Label for radio',
    value: 1,
  },
  {
    label: 'Text2',
    helperText: 'Label for radio',
    value: 2,
  },
  {
    label: 'Text3',
    value: 3,
  },
];

export default {
  title: 'Radio',
  component: _Radio,
  argTypes: {},
};

const Template: StoryFn<TRadioProps> = args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Radio {...args} isSelected={isChecked} onClick={setIsChecked} />;
};

export const Radio = Template.bind({});

Radio.args = {
  disabled: false,
  label: 'Label for radio',
  helperText: 'Label for radio',
};

const RadioGroupTemplate: StoryFn<TRadioGroupProps> = args => {
  const [selected, setSelected] = useState<string | number>(RADIO_OPTIONS[0].value);
  return <_RadioGroup {...args} selected={selected} handleChange={setSelected} />;
};
export const RadioGroup = RadioGroupTemplate.bind({});

RadioGroup.args = {
  options: RADIO_OPTIONS,
  isHorizontal: false,
  label: 'Label',
  disabled: false,
  required: false,
  name: 'option',
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />,
};
