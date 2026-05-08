import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { TChipsProps } from './types';
import type { TClickEventType } from '../../types/globalTypes';

import { ChipCustomType } from './types';
import { COLOR_MAPPING, LEFT_ICON_SIZE_MAPPING, RIGHT_ICON_SIZE_MAPPING, TEXT_SIZE_MAPPING } from './consts';
import { Text } from '../Text';
import IconDismissCircle from '../SVGIcons/IconDismissCircle';

export const Chips = (props: TChipsProps): ReactElement => {
  const {
    type = 'filled',
    color = 'default',
    size = 'large',
    text,
    disabled,
    className = '',
    leftIconProps,
    withAction,
    onClick,
    isReadOnly = false,
    dataId = '',
  } = props;

  const customType = disabled
    ? 'disabled'
    : type == ChipCustomType.filled
      ? ChipCustomType.inverse
      : COLOR_MAPPING[color];

  const handleClick = (event: TClickEventType) => {
    event.stopPropagation();
    onClick?.(event);
  };

  return (
    <div
      className={classNames(`chips chips--${type} chips--${disabled ? 'disabled' : color} chips--${size}`, className)}
      aria-readonly={isReadOnly}
    >
      {leftIconProps?.Component ? (
        <leftIconProps.Component
          dataId={`${dataId}-icon`}
          size={RIGHT_ICON_SIZE_MAPPING[size]}
          type={customType}
          className="chips__icon"
          {...leftIconProps}
        />
      ) : null}
      {text ? (
        <Text
          dataId={`${dataId}-text`}
          type={customType}
          size={TEXT_SIZE_MAPPING[size]}
          className="chips__label text-truncate"
        >
          <>{text}</>
        </Text>
      ) : null}
      {withAction && (
        <IconDismissCircle
          dataId={`${dataId}-icon`}
          size={LEFT_ICON_SIZE_MAPPING[size]}
          type={customType}
          className="chips__delete ml-4"
          onClick={handleClick}
        />
      )}
    </div>
  );
};
