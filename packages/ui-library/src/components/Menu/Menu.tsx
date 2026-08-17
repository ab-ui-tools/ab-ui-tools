import type { ReactElement } from 'react';

import ReactDOM from 'react-dom';
import { useId, useState } from 'react';
import classNames from 'classnames';

import type { TMenuProps, TMenuItem } from './types';

import { useOnOutsideClick, useGetMenuStyles, useHideOnScroll } from '../../hooks';
import { OptionItem } from '../../helperComponents';

export const Menu = (props: TMenuProps): ReactElement | null => {
  const {
    additionalRef = null,
    containerRef = null,
    menuItems = [],
    parentRef,
    onClose,
    isOpen,
    position = 'bottom-right',
    className = '',
    withTitleOption = false,
    children,
  } = props;
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null);
  useOnOutsideClick([menuRef, additionalRef], onClose, isOpen, useId());
  useHideOnScroll(onClose, containerRef);
  const menuStyles = useGetMenuStyles(parentRef, menuRef, position);

  if (!parentRef || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {children ? (
        <div className={classNames('menu-dropdown', className)} style={menuStyles} ref={setMenuRef}>
          {children}
        </div>
      ) : (
        <div className={classNames('select', 'select--menu', className)} style={menuStyles} ref={setMenuRef}>
          <div className={'select__options'}>
            {menuItems.map(({ label, meta, value, handler, iconProps, disabled, dataId }: TMenuItem) => {
              return (
                <OptionItem
                  dataId={dataId}
                  withTitleOption={withTitleOption}
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
          </div>
        </div>
      )}
    </>,
    parentRef
  );
};
