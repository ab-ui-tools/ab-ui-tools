import type { TProgressPropTypes } from 'ab-ui-library/components/Progress/types';
import type { StoryFn } from '@storybook/react';

import React from 'react';
import { CodeBlock } from 'ab-ui-library/helperComponents';
import { Progress as _Progress } from 'ab-ui-library/components/Progress';
import { ProgressBarWrapper as _ProgressBarWrapper } from 'ab-ui-library/components/Progress';

export default {
  title: 'Progress',
  component: _Progress,
  argTypes: {
    type: {
      options: ['linear', 'circle'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};

const designSpecs = `
// With steps
<Progress
  currentStep={2}
  stepCount={3}
/>
// With percent
<Progress
  percent={30}
/>
// With circle type
<Progress
  percent={30}
  type: 'circle'
/>
`;

const Template: StoryFn<TProgressPropTypes> = args => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <_Progress {...args} />
      <CodeBlock title="Design Specs Example">{designSpecs}</CodeBlock>
    </div>
  );
};

export const Progress = Template.bind({});
Progress.args = {
  type: 'linear',
  size: 'large',
  percent: 30,
  noText: false,
  hasError: false,
  dimension: 0,
  loop: false,
};

const progressBarWrapperDesignSpecs = `
<ProgressBarWrapper>
  <Progress percent={30} noText={true} />
  <Progress percent={0} noText={true} />
  <Progress percent={0} noText={true} />
</ProgressBarWrapper>
`;

const ProgressBarWrapperTemplate = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <_ProgressBarWrapper>
        <_Progress percent={30} noText={true} />
        <_Progress percent={0} noText={true} />
        <_Progress percent={0} noText={true} />
      </_ProgressBarWrapper>
      <CodeBlock title="Design Specs Example">{progressBarWrapperDesignSpecs}</CodeBlock>
    </div>
  );
};

export const ProgressBar = ProgressBarWrapperTemplate.bind({});
