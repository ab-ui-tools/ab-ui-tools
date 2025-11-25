import type { StoryFn } from '@storybook/react';
import type { TTabProps } from '@ab.uitools/ui-library/components/Tab/types';

import React, { ReactElement, useState } from 'react';
import { Tab as _Tab } from '@ab.uitools/ui-library/components/Tab';
import IconHome from '@ab.uitools/ui-library/components/SVGIcons/IconHome';
import IconDismissCircle from '@ab.uitools/ui-library/components/SVGIcons/IconDismissCircle';
import IconApple from '@ab.uitools/ui-library/components/SVGIcons/IconApple';

export default {
  title: 'Tab',
  component: _Tab,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    color: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TTabProps> = args => {
  const [selectedTab, onTabSelect] = useState(args.selectedValue);
  return <_Tab {...args} selectedValue={selectedTab} onSelect={onTabSelect} />;
};

export const Tab = Template.bind({});

// @ts-ignore
Tab.args = {
  type: 'secondary',
  size: 'large',
  tabItems: [
    {
      title: 'Prompt text 1',
      label: 'Prompt text 1',
      value: 1,
      disabled: false,
      iconProps: {
        Component: IconHome,
      },
      rightIconProps: {
        Component: IconDismissCircle,
        action: (e: string | number) => {
          console.log(e, 'e');
        },
      },
      badgeProps: {
        text: '9',
        type: 'grey',
      },
    },
    {
      title: 'Prompt text 2Prompt text 2',
      label: 'Prompt text 2Prompt text 2',
      value: 2,
      iconProps: {
        Component: IconApple,
      },
      rightIconProps: {
        Component: IconDismissCircle,
        action: (e: string | number) => {
          console.log(e, 'e');
        },
      },
    },
    {
      title: 'Prompt text 3',
      label: 'Prompt text 3',
      value: 3,
      iconProps: {
        Component: IconApple,
      },
    },
  ],
  isLoading: false,
};
