import type { StoryFn } from '@storybook/react';
import type { TFramedIconPropTypes } from '@ab.uitools/ui-library/components/FramedIcon/types';

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
      description: 'Size of the framed icon',
    },
    'iconProps.type': {
      options: ['secondary', 'warning-light', 'brand-light', 'danger-light', 'success-light', 'information-light'],
      control: { type: 'radio' },
      description: 'Icon type/variant',
    },
  },
};

const Template: StoryFn<TFramedIconPropTypes> = args => {
  const iconType = (args as any)['iconProps.type'] || 'warning-light';

  return (
    <div>
      <_FramedIcon
        {...args}
        iconProps={{
          Component: IconDelete,
          type: iconType,
        }}
      />
    </div>
  );
};

export const FramedIcon = Template.bind({});
FramedIcon.args = {
  size: 'medium',
  className: '',
};
