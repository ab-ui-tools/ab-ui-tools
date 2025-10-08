import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { TCardSelectProps } from './types';

import { CardAdditionalInfo, CardChips, CardDescription, CardInput } from './components';
import { Positions } from '../Tooltip/types';
import { Tooltip } from '../Tooltip';
import { Text } from '../Text';
import { Radio } from '../Radio';
import { Popover } from '../Popover';
import { Image } from '../Image';
import { CARD_SELECT_TYPES } from '../../consts';

export const CardSelect = (props: TCardSelectProps): ReactElement => {
  const {
    type = CARD_SELECT_TYPES.cardRadio,
    title,
    subtext,
    description,
    inputProps,
    chips = [],
    disabled,
    className,
    additionalInfo,
    handleChange,
    name,
    setFieldValue,
    value,
    cardValue,
    illustration,
    icon,
    dataId,
    popoverAddons,
    tooltipAddons,
  } = props;
  const elementId = popoverAddons?.id ?? tooltipAddons?.id ?? '';
  const selected = cardValue === value;
  const cardSelectStyle = classNames(
    `card-select ${disabled ? 'card-select--disabled' : selected ? 'card-select--selected' : ''}`,
    className
  );
  const handleCardSelectValue = (selected: number | string) => {
    if (!disabled) {
      if (name && setFieldValue) {
        setFieldValue(name, selected, { shouldValidate: true });
      }
      handleChange?.(selected);
    }
  };

  const handleCardSelect = () => {
    if (!disabled && cardValue) {
      handleCardSelectValue(cardValue);
    }
  };

  return (
    <>
      {tooltipAddons ? <Tooltip {...tooltipAddons} /> : null}
      <div id={`${elementId}`} className={cardSelectStyle} onClick={handleCardSelect} data-id={dataId}>
        {popoverAddons ? (
          <Popover
            dataId={popoverAddons?.dataId}
            text={popoverAddons?.text}
            id={`${popoverAddons?.id}`}
            clicked={popoverAddons?.clicked}
            position={Positions?.MIDDLE_RIGHT}
          />
        ) : null}
        {illustration ? (
          <div className={'card-select__image mr-16'}>
            <Image imagePath={illustration} />
          </div>
        ) : icon && icon.Component ? (
          <div className={'card-select__icon mr-16'}>
            <icon.Component {...icon} />
          </div>
        ) : null}
        <div className={'card-select__content'}>
          <div className="flexbox justify-content--between align-items--start">
            <div className={'card-select__content__left'}>
              <Text type={disabled ? 'disabled' : 'primary'} size={'medium'} weight={'bold'}>
                <>{title}</>
              </Text>
              {subtext ? (
                <Text type={disabled ? 'disabled' : 'secondary'} className={'mt-8'}>
                  <>{subtext}</>
                </Text>
              ) : null}
            </div>
            {type === CARD_SELECT_TYPES.cardRadio ? (
              <Radio name={name} isSelected={selected} disabled={disabled} className={'ml-16'} />
            ) : null}
          </div>
          {chips.length ? <CardChips chips={chips} /> : null}
          <CardInput inputProps={inputProps} disabled={disabled} />
          <CardDescription description={description} disabled={disabled} />
          <CardAdditionalInfo additionalInfo={additionalInfo} disabled={disabled} />
        </div>
      </div>
    </>
  );
};
