import type { TCopyProps } from 'ab-ui-library/components/Copy/types';
import type { StoryFn } from '@storybook/react';

import React from 'react';
import { Copy as _Copy } from 'ab-ui-library/components/Copy';

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
