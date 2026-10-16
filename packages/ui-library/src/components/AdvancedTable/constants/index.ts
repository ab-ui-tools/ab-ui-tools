import type { TSelectOptions } from '../../../types/globalTypes';

export const STORAGE_TYPE = {
  LOCAL: 'localStorage',
  EXTERNAL: 'external',
};

export const TABLE_NAME_PREFIX = 'table-settings';

export const OPTIONS: TSelectOptions = [
  {
    value: '10',
    label: '10 rows',
  },
  {
    value: '20',
    label: '20 rows',
  },
  {
    value: '30',
    label: '30 rows',
  },
  {
    value: '40',
    label: '40 rows',
  },
  {
    value: '50',
    label: '50 rows',
  },
];
