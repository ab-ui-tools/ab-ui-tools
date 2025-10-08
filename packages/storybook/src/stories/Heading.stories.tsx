import type { StoryFn } from '@storybook/react';
import type { HeadingPropTypes } from '@ab.uitools/ui-library/components/Heading/types';

import React from 'react';
import { Heading as _Heading } from '@ab.uitools/ui-library/components/Heading';

export default {
  title: 'Heading',
  component: _Heading,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'brand-light',
        'brand-dark',
        'danger-light',
        'danger-dark',
        'warning-light',
        'warning-dark',
        'success-light',
        'success-dark',
        'information-light',
        'information-dark',
        'discovery-light',
        'discovery-dark',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['xsmall', 'small', 'standard', 'medium', 'large', 'xlarge'],
      control: { type: 'radio' },
    },
    weight: {
      options: ['regular', 'semibold', 'bold'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<HeadingPropTypes & { text: string }> = args => (
  <_Heading {...args}>
    {args.text} {args.size} {args.weight}
  </_Heading>
);

export const Heading = Template.bind({});
Heading.args = {
  type: 'h1',
  color: 'primary',
  size: 'large',
  weight: 'regular',
  text: 'heading',
  lineHeight: 'xsmall',
};
