import type { Column, HeaderGroup, Row as RowType, TableInstance, Hooks } from 'react-table';
import type { ReactElement } from 'react';

import { useSortBy, useTable, useRowSelect } from 'react-table';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import type { TColumn, TTableProps } from './types';

import { setSelectedRows } from './utils';
import { Row } from './Row';
import { Header } from './Header';
import { Empty } from '../Empty';
import { useDispatchEventOnScroll } from '../../hooks/useDispatchEventOnScroll';

export function Table({
  columns,
  data,
  onChange,
  fixedHeader,
  withSelect = false,
  handleRowClick,
  className,
  sortIconProps,
  containerRefHandler,
  noResultProps,
}: TTableProps): ReactElement {
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [tableWidth, setTableWidth] = useState(400);

  const dispatchScrollEvent = useDispatchEventOnScroll();

  const sortedColumns = useMemo(() => {
    const condition1 = (item: TColumn) => item.fixed === 'left'; // Move even numbers to the start
    const condition2 = (item: TColumn) => item.fixed === 'right'; // Move numbers greater than 5 to the end

    // Custom sorting function
    columns.sort((a, b) => {
      if (condition1(a) && !condition1(b)) {
        return -1; // Move 'a' to the start
      } else if (!condition1(a) && condition1(b)) {
        return 1; // Move 'b' to the start
      } else if (condition2(a) && !condition2(b)) {
        return 1; // Move 'a' to the end
      } else if (!condition2(a) && condition2(b)) {
        return -1; // Move 'b' to the end
      } else {
        return 0; // Their order doesn't matter
      }
    });

    return [...columns];
  }, [columns]);

  const { getTableProps, getTableBodyProps, selectedFlatRows, headerGroups, rows, prepareRow, state } = useTable(
    {
      columns: sortedColumns as Column[],
      data,
    },
    useSortBy,
    useRowSelect,
    (hooks: Hooks) => setSelectedRows(hooks, withSelect)
  ) as TableInstance & { selectedFlatRows: RowType[] };

  useEffect(() => {
    onChange?.(state);
  }, [JSON.stringify(state)]);

  const handleResize = () => {
    if (tableRef.current) {
      setTableWidth(tableRef.current?.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (tableRef.current) {
      setTableWidth(tableRef.current?.offsetWidth);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [tableRef.current]);

  return (
    <div
      onScroll={dispatchScrollEvent}
      ref={containerRefHandler}
      className={classNames('table-wrapper scrollbar scrollbar--horizontal scrollbar--vertical', className)}
    >
      <table {...getTableProps()} ref={tableRef}>
        <thead>
          {headerGroups.map((headerGroup: HeaderGroup, i) => (
            <Header
              key={i}
              sortIconProps={sortIconProps}
              withSelect={withSelect}
              fixedHeader={fixedHeader}
              headerGroup={headerGroup}
              tableWidth={tableWidth}
            />
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows?.length ? (
            rows.map((row: RowType) => {
              prepareRow(row);
              return (
                <Row
                  handleRowClick={handleRowClick}
                  withSelect={withSelect}
                  selectedFlatRows={selectedFlatRows}
                  row={row}
                  key={row.id}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan={withSelect ? columns.length + 1 : columns.length}>
                <Empty mainMessage={noResultProps?.title} paragraphMessage={noResultProps?.text} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
