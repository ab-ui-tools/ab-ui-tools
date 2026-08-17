import type { Column, Table } from '@tanstack/react-table';

import { useState } from 'react';

import type { TButtonPropTypes } from '../Button/types';
import type { TSVGIconComponent } from '../../types/globalTypes';

import { Positions } from '../Tooltip/types';
import { Tooltip } from '../Tooltip';
import { Text } from '../Text';
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
  menuPosition?: Positions;
}

const defaultHiddenColumnSettings = ['select', 'actions', 'expand'];

export function ColumnSettings<T>({
  table,
  tooltipText,
  menuIconTooltipText,
  hiddenColumns = [],
  allToggleText = 'All',
  menuPosition = Positions.TOP_RIGHT,
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

  const columns = table
    .getAllLeafColumns()
    .filter(column => column.getCanHide() && !hiddenColumnSettings.includes(column.id));

  const isAllSelected = columns.every(column => column.getIsVisible());
  const isSomeSelected = columns.some(column => column.getIsVisible());

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
        className="column-settings"
        position={menuPosition}
        onClose={closeUserMenu}
        isOpen={isOpen}
        parentRef={ref}
        additionalRef={menuButtonRef}
      >
        <div className={'column-settings__inner'}>
          <div className="column-settings__top">
            <Checkbox
              iconProps={{ name: isAllSelected ? 'checkmark' : 'subtract' }}
              label={allToggleText}
              selectedValue={isSomeSelected}
              onClick={() => table.toggleAllColumnsVisible()}
            />
          </div>
          <div className="column-settings__content">
            <div className={'column-settings__scrollbar scrollbar scrollbar--vertical'}>
              {table.getAllLeafColumns().map(column => {
                if (!hiddenColumnSettings?.includes(column.id)) {
                  const text =
                    typeof column.columnDef.header === 'string' ? column.columnDef.header : column.columnDef.id;
                  const Icon = (column.columnDef.meta as TColumnMeta | undefined)?.icon;
                  const label = Icon ? (
                    <div className="column-settings__control__info">
                      <Icon size="small" />
                      <Text className={'column-settings__control__info__text'}>{text}</Text>
                    </div>
                  ) : (
                    text
                  );
                  return (
                    <div key={column.id} className={'column-settings__option'}>
                      {tooltipText && !column.getCanHide() && (
                        <Tooltip position={Positions.TOP_CENTER} text={tooltipText} id={column.columnDef.id} />
                      )}
                      <Checkbox
                        className={'column-settings__control'}
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
        </div>
      </Menu>
    </div>
  );
}
