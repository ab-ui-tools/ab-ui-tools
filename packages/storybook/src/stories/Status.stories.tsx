import type { StoryFn } from '@storybook/react';
import type { TStatusProps } from '@ab.uitools/ui-library/dist/components/Status/types';

import React from 'react';
import { Text } from '@ab.uitools/ui-library/dist/components/Text';
import IconPerson from '@ab.uitools/ui-library/dist/components/SVGIcons/IconPerson';
import IconInfo from '@ab.uitools/ui-library/dist/components/SVGIcons/IconInfo';
import { Status as _Status } from '@ab.uitools/ui-library/dist/components/Status';
import { Popover } from '@ab.uitools/ui-library/dist/components/Popover';

export default {
  title: 'Status',
  component: _Status,
  argTypes: {
    type: {
      options: ['primary', 'disabled', 'brand', 'danger', 'warning', 'success', 'information', 'discovery'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TStatusProps> = args => {
  return (
    <>
      <_Status {...args} type={'danger'}>
        <Text type={'secondary'} size={'small'}>
          Status subtext
        </Text>
      </_Status>
      <_Status {...args} type={'information'}>
        <Text type={'information'} size={'small'}>
          Status subtext
        </Text>
      </_Status>
    </>
  );
};

export const Status = Template.bind({});

Status.args = {
  text: 'Status text',
  type: 'primary',
  size: 'large',
  withCircle: true,
  leftIconProps: {
    Component: IconPerson,
  },
  rightIconProps: (
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
};
