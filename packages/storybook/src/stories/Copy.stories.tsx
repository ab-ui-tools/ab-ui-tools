import type { StoryFn } from '@storybook/react';
import type { TCopyProps } from '@ab.uitools/ui-library/dist/components/Copy/types';

import React from 'react';
import { Copy as _Copy } from '@ab.uitools/ui-library/dist/components/Copy';

export default {
  title: 'Copy',
  component: _Copy,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TCopyProps> = args => <_Copy {...args} />;

export const Copy = Template.bind({});

Copy.args = {
  textAfterCopy: 'Copied',
};
