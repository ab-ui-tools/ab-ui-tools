import type { StoryFn } from '@storybook/react';
import type { TReactSelectProps, TOption, TItemValue } from '@ab.uitools/ui-library/components/ReactSelect/types';

import React, { useState } from 'react';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import { ReactSelect as _ReactSelect } from '@ab.uitools/ui-library';

export default {
  title: 'ReactSelect',
  component: _ReactSelect,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
      defaultValue: 'large',
    },
  },
};

const OPTIONS: TOption[] = [
  {
    value: 1,
    label: 'Armenia',
    meta: 'AM',
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT',
  },
  {
    value: 3,
    label: 'France    France    France',
    meta: 'FR',
  },
  {
    value: 4,
    label: 'Spain',
    meta: 'SP',
  },
  {
    value: 5,
    label: 'Germany',
    meta: 'De',
  },
  {
    value: 6,
    label: 'Australia',
    meta: 'AU',
  },
  {
    value: 7,
    label: 'Hungary',
    meta: 'HY',
  },
  {
    value: 8,
    label: 'Georgia',
    meta: 'GE',
  },
  {
    value: 9,
    label: 'Brazil',
    meta: 'BR',
  },
  {
    value: 10,
    label: 'Norway',
    meta: 'NR',
  },
  {
    value: 11,
    label: 'Mexico',
    meta: 'MC',
  },
];

const GROUP_OPTIONS = [
  {
    label: 'Group 1',
    options: OPTIONS.slice(0, 6),
  },
  {
    label: 'Group 2',
    options: OPTIONS.slice(6, OPTIONS.length),
  },
];

// -----------REACT SELECT---------
const Template: StoryFn<TReactSelectProps> = args => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | TItemValue[]>();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ width: '300px' }}>
        <_ReactSelect {...args} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </div>
    </div>
  );
};
export const ReactSelect = Template.bind({});

ReactSelect.args = {
  isMulti: true,
  required: true,
  isDisabled: false,
  isClearable: true,
  isCreatable: false,
  isSearchable: false,
  isLoading: false,
  isRtl: false,
  isCheckbox: false,
  isRadio: false,
  options: GROUP_OPTIONS,
  hasError: false,
  label: 'Select label',
  placeholder: 'Placeholder text',
  helperText: 'helper text',
  labelAddons: <IconInfo size="xsmall" type="information-light" className="ml-4" />,
};
