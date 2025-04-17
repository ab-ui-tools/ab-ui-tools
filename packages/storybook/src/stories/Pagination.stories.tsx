import type { StoryFn } from '@storybook/react';
import type { TPaginationProps } from '@ab.uitools/ui-library/components/Pagination/types';

import React from 'react';
import { Pagination as _Pagination } from '@ab.uitools/ui-library/components/Pagination';

export default {
  title: 'Pagination',
  component: _Pagination,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};
const Template: StoryFn<TPaginationProps> = ({ pageSize, ...args }) => (
  <_Pagination
    pageSize={10}
    {...args}
    handleChangePage={item => {
      console.log(item);
    }}
    totalCount={286}
    classname=""
  />
);

export const Pagination = Template.bind({});

// @ts-ignore
Pagination.args = {
  size: 'large',
  totalCount: 100,
};
