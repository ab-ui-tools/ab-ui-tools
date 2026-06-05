import type { Column, Table } from '@tanstack/react-table';

import { useState } from 'react';

import type { TButtonPropTypes } from '../Button/types';
import type { TSVGIconComponent } from '../../types/globalTypes';

import { Positions } from '../Tooltip/types';
import { Tooltip } from '../Tooltip';
import { IconSettings } from '../SVGIcons';
import { Menu } from '../Menu';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';

type TColumnMeta = {
  icon?: TSVGIconComponent;
};

interface ColumnSettingsProps<T> {
  table: Table<T>;
  tooltipText?: string;
  hiddenColumns?: string[];
  allToggleText?: string;
  menuIconTooltipText?: string;
  buttonProps?: TButtonPropTypes;
}

const defaultHiddenColumnSettings = ['select', 'actions', 'expand'];

export function ColumnSettings<T>({
  table,
  tooltipText,
  menuIconTooltipText,
  hiddenColumns = [],
  allToggleText = 'All',
  buttonProps = {
    type: 'secondary',
    iconProps: {
      Component: IconSettings,
    },
  },
}: ColumnSettingsProps<T>) {
  const [menuButtonRef, setMenuButtonRef] = useState<HTMLButtonElement | null>(null);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeUserMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (column: Column<T>) => {
    const toggle = column.getToggleVisibilityHandler();
    if (toggle) {
      toggle({ target: { checked: !column.getIsVisible() } });
    }
  };

  const hiddenColumnSettings = defaultHiddenColumnSettings.concat(hiddenColumns);

  return (
    <div ref={setRef}>
      {menuIconTooltipText && (
        <Tooltip position={Positions.TOP_CENTER} text={menuIconTooltipText} id="column-settings-menu-icon" />
      )}
      <Button
        {...buttonProps}
        refHandler={setMenuButtonRef}
        id="column-settings-menu-icon"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      />
      <Menu
        className="settings-menu"
        position="bottom-right"
        onClose={closeUserMenu}
        isOpen={isOpen}
        parentRef={ref}
        additionalRef={menuButtonRef}
      >
        <div className="settings-menu__dropdown">
          <div className="relative">
            <div className="settings-menu__dropdown__option sticky">
              <Checkbox
                label={allToggleText}
                selectedValue={table.getIsAllColumnsVisible()}
                onClick={() => table.toggleAllColumnsVisible()}
              />
            </div>
          </div>
          <div className="scrollbar--content scrollbar scrollbar--vertical">
            {table.getAllLeafColumns().map(column => {
              if (!hiddenColumnSettings?.includes(column.id)) {
                const text =
                  typeof column.columnDef.header === 'string' ? column.columnDef.header : column.columnDef.id;
                const Icon = (column.columnDef.meta as TColumnMeta | undefined)?.icon;
                const label = Icon ? (
                  <span className="flexbox align-items--center" style={{ gap: 'var(--ds-space-8)' }}>
                    <Icon size="small" />
                    {text}
                  </span>
                ) : (
                  text
                );
                return (
                  <div key={column.id} className={'settings-menu__dropdown__option'}>
                    {tooltipText && !column.getCanHide() && (
                      <Tooltip position={Positions.TOP_CENTER} text={tooltipText} id={column.columnDef.id} />
                    )}
                    <Checkbox
                      label={label}
                      dataId={column.columnDef.id}
                      selectedValue={column.getIsVisible()}
                      onClick={() => handleClick(column)}
                      disabled={!column.getCanHide()}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Menu>
    </div>
  );
}
