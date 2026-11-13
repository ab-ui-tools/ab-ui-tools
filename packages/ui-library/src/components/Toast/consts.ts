export const TOAST_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFORMATION: 'information',
  INFORMATION_BLUE: 'information-blue',
  LOADING: 'loading',
  PENDING: 'pending',
  OFFLINE: 'offline',
  ONLINE: 'online',
} as const;

export const DEFAULT_DURATION = 6000;

export const TOAST_DURATION = {
  SHORT: 4000,
  WITH_TITLE: 6000,
  LONG: 10000,
};

export const TOAST_MAX_STACK = 3;

export const TOAST_COUNTDOWN_TICK = 200;

export const TOAST_SWIPE_PERCENT = 25;

export const TOAST_MAX_ACTIONS = {
  desktop: 1,
  mobile: 2,
};

export const TOAST_CONNECTION_ID = 'toast-connection';

export const TOAST_CLOSE_LABEL = 'Close notification';

export const TOAST_FRONT_HEIGHT_VAR = '--ds-toast-front-height';

export const TOAST_RESET_DELAY = 600;

export const TOAST_STACK_GAP = 12;
