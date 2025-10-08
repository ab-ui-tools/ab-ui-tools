import type { StoryFn } from '@storybook/react';
import type { TSwitcherProps } from '@ab.uitools/ui-library/components/Switcher/types';

import React, { useState } from 'react';
import { Switcher as _Switcher } from '@ab.uitools/ui-library/components/Switcher';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';

export default {
  title: 'Switcher',
  component: _Switcher,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};
const ID = 'am_custom_switcher';

const Template: StoryFn<TSwitcherProps> = args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Switcher {...args} selectedValue={isChecked} onClick={setIsChecked} id={ID} />;
};

export const Switcher = Template.bind({});

Switcher.args = {
  size: 'small',
  inlineType: false,
  disabled: false,
  label: 'label',
  labelAddons: <IconInfo size={'xsmall'} type={'information-light'} className={'ml-4'} />,
};
