/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Column, Hooks } from 'react-table';

import React from 'react';

import { IndeterminateCheckbox } from './IndeterminateCheckbox';

export const CHECKBOX_HEADER_ID = 'selection';
export const CHECKBOX_DEFAULT_WIDTH = 48;

export function setSelectedRows(hooks: Hooks, withSelect: boolean): void {
  if (withSelect) {
    hooks.visibleColumns.push((columns: Column[]) => [
      {
        id: CHECKBOX_HEADER_ID,

        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
      },
      ...columns,
    ]);
  }
}

export function calcColumnWidth(percent: number, tableWidth: number): number {
  return (percent * tableWidth) / 100;
}
