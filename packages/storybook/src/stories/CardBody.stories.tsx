import type { StoryFn } from '@storybook/react';
import type { TCardBodyProps } from '@ab.uitools/ui-library/components/CardBody/types';

import { CardBody as _TCardBody } from '@ab.uitools/ui-library/components/CardBody';

// @ts-ignore
import cardImg from '../assets/images/cards-img.png';

export default {
  title: 'CardBody',
  component: _TCardBody,
};
const Template: StoryFn<TCardBodyProps> = args => {
  return (
    <div style={{ maxWidth: '448px' }}>
      <_TCardBody {...args} />
    </div>
  );
};

export const CardBody = Template.bind({});

CardBody.args = {
  illustration: cardImg,
  title: 'Title',
  description: 'Subtitle text comes here',
  buttonProps: {
    primary: {
      buttonText: 'Primary button',
    },
    secondary: { buttonText: 'Secondary button' },
  },
};
