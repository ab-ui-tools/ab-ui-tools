import type { ChangeEvent } from 'react';
import type { StoryFn } from '@storybook/react';
import type { TCardSelectGroupProps, TCardSelectProps } from '@ab.uitools/ui-library/components/CardSelect/types';

import { useState } from 'react';
import IconQuestionCircle from '@ab.uitools/ui-library/components/SVGIcons/IconQuestionCircle';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import { Popover } from '@ab.uitools/ui-library/components/Popover';
import { CardSelectGroup as _CardSelectGroup } from '@ab.uitools/ui-library/components/CardSelect';
import { CardSelect as _CardSelect } from '@ab.uitools/ui-library/components/CardSelect';

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

// ============================================================================
// Single CardSelect Stories
// ============================================================================

const SingleCardTemplate: StoryFn<TCardSelectProps> = args => {
  const [selectedValue, setSelectedValue] = useState<number | string>('');

  return (
    <div style={{ width: '600px' }}>
      <_CardSelect {...args} value={selectedValue} handleChange={setSelectedValue} />
    </div>
  );
};

export const DefaultCard = SingleCardTemplate.bind({});
DefaultCard.args = {
  type: CARD_SELECT_TYPES.cardRadio,
  cardValue: 'option1',
  illustration: imageFile,
  title: 'Default Card Select',
  subtext: 'This is a subtitle describing the option',
  chips: [
    {
      text: 'Popular',
      color: 'success',
      type: 'filled',
    },
    {
      text: 'Recommended',
      color: 'warning',
      type: 'filled',
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  disabled: false,
  additionalInfo: [
    {
      key: 'Storage',
      value: '100 GB',
    },
    {
      key: 'Users',
      value: 'Up to 10',
    },
  ],
};
