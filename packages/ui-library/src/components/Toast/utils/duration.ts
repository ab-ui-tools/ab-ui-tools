import type { TToastOptions, TToastState } from '../types';

import { TOAST_DURATION, TOAST_STATE } from '../consts';

export const isToastClosable = (state: TToastState = TOAST_STATE.INFO, closable?: boolean): boolean =>
  closable ?? state !== TOAST_STATE.PENDING;

/** Auto-close delay for a toast; `null` = stays until closed / updated. */
export const getToastDuration = ({
  state = TOAST_STATE.INFO,
  duration,
  title,
  actions,
}: Pick<TToastOptions, 'state' | 'duration' | 'title' | 'actions'>): number | null => {
  if (duration !== undefined) {
    return duration;
  }

  switch (state) {
    case TOAST_STATE.ERROR: // never — stays until closed
    case TOAST_STATE.LOADING: // until done, then turns into Success / Error in place
    case TOAST_STATE.WIFI_OFF: // until back online
      return null;
    case TOAST_STATE.PENDING:
    case TOAST_STATE.WARNING:
      return TOAST_DURATION.LONG;
    case TOAST_STATE.WIFI_ON:
      return TOAST_DURATION.SHORT;
    default:
      if (actions?.length) {
        return TOAST_DURATION.LONG;
      }
      return title ? TOAST_DURATION.WITH_TITLE : TOAST_DURATION.SHORT;
  }
};
