import type { TButtonIconPropTypes } from 'ab-ui-library/components/ButtonIcon/types';
import type { StoryFn } from '@storybook/react';

import React from 'react';
import { CodeBlock } from 'ab-ui-library/helperComponents';
import { IconChevronDown } from 'ab-ui-library/components/SVGIcons';
import { ButtonIcon as _ButtonIcon } from 'ab-ui-library/components/ButtonIcon';

export default {
  title: 'Button',
  component: _ButtonIcon,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const designSpecs = `
<ButtonIcon size="large" iconProps={{ Component: IconChevronDown }} />
`;

const Template: StoryFn<TButtonIconPropTypes> = args => (
  <div>
    <_ButtonIcon {...args} />
    <div
      style={{
        display: 'flex',
        gap: '20px',
        borderTop: '1px solid #ccc',
        marginTop: '30px',
        paddingTop: '20px',
      }}
    >
      <_ButtonIcon size="large" iconProps={{ Component: IconChevronDown }} />
    </div>
    <br />
    <CodeBlock title="Design Specs Example">{designSpecs}</CodeBlock>
  </div>
);

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  iconProps: {
    Component: IconChevronDown,
  },
  autoFocus: true,
  size: 'large',
  disabled: false,
  isLoading: false,
  onClick: () => console.log('button clicked'),
};
