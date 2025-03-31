import type { TAlertProps } from 'ab-ui-library/components/Alert/types';
import type { StoryFn } from '@storybook/react';

import React from 'react';
import { Alert as AlertComp } from 'ab-ui-library/components/Alert';

export default {
  title: 'Alert',
  component: AlertComp,
  argTypes: {
    type: {
      options: ['grey', 'information', 'success', 'error', 'warning', 'discovery'],
      control: { type: 'radio' },
    },
    position: {
      options: ['inline', 'sticky'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TAlertProps> = args => <AlertComp {...args} />;

export const Alert = Template.bind({});

Alert.args = {
  type: 'information',
  position: 'sticky',
  subtext: 'Become a legendary UX/UI designer through real world and practical courses.',
  text: 'Alert line which displays the main function or reason of the alert.',
  closeIcon: true,
  buttonProps: {
    confirm: {
      buttonText: 'Register',
      buttonActionType: 'submit',
    },
    cancel: { buttonText: 'Cancel' },
  },
};
