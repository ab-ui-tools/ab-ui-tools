import Skeleton from 'react-loading-skeleton';
import React from 'react';
import classnames from 'classnames';
import classNames from 'classnames';
import { flexRender } from '@tanstack/react-table';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';

import type { TTableProps } from './types';

import { useTable } from './useTable';
import { ColumnHeader } from './ColumnHeader';
import { Text } from '../Text';
import { Empty } from '../Empty';

export function Table<TData>({
  data,
  columns,
  isLoading,
  hasError,
  emptyTitle,
  emptySubTitle,
  emptyIllustration,
  withSelect = false,
  withBorder = true,
  reloadAction,
  reloadButtonText,
  reloadButtonIcon,
  defaultPageIndex,
  defaultPageSize,
  renderHeader,
  renderFooter,
  onSortChange,
  onRowSelection,
  onColumnSizing,
  onPaginationChange,
}: TTableProps<TData>) {
  const { table, sensors, handleDragStart, handleDragEnd, handleDragCancel, activeHeader } = useTable({
    data,
    columns,
    withSelect,
    defaultPageIndex,
    defaultPageSize,
    onSortChange,
    onRowSelection,
    onColumnSizing,
    onPaginationChange,
  });

  const header = renderHeader?.(table);
  const footer = renderFooter?.(table);
  return (
    <div
      className={classNames('advanced-table scrollbar scrollbar--vertical', {
        'with-border': withBorder,
      })}
    >
      {header}
      <div className="advanced-table__inner scrollbar scrollbar--horizontal">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <div>
            <table style={{ minWidth: data?.length && table.getCenterTotalSize() }}>
              {!data?.length && !hasError ? (
                <Empty mainMessage={emptyTitle} illustration={emptyIllustration} />
              ) : hasError ? (
                <Empty
                  mainMessage={emptyTitle}
                  paragraphMessage={emptySubTitle}
                  illustration={emptyIllustration}
                  buttonProps={{
                    buttonText: reloadButtonText,
                    iconProps: reloadButtonIcon,
                    onClick: reloadAction,
                  }}
                />
              ) : (
                <>
                  <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                      <tr key={headerGroup.id}>
                        <SortableContext
                          items={headerGroup.headers.map(header => header.id)}
                          strategy={horizontalListSortingStrategy}
                        >
                          {headerGroup.headers.map(header => (
                            <ColumnHeader key={header.id} header={header} />
                          ))}
                        </SortableContext>
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map(row => (
                      <tr className={classnames({ ['selected']: row.getIsSelected() })} key={row.id}>
                        {row.getVisibleCells().map(cell => (
                          <td
                            className={classnames({
                              ['with-checkbox']: cell.column.id === 'select',
                            })}
                            id={cell.id}
                            key={cell.id}
                            style={{ width: cell.column.getSize() }}
                          >
                            {isLoading ? <Skeleton /> : flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </>
              )}
            </table>
          </div>
          <DragOverlay dropAnimation={null}>
            {activeHeader && (
              <table style={{ width: activeHeader.getSize() }}>
                <thead>
                  <tr>
                    <th className="draggable-col" style={{ width: activeHeader.getSize() }}>
                      <Text weight={'bold'}>
                        {flexRender(activeHeader.column.columnDef.header, activeHeader.getContext())}
                      </Text>
                    </th>
                  </tr>
                </thead>
              </table>
            )}
          </DragOverlay>
        </DndContext>
      </div>
      {!!data.length && !hasError && footer}
    </div>
  );
}
