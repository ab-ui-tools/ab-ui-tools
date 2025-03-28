import type { ReactNode } from 'react';
import type {
  ColumnDef,
  ColumnSizingState,
  PaginationState,
  RowSelectionState,
  Table,
  Row,
} from '@tanstack/react-table';

import type { TSVGIconType } from '../SVGIcons/types';

export type TTable<TData> = Table<TData>;
export type TRowSelectionState = RowSelectionState;
export type TColumnSizingState = ColumnSizingState;
export type TPaginationState = PaginationState;

export type TTableProps<TData> = {
  data: TData[];
  isLoading?: boolean;
  columns: ColumnDef<TData>[];
  wi?: boolean;
  hasError?: boolean;
  emptyTitle?: string;
  emptySubTitle?: string;
  emptyIllustration?: string;
  reloadAction?: () => void;
  reloadButtonText?: string;
  reloadButtonIcon?: {
    size?: TIconSize;
    type?: TSVGIconType;
    alignment?: string;
    Component?: TSVGIconComponent;
  };
  className?: string;
  withSelect?: boolean;
  withBorder?: boolean;
  customHeader?: ReactNode;
  defaultPageIndex?: number;
  defaultPageSize?: number;
  renderHeader?: (table: TTable<TData>) => ReactNode;
  renderFooter?: (table: Table<TData>) => ReactNode;
  onSortChange?: (state: SortingUpdateEvent) => void;
  onRowSelection?: (state: TRowSelectionState) => void;
  onColumnSizing?: (state: TColumnSizingState) => void;
  onPaginationChange?: (state: TPaginationState) => void;
};

export type Column<TData> = ColumnDef<TData> & {
  enableColumnDragging?: boolean;
};

export type SortingUpdateEvent = {
  column: string;
  direction: 'asc' | 'desc' | false;
  timestamp: number;
};

export interface ICellProps<TData> {
  row: Row<TData>;
}

export interface IHeaderProps<TData> {
  table: Table<TData>;
}
