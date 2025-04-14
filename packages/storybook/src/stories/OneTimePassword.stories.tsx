import type { StoryFn } from '@storybook/react';
import type { OtpCustomProps } from '@ab.uitools/ui-library/components/OneTimePassword/types';

import React from 'react';
import { OneTimePassword as _OneTimePassword } from '@ab.uitools/ui-library/components/OneTimePassword';

export default {
  title: 'OneTimePassword',
  component: _OneTimePassword,
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
    hasError: {
      options: [true, false],
      control: { type: 'radio' },
    },
    autoFocus: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<OtpCustomProps> = args => {
  return <_OneTimePassword {...args} />;
};

export const OneTimePassword = Template.bind({});

// @ts-ignore
OneTimePassword.args = {
  type: 'text',
  size: 'large',
  count: 5,
  label: 'One Time Password',
  hasError: true,
  error: 'error text',
  successMessage: 'Success text',
  autoFocus: false,
};
