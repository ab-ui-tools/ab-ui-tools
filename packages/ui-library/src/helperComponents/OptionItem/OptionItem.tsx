import type { ForwardedRef, JSX } from 'react';

import { forwardRef } from 'react';
import { useCallback } from 'react';
import classNames from 'classnames';

import type { TSelectItemProps } from './types';
import type { TClickEventType } from '../../types/globalTypes';

import { Tooltip } from '../../components/Tooltip';
import { IconCheckmark } from '../../components/SVGIcons/IconCheckmark';
import { Radio } from '../../components/Radio';
import { Checkbox } from '../../components/Checkbox';
import { Avatar } from '../../components/Avatar';

export const OptionItem = forwardRef((props: TSelectItemProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const {
    data,
    onClick,
    disabled,
    avatar,
    isSelected,
    labelLeftIconProps,
    optionLeftIcon,
    LabelRightIconComponent,
    OptionRightIconComponent,
    isCheckbox,
    isRadio,
    className = '',
    tooltipAddons,
    dataId = '',
    withTitleOption = false,
  } = props;

  const { label, meta, value } = data;

  const handleClick = useCallback(
    (e: TClickEventType) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) {
        return;
      }
      onClick({ value, label });
    },
    [disabled, value, label, onClick]
  );

  const optionContent = (
    <div
      title={withTitleOption ? `${label}` : ''}
      data-id={dataId}
      id={`${value}`}
      ref={ref}
      className={classNames(
        'select__option',
        {
          'select__option--disabled': disabled,
        },
        className
      )}
      onClick={handleClick}
    >
      {isCheckbox ? <Checkbox selectedValue={isSelected} disabled={disabled} /> : null}
      {isRadio ? <Radio isSelected={isSelected} disabled={disabled} /> : null}
      {!isCheckbox && !isRadio && isSelected ? (
        <IconCheckmark size="xsmall" type={disabled ? 'disabled' : 'brand-light'} />
      ) : null}
      <div className="select__option__inner">
        {optionLeftIcon && optionLeftIcon.Component ? (
          <optionLeftIcon.Component {...optionLeftIcon} size="small" />
        ) : null}
        {avatar ? <Avatar size="xxsmall" imagePath={avatar} /> : null}
        {labelLeftIconProps?.Component ? (
          <labelLeftIconProps.Component
            size="xsmall"
            type={disabled ? 'disabled' : 'primary'}
            className="mr-4"
            {...labelLeftIconProps}
          />
        ) : null}
        <div className="select__option__content" data-id={dataId}>
          <span className={`select__option__text ${disabled ? 'color-disabled' : ''}`}>{label}</span>
          {LabelRightIconComponent && LabelRightIconComponent(value)}

          {meta ? <span className={`select__option__meta ${disabled ? 'color-disabled' : ''}`}>{meta}</span> : null}
        </div>
      </div>
      {OptionRightIconComponent && OptionRightIconComponent(value)}
    </div>
  );

  return tooltipAddons ? (
    <>
      <Tooltip {...tooltipAddons} text={`${label}`} id={`${value}`} />
      {optionContent}
    </>
  ) : (
    optionContent
  );
});
