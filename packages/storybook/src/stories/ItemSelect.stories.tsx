import type { StoryFn } from '@storybook/react';
import type { TItemSelectGroupProps, TItemSelectProps } from '@ab.uitools/ui-library/components/ItemSelect/types';

import React, { useState } from 'react';
import { Text } from '@ab.uitools/ui-library/components/Text';
import { IconQuestionCircle } from '@ab.uitools/ui-library/components/SVGIcons/IconQuestionCircle';
import IconCheckmark from '@ab.uitools/ui-library/components/SVGIcons/IconCheckmark';
import IconAmd from '@ab.uitools/ui-library/components/SVGIcons/IconAmd';
import { ItemSelectGroup as _ItemSelectGroup } from '@ab.uitools/ui-library/components/ItemSelect';
import { ItemSelect as _ItemSelect } from '@ab.uitools/ui-library/components/ItemSelect';

import imageFile3 from '../assets/images/Visa.svg';
import imageFile1 from '../assets/images/ArCa.svg';

export default {
  title: 'ItemSelect',
  component: _ItemSelectGroup,
};

const ITEMS = [
  {
    value: 1,
    image: imageFile1,
    title: 'Arca',
    disabled: false,
    onClick: (e: any) => {
      console.log(e);
    },
    deSelectable: false,
  },
  {
    value: 2,
    leftIconProps: <IconAmd size={'medium'} />,
    title: 'MasterCard',
    subtitle: 'Subtitle text',
    disabled: true,
    onClick: (e: any) => {
      console.log(e);
    },
    deSelectable: true,
  },
  {
    value: 3,
    image: imageFile3,
    label: 'Visa',
    disabled: false,
    rightContent: <Text type={'tertiary'}>Right Content</Text>,
    onClick: (e: any) => {
      console.log(e);
    },
    deSelectable: true,
  },
];

const Template: StoryFn<TItemSelectProps> = args => {
  return (
    <div style={{ width: '50%' }}>
      <_ItemSelect {...args} />
    </div>
  );
};

export const ItemSelect = Template.bind({});

ItemSelect.args = {
  leftIconProps: <IconAmd />,
  rightIconProps: {
    Component: IconQuestionCircle,
    className: 'ml-16',
  },
  // image: '',
  title: 'Title',
  subtitle: 'Subtitle text',
  rightContent: <Text type={'tertiary'}>Right Content</Text>,
  disabled: false,
  deSelectable: true,
  // value: null,
};

const ItemSelectGroupTemplate: StoryFn<TItemSelectGroupProps> = args => {
  const [selected, setSelected] = useState<number | string | null>(1);

  const handleChange = (value: number | string) => {
    if (value === selected) {
      setSelected(null);
    } else {
      setSelected(value);
    }
  };

  return (
    <div style={{ width: '50%' }}>
      <_ItemSelectGroup {...args} items={ITEMS} value={selected!} handleChange={handleChange} />
    </div>
  );
};

export const ItemSelectGroup = ItemSelectGroupTemplate.bind({});

ItemSelectGroup.args = {
  isHorizontal: false,
  iconGroup: {
    Component: IconCheckmark,
    type: 'brand-light',
    className: 'ml-16',
  },
};
