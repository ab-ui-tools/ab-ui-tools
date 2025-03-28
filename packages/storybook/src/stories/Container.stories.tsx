import type { JSX } from 'react';

import React from 'react';
import { Text } from 'ab-ui-library/components/Text';
import { Container as _Container } from 'ab-ui-library/components/Container';
import { Button } from 'ab-ui-library/components/Button';

import { noop } from '../utils/helpers';

export default {
  title: 'Container',
  component: _Container,
};
const Template = (): JSX.Element => {
  const helperStyles = {
    marginTop: '10px',
  };

  return (
    <div>
      <_Container>
        <div>
          <Text size="small" />
          <div style={helperStyles}>
            <Button buttonText="Next" onClick={noop} type="primary" />
          </div>
        </div>
      </_Container>
    </div>
  );
};

export const Container = Template.bind({});
