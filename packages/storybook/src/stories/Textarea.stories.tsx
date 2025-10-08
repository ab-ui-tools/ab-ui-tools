import type { StoryFn } from '@storybook/react';
import type { TTextAreaTypeProps } from '@ab.uitools/ui-library/components/Textarea/types';

import React, { useState } from 'react';
import { Textarea as _Textarea } from '@ab.uitools/ui-library/components/Textarea';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';

type TChangeEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

export default {
  title: 'Textarea',
  component: _Textarea,
};

const Template: StoryFn<TTextAreaTypeProps> = args => {
  const [value, setValue] = useState('');
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ maxWidth: 300 }}>
      <_Textarea {...args} currentValue={value} onChange={changeHandler} />
    </div>
  );
};
export const Textarea = Template.bind({});
// @ts-ignore
Textarea.args = {
  label: 'Label',
  disabled: false,
  required: false,
  placeHolder: 'Enter text',
  helperText: 'This is your helper text',
  successMessage: 'Success message',
  error: 'Error message',
  maxCount: 240,
  labelAddons: <IconInfo size={'xsmall'} type={'information-light'} className={'ml-4'} />,
};
