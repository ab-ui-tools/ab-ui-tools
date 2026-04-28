import type { StoryFn } from '@storybook/react';
import type { TNavigationLinkPropTypes } from '@ab.uitools/ui-library/components/SideNavigation/NavigationItem/types';

import { NavigationItem as _NavigationItem } from '@ab.uitools/ui-library/components/SideNavigation';

export default {
  title: 'Navigation Item',
  component: _NavigationItem,
  argTypes: {
    showAction: {
      options: ['True', 'False'],
    },
  },
};

const Template: StoryFn<TNavigationLinkPropTypes> = args => <_NavigationItem {...args} As={() => <div>Hello</div>} />;

export const NavigationItem = Template.bind({});

NavigationItem.args = {
  showAction: false,
};
