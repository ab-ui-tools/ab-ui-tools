import type { TCardItemProps } from 'ab-ui-library/components/Cards/types';
import type { StoryFn } from '@storybook/react';

import { IconDelete, IconEdit, IconInfo, IconPerson } from 'ab-ui-library/components/SVGIcons';
import { CardItem as _TCardItem } from 'ab-ui-library/components/Cards';
import { ButtonIcon } from 'ab-ui-library/components/ButtonIcon';

import imageFile1 from '../assets/images/ArCa.svg';

export default {
  title: 'Cards',
  component: _TCardItem,
};

const Template: StoryFn<TCardItemProps> = args => {
  return <_TCardItem {...args} />;
};

export const Cards = Template.bind({});

Cards.args = {
  image: imageFile1,
  icon: {
    Component: IconPerson,
  },
  title: 'Michael Jordan',
  subtitleProps: {
    subtitle: 'Michael Jordan',
    iconProps: {
      Component: IconInfo,
    },
  },
  children: (
    <div className={'flexbox'}>
      <ButtonIcon size={'medium'} iconProps={{ Component: IconDelete }} />
      <ButtonIcon size={'medium'} iconProps={{ Component: IconEdit }} className={'ml-12'} />
    </div>
  ),
  disabled: false,
};
