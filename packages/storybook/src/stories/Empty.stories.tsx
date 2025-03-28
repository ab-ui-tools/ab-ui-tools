import type { TEmptyProps } from 'ab-ui-library/components/Empty/types';
import type { StoryFn } from '@storybook/react';

import React from 'react';
import IconAdd from 'ab-ui-library/components/SVGIcons/IconAdd';
import { Empty as _Empty } from 'ab-ui-library/components/Empty';

export default {
  title: 'Empty',
  component: _Empty,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};
const Template: StoryFn<TEmptyProps> = args => {
  return <_Empty {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  size: 'large',
  mainMessage: "Sorry, we couldn't find any results",
  paragraphMessage: 'Paragraph text comes here',
  buttonProps: {
    buttonText: 'Button',
    iconProps: {
      Component: IconAdd,
    },
  },
};
