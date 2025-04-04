import type { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import React, { useId, useMemo, useState } from 'react';
import classNames from 'classnames';

import type { TMenuProps, TMenuItem } from './types';

import {
  useOnOutsideClick,
  useGetElemSizes,
  useGetTooltipPosition,
  useGetElemPositions,
  useHideOnScroll,
} from '../../hooks';
import { OptionItem } from '../../helperComponents';

export const Menu = (props: TMenuProps): ReactElement | null => {
  const { menuItems = [], parentRef, onClose, isOpen, position = 'bottom-right', className = '', children } = props;
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null);
  useOnOutsideClick(menuRef, onClose, isOpen, useId());
  useHideOnScroll(onClose);
  const { left, top } = useGetElemPositions(parentRef);
  const { width, height } = useGetElemSizes(parentRef);
  const { width: menuWidth, height: menuHeight } = useGetElemSizes(menuRef);

  const tooltipPosition = useGetTooltipPosition({
    tooltipRef: menuRef,
    elemRef: parentRef,
    initialPosition: position,
    hasTriangle: false,
  });

  const menuStyles = useMemo(() => {
    if (tooltipPosition === 'bottom-right') {
      return { left: left + 4, top: top + 4 + height };
    }
    if (tooltipPosition === 'bottom-left') {
      return { left: left - menuWidth + width, top: top + 4 + height };
    }
    if (tooltipPosition === 'top-right') {
      return { left: left + 4, top: top - menuHeight - 4 };
    }
    if (tooltipPosition === 'top-left') {
      return { left: left - menuWidth + width, top: top - menuHeight - 4 };
    }

    return { left: left, top: top + 4 + height };
  }, [left, top, width, tooltipPosition, menuWidth, height, menuHeight]);

  if (!parentRef || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={classNames('select', 'select--menu', className)} style={menuStyles} ref={setMenuRef}>
      <>
        {children ? (
          children
        ) : (
          <>
            {menuItems.map(({ label, meta, value, handler, iconProps, disabled, dataId }: TMenuItem) => {
              return (
                <OptionItem
                  dataId={dataId}
                  disabled={disabled}
                  key={value}
                  data={{
                    label,
                    value,
                    meta,
                  }}
                  labelLeftIconProps={iconProps}
                  onClick={() => {
                    onClose();
                    if (handler) {
                      handler();
                    }
                  }}
                />
              );
            })}
          </>
        )}
      </>
    </div>,
    parentRef
  );
};
