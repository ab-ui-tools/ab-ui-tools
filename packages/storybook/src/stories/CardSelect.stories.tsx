import type { ChangeEvent } from 'react';
import type { TCardSelectGroupProps, TCardSelectProps } from 'ab-ui-library/components/CardSelect/types';
import type { StoryFn } from '@storybook/react';

import React, { useState } from 'react';
import IconQuestion from 'ab-ui-library/components/SVGIcons/IconQuestion';
import IconInfo from 'ab-ui-library/components/SVGIcons/IconInfo';
import { Popover } from 'ab-ui-library/components/Popover';
import { CardSelectGroup as _CardSelectGroup } from 'ab-ui-library/components/CardSelect';
import { CardSelect as _CardSelect } from 'ab-ui-library/components/CardSelect';

import { CARD_SELECT_TYPES } from '../consts';
import imageFile from '../assets/images/illustrations.svg';

export default {
  title: 'CardSelect',
  component: _CardSelectGroup,
  argTypes: {
    cardsGroupType: {
      options: [CARD_SELECT_TYPES.cardRadio, CARD_SELECT_TYPES.card],
      control: { type: 'radio' },
    },
    cardsGroupDisable: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

const CARDS = [
  {
    value: 1,
    title: 'Card Select',
    dataId: '1',
    icon: {
      Component: IconQuestion,
    },
    chips: [
      {
        text: 'Chip 1',
        color: 'success',
        type: 'filled',
      },
      {
        text: 'Chip 2',
        color: 'warning',
        type: 'filled',
      },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    badgeText: 'Badge',
    disabled: false,
    withAction: true,
    additionalInfo: [
      {
        key: 'Key 1',
        value: 'Value 1',
      },
      {
        key: 'Key 2',
        value: 'Value 2',
      },
    ],
    inputProps: {
      name: 'input 1',
      label: 'Label',
      handleChange: (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
      },
      labelAddons: (
        <Popover
          linkAddons={{ url: 'link', beforeLink: 'text before link' }}
          id="beneficiary-tooltip"
          text={'data'}
          position="top-center"
        >
          <div id="beneficiary-tooltip">
            <IconInfo type="information" size="xsmall" className={'ml-4 pointer'} />
          </div>
        </Popover>
      ),
    },
    onClick: (e: any) => {
      console.log(e);
    },
  },
  {
    value: 2,
    title: 'Card Select 2',
    icon: {
      Component: IconQuestion,
    },
    chips: [
      {
        text: 'Chip 1',
        color: 'success',
        type: 'filled',
      },
      {
        text: 'Chip 2',
        color: 'warning',
        type: 'filled',
      },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    disabled: false,
    additionalInfo: [
      {
        key: 'Key 1',
        value: 'Value 1',
      },
      {
        key: 'Key 2',
        value: 'Value 2',
      },
    ],
    inputProps: {
      label: 'Label',
      name: 'input 2',
      labelAddons: (
        <Popover
          linkAddons={{ url: 'link', beforeLink: 'text before link' }}
          id="beneficiary-tooltip"
          text={'data'}
          position="top-center"
        >
          <div id="beneficiary-tooltip">
            <IconInfo type="information" size="xsmall" className={'ml-4 pointer'} />
          </div>
        </Popover>
      ),
    },
  },
] as TCardSelectProps[];

const Template: StoryFn<TCardSelectProps> = args => {
  return (
    <div style={{ width: '50%' }}>
      <_CardSelect {...args} />
    </div>
  );
};

export const CardSelect = Template.bind({});

CardSelect.args = {
  type: CARD_SELECT_TYPES.card,
  illustration: imageFile,
  icon: {
    Component: IconQuestion,
  },
  title: 'Card Select',
  chips: [
    {
      text: 'Chip 1',
      color: 'success',
      type: 'filled',
    },
    {
      text: 'Chip 2',
      color: 'warning',
      type: 'filled',
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
    'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
  disabled: false,
  value: undefined,
  additionalInfo: [
    {
      key: 'Key 1',
      value: 'Value 1',
    },
    {
      key: 'Key 2',
      value: 'Value 2',
    },
  ],
};

const CardSelectGroupTemplate: StoryFn<TCardSelectGroupProps> = args => {
  const [selected, setSelected] = useState<number | string>(1);

  return (
    <div style={{ width: '50%' }}>
      <_CardSelectGroup {...args} cards={CARDS} value={selected} handleChange={setSelected} />
    </div>
  );
};

export const CardSelectGroup = CardSelectGroupTemplate.bind({});
