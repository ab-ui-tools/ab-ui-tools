import type { ReactElement } from 'react';

import React from 'react';

import type { TBlock } from './types';

import { Text } from '../Text';
import { Divider } from '../Divider';

export const Block = (props: TBlock): ReactElement => {
  const { children, label } = props;
  return (
    <div className="navigation-block">
      <div className="navigation-block__label">
        <>
          <Text size="standard" type="tertiary" className={'navigation-block__label__text'}>
            {label}
          </Text>
          <Divider type={'primary'} isHorizontal={true} className={'navigation-block__label__divider'} />
        </>
      </div>
      <div className="navigation-block__inner">{children}</div>
    </div>
  );
};
