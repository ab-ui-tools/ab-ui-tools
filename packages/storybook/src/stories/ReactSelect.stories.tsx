import type { StoryFn } from '@storybook/react';
import type { IReactSelectProps, TOption, TSelectValue } from '@ab.uitools/ui-library/components/ReactSelect/types';

import React, { useState } from 'react';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import { ReactSelect as _ReactSelect } from '@ab.uitools/ui-library';

// @ts-ignore
import imageFile from '../assets/images/avatar.jpg';

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
    icon: imageFile,
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

// -----------REACT SELECT---------
const Template: StoryFn<IReactSelectProps> = args => {
  const [selectedOption, setSelectedOption] = useState<TSelectValue>();

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
        <_ReactSelect {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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
  isSearchable: false,
  isLoading: false,
  isRtl: false,
  isCheckbox: false,
  isRadio: false,
  options: OPTIONS,
  hasError: false,
  label: 'Select label',
  placeholder: 'Placeholder text',
  helperText: 'helper text',
  labelAddons: <IconInfo size="xsmall" type="information-light" className="ml-4" />,
};
