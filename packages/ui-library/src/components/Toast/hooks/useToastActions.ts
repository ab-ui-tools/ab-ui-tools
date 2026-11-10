import { useMemo } from 'react';

import type { TToastAction, TToastId } from '../types';

import { getToastVersion } from '../store';

/**
 * An action runs and then closes the toast — unless its handler turned the toast
 * into something else (e.g. Retry → `toast.update(id, { state: 'loading' })`) or `closeOnClick` is `false`.
 */
export const useToastActions = (
  id: TToastId,
  actions: TToastAction[] | undefined,
  close: () => void
): TToastAction[] | undefined =>
  useMemo(
    () =>
      actions?.map(action => ({
        ...action,
        onClick: () => {
          const versionBefore = getToastVersion(id);
          action.onClick?.();
          if (action.closeOnClick !== false && getToastVersion(id) === versionBefore) {
            close();
          }
        },
      })),
    [id, actions, close]
  );
