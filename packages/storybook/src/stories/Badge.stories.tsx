import type { StoryFn } from '@storybook/react';
import type { TBadgeProps } from '@ab.uitools/ui-library/dist/components/Badge/types';

import React from 'react';
import { Badge as _Badge } from '@ab.uitools/ui-library/dist/components/Badge';

export default {
  title: 'Badge',
  component: _Badge,
  argTypes: {
    type: {
      options: ['red', 'grey', 'greyDark', 'green', 'transparent'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TBadgeProps> = args => <_Badge {...args} />;

export const Badge = Template.bind({});

Badge.args = {
  text: '999+',
  size: 'large',
};
