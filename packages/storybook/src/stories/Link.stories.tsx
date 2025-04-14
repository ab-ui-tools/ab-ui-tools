import type { StoryFn } from '@storybook/react';
import type { LinkPropTypes } from '@ab.uitools/ui-library/dist/components/Link/types';

import React from 'react';
import IconChevronDown from '@ab.uitools/ui-library/dist/components/SVGIcons/IconChevronDown';
import { Link as _Link } from '@ab.uitools/ui-library/dist/components/Link';

export default {
  title: 'Link',
  component: _Link,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    weight: {
      options: ['regular', 'semibold'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<LinkPropTypes> = args => {
  return <_Link {...args} />;
};

export const Link = Template.bind({});
Link.args = {
  iconProps: {
    Component: IconChevronDown,
    alignment: 'right',
  },
  children: 'Bro',
  url: '/',
  beforeLink: 'Hello ',
  afterLink: ' By',
  disabled: false,
};
