import type { StoryFn } from '@storybook/react';
import type { TButtonPropTypes } from '@ab.uitools/ui-library/components/Button/types';

import React from 'react';
import { CodeBlock } from '@ab.uitools/ui-library/helperComponents';
import IconChevronDown from '@ab.uitools/ui-library/components/SVGIcons/IconChevronDown';
import { Button as _Button } from '@ab.uitools/ui-library/components/Button';

export default {
  title: 'Button',
  component: _Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const designSpecs = `
<Button size="large" buttonText="Label" />
<Button type="tertiary" size="large" buttonText="Label" />
<Button size="large" buttonText="Label" isLoading />
<Button type="text" size="large" buttonText="Label" iconProps={{ Component: IconChevronDown }} />
`;

const Template: StoryFn<TButtonPropTypes> = args => (
  <div>
    <_Button {...args} />
    <br />
    <div
      style={{
        display: 'flex',
        gap: '20px',
        borderTop: '1px solid #ccc',
        marginTop: '30px',
        paddingTop: '20px',
      }}
    >
      <_Button size="large" buttonText="Label" />
      <_Button type="tertiary" size="large" buttonText="Label" />
      <_Button size="large" buttonText="Label" isLoading />
      <_Button type="text" size="large" buttonText="Label" iconProps={{ Component: IconChevronDown }} />
    </div>
    <br />
    <CodeBlock title="Design Specs Example">{designSpecs}</CodeBlock>
  </div>
);

export const Button = Template.bind({});
Button.args = {
  iconProps: {
    Component: IconChevronDown,
  },
  autoFocus: true,
  type: 'tertiary',
  size: 'large',
  disabled: false,
  isLoading: false,
  buttonText: 'Label',
  onClick: () => console.log('button clicked'),
};
