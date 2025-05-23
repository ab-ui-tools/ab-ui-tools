import type { JSX } from 'react';

import React, { useState } from 'react';

import type { TMorePropTypes } from './types';

import { Text } from '../Text';
import { Button } from '../Button';

export const More = (props: TMorePropTypes): JSX.Element => {
  const {
    textProps = {},
    expandedText,
    collapsedText,
    buttonText = {
      expand: 'Ավելին',
      collapse: 'Փակել',
    },
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = (e: TClickEventType) => {
    e.stopPropagation();
    setIsExpanded(true);
  };
  const collapse = (e: TClickEventType) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <Text {...textProps} className={'more'}>
      {`${isExpanded ? expandedText : collapsedText}`}
      <Button
        className={'more__btn ml-4'}
        type="text"
        buttonText={isExpanded ? buttonText.collapse : buttonText.expand}
        onClick={isExpanded ? collapse : expand}
      />
    </Text>
  );
};
