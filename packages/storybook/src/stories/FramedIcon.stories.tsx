import type { StoryFn } from '@storybook/react';
import type { TButtonIconPropTypes } from '@ab.uitools/ui-library/components/ButtonIcon/types';

import React from 'react';
import IconDelete from '@ab.uitools/ui-library/components/SVGIcons/IconDelete';
import { FramedIcon as _FramedIcon } from '@ab.uitools/ui-library/components/FramedIcon';

export default {
  title: 'FramedIcon',
  component: _FramedIcon,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TButtonIconPropTypes> = args => (
  <div>
    <_FramedIcon {...args} iconProps={{ Component: IconDelete, type: 'warning-light' }} />
  </div>
);

export const FramedIcon = Template.bind({});
FramedIcon.args = {};
