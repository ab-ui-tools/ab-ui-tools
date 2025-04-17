import type { Meta, StoryFn } from '@storybook/react';
import type { ImagePropTypes } from '@ab.uitools/ui-library/components/Image/types';

import React from 'react';
import { Image as _Image } from '@ab.uitools/ui-library/components/Image';

// @ts-ignore
import imageFile from '../assets/images/avatar.jpg';

const image = {
  src: imageFile,
  alt: 'my image',
};

export default {
  title: 'Image',
  component: _Image,
  argTypes: {
    backgroundSize: {
      options: ['cover', 'contain'],
      control: { type: 'radio' },
    },
    ratio: {
      options: ['1/1', '2/1', '3/1', '4/3', '16/9', '1/1.618', '2/3'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: StoryFn<ImagePropTypes> = args => (
  <div style={{ width: 300 }}>
    <_Image {...args} />
  </div>
);

export const Image = Template.bind({});
Image.args = {
  imagePath: image.src,
  isBackgroundImage: false,
  backgroundSize: 'contain',
  isFullWidth: false,
  isFullHeight: false,
  ratio: '1/1',
};
