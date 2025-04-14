import type { ReactElement } from 'react';

import React, { useMemo, useRef } from 'react';
import classNames from 'classnames';

import type { TSelectWrapperProps } from '../../types';

import { Button } from './Button/Button';
import { noop } from '../../../../utils/helpers';
import { useChangePositionsOnScroll } from '../../../../hooks/useChangePositionsOnScroll';
import { useGetElemPositions, useGetElemSizes, useGetHasBottomSpace, useGetHasTopSpace } from '../../../../hooks';
import { DROPDOWN_AND_INPUT_GAP } from '../../../../consts';

export const ButtonSelectWrapper = (props: TSelectWrapperProps): ReactElement => {
  const {
    children,
    size,
    className,
    dropdownWidth,
    align = 'left',
    offsets,
    isOpen,
    setIsOpen,
    containerRef,
    setContainerRef,
    dropdownRef,
    setDropdownRef,
    selectedValues,
    placeHolder,
    dataId,
    disabled,
    type = 'secondary',
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  const changeOpenState = () => setIsOpen(!isOpen);

  const { bottom, left, top, right } = useGetElemPositions(buttonRef.current);
  const { width: containerWidth } = useGetElemSizes(containerRef);

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: buttonRef.current,
  });

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: buttonRef.current,
  });

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues) return '';
    if (selectedValues?.length === 0) return '';
    if (selectedValues?.length === 1) return `${selectedValues[0].label}`;

    return ` ${selectedValues[0].label} +${selectedValues.length - 1}`;
  }, [selectedValues]);

  useChangePositionsOnScroll({
    parentElement: buttonRef?.current,
    childElement: dropdownRef,
    hasBottomSpace,
    checkPositionsOnScroll: !(typeof offsets?.top === 'number'),
  });

  return (
    <div className={classNames(`select select--${size}`, className)} ref={setContainerRef}>
      <Button
        size={size}
        type={type}
        dataId={dataId}
        isOpen={isOpen}
        buttonText={placeHolder || ''}
        selectedItemsLabels={selectedItemsLabels}
        onClick={disabled ? noop : changeOpenState}
        refHandler={buttonRef}
        className="select_button"
      />

      {isOpen && (
        <div
          className="select__options"
          style={{
            left: align === 'left' ? offsets?.left || left : right - (dropdownWidth || containerWidth),
            right: align === 'right' ? offsets?.right || left : right - (dropdownWidth || containerWidth),
            width: dropdownWidth || containerWidth,
            ...(hasBottomSpace || !hasTopSpace
              ? { top: offsets?.top || bottom }
              : { bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP }),
          }}
          ref={setDropdownRef}
        >
          {children}
        </div>
      )}
    </div>
  );
};
