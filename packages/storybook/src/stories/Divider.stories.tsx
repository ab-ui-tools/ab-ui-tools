import type { Meta, StoryFn } from '@storybook/react';
import type { TDividerProps } from '@ab.uitools/ui-library/dist/components/Divider/types';

import React from 'react';
import { Divider as _Divider } from '@ab.uitools/ui-library/dist/components/Divider';

export default {
  title: 'Divider',
  component: _Divider,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    color: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: StoryFn<TDividerProps> = args => {
  return (
    <div style={{ height: '300px', width: '300px' }}>
      <_Divider {...args} />
    </div>
  );
};

export const Divider = Template.bind({});

Divider.args = {
  type: 'primary',
  isHorizontal: true,
};
