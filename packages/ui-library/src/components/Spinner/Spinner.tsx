import type { ReactElement } from 'react';

import React from 'react';
import classnames from 'classnames';

import type { TSpinnerProps } from './types';

import { HEADING_TYPE_MAPPING, TEXT_TYPE_MAPPING } from './consts';
import { Text } from '../Text';
import './index.scss';
import { Heading } from '../Heading';

export const Spinner = (props: TSpinnerProps): ReactElement => {
  const { mode = 'light', type = 'primary', size = 'large', title, text, className, isFullScreen = true } = props;

  return (
    <div
      className={classnames(
        'spinner-wrapper',
        `spinner-wrapper--${mode}`,
        { 'spinner-wrapper--fullscreen': isFullScreen },
        className
      )}
    >
      <div className={'spinner-wrapper__inner'}>
        <span className={classnames('spinner', `spinner--${type}`, `spinner--${size}`)}></span>
        {title ? (
          <Heading size={'xsmall'} weight={'bolder'} color={HEADING_TYPE_MAPPING[mode]} className={'mt-40'}>
            {title}
          </Heading>
        ) : null}
        {text ? (
          <Text className={'mt-12'} type={TEXT_TYPE_MAPPING[mode]}>
            {text}
          </Text>
        ) : null}
      </div>
    </div>
  );
};
