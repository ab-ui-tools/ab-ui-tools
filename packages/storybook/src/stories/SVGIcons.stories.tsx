import type { StoryFn } from '@storybook/react';
import type { TSVGIconComponent } from '@ab.uitools/ui-library/types/globalTypes';
import type { ISVGIconProps } from '@ab.uitools/ui-library/components/SVGIcons/types';

import { Text } from '@ab.uitools/ui-library/components/Text';
import * as FlagComponents from '@ab.uitools/ui-library/components/SVGIcons/Flags';
import * as Icons from '@ab.uitools/ui-library/components/SVGIcons';

export default {
  title: 'SVG Icons',
  component: null,
  argTypes: {
    size: {
      options: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'select' },
    },
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'disabled',
        'inverse',
        'brand-light',
        'brand-dark',
        'danger-light',
        'danger-dark',
        'warning-light',
        'warning-dark',
        'success-light',
        'success-dark',
        'information-light',
        'information-dark',
        'discovery-light',
        'discovery-dark',
      ],
      control: { type: 'select' },
    },
    filled: {
      options: ['false', 'true'],
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn<ISVGIconProps & { filled: string }> = args => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {Object.values(Icons)
        .filter(Component => {
          const isFilledIncluded = Component.name.toLowerCase().includes('filled');
          return args.filled === 'true' ? isFilledIncluded : !isFilledIncluded;
        })
        .map((Component, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '10px',
            }}
          >
            <Component {...args} />
            <Text className="mt-8">
              {Component.name
                .replace(/^Icon([A-Z])/g, '$1')
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .toLowerCase()}
            </Text>
          </div>
        ))}
    </div>
  );
};

export const SVGIcons = Template.bind({});

SVGIcons.args = {
  size: 'medium',
  type: 'primary',
  filled: 'false',
};

const flagLabel = (componentName: string) =>
  componentName
    .replace(/^Flag/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

const FlagsTemplate: StoryFn<ISVGIconProps & { search: string }> = ({ search, ...args }) => {
  const query = search.trim().toLowerCase();
  const flags = Object.entries(FlagComponents).filter(
    (entry): entry is [string, TSVGIconComponent] =>
      /^Flag[A-Z]/.test(entry[0]) && (!query || flagLabel(entry[0]).includes(query))
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {flags.map(([name, Component]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
          <Component {...args} />
          <Text className="mt-8">{flagLabel(name)}</Text>
        </div>
      ))}
      {flags.length === 0 ? <Text>No flags match “{search}”</Text> : null}
    </div>
  );
};

export const Flags = FlagsTemplate.bind({});

Flags.args = {
  size: 'medium',
  search: '',
};

Flags.argTypes = {
  search: {
    control: { type: 'text' },
    description: 'Filter by country name, e.g. "armenia"',
  },
};

Flags.parameters = {
  controls: { exclude: ['type', 'filled'] },
  docs: {
    description: {
      story:
        'Circle country flags from the design system. Each flag is a component (`FlagArmenia`, `FlagUnitedStates`…) with the same props as the icons.',
    },
  },
};
