import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { TTabProps } from './types';

import { TabItem } from './TabItem';
export const Tab = (props: TTabProps): ReactElement => {
  const { selectedValue, tabItems, onSelect, size, className, type = 'primary', color, ...rest } = props;

  return (
    <div
      className={classNames(
        'tabs-container',
        `tabs-container--${type}`,
        `${color ? 'tabs-container--' + color : null}`,
        `tabs-container--${size}`,
        className
      )}
    >
      {tabItems.map(tabInfo => {
        return (
          <TabItem
            label={tabInfo.label}
            size={size}
            badgeProps={tabInfo.badgeProps}
            onClick={() => onSelect(tabInfo.value)}
            key={tabInfo.value}
            val={tabInfo.value}
            isSelected={selectedValue === tabInfo.value}
            dataId={tabInfo?.dataId || ''}
            disabled={tabInfo.disabled}
            iconProps={tabInfo.iconProps}
            rightIconProps={tabInfo.rightIconProps}
            {...rest}
          />
        );
      })}
    </div>
  );
};
