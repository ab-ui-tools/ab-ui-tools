import type { StoryFn } from '@storybook/react';

import React from 'react';
import dayjs from 'dayjs';
import { Calendar as _Calendar, Input } from '@ab.uitools/ui-library';

export default {
  title: 'Calendar',
  component: _Calendar,
  argTypes: {
    isRange: {
      options: [true, false],
      control: { type: 'radio' },
    },
    canControlRange: {
      options: [true, false],
      control: { type: 'radio' },
    },
    hasInputs: {
      options: [true, false],
      control: { type: 'radio' },
    },
    withTime: {
      options: [true, false],
      control: { type: 'radio' },
    },
    showApplyButtons: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<any> = args => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        paddingTop: '20px',
      }}
    >
      <_Calendar {...args}>
        <Input />
      </_Calendar>
    </div>
  );
};

export const Calendar = Template.bind({});

Calendar.args = {
  isRange: true,
  maxYear: 2050,
  dateFormat: 'dd/MM/yyyy',
  selectedValue: [dayjs('2025-12-07').toDate(), dayjs('2026-01-08').toDate()],
  onChange: (date: Date) => {
    console.log(date);
  },
  fastActions: [
    {
      label: 'Last 31 days',
      value: [dayjs().subtract(31, 'day').toDate(), new Date()],
    },
    {
      label: 'Last 15 days',
      value: [dayjs().subtract(15, 'day').toDate(), new Date()],
    },
    {
      label: 'Last month',
      value: [
        dayjs().subtract(1, 'month').startOf('month').toDate(),
        dayjs().subtract(1, 'month').endOf('month').toDate(),
      ],
    },
    {
      label: 'Last week',
      value: [dayjs().subtract(1, 'week').startOf('week').toDate(), dayjs().subtract(1, 'week').endOf('week').toDate()],
    },
  ],
  canControlRange: true,
  hasInputs: true,
  withTime: true,
  showApplyButtons: false,
};
