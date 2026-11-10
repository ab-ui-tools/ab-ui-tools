import type { TToastDevice, TToasterOffset, TToasterPosition } from './types';

export const TOAST_STATE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  INFO_BLUE: 'info-blue',
  LOADING: 'loading',
  WIFI_OFF: 'wifi-off',
  WIFI_ON: 'wifi-on',
  PENDING: 'pending',
} as const;

export const TOAST_DURATION = {
  SHORT: 4000,
  WITH_TITLE: 6000,
  LONG: 10000,
};

export const TOAST_MIN_RESUME = 2000;

export const TOAST_COUNTDOWN_TICK = 200;

export const TOAST_MAX_STACK = 3;

export const TOAST_PEEK = 8;
export const TOAST_PEEK_INSET = 16;

export const TOAST_GAP = 12;

export const TOAST_EXIT_MS = 150;

export const TOAST_SWIPE_THRESHOLD = 80;

export const TOAST_MAX_ACTIONS: Record<TToastDevice, number> = {
  desktop: 1,
  mobile: 2,
};

export const TOAST_CLOSE_LABEL = 'Close notification';
export const TOASTER_ARIA_LABEL = 'Notifications';

export const TOASTER_DEFAULT_OFFSETS: Record<TToasterPosition | 'mobile', Required<TToasterOffset>> = {
  'bottom-center': { top: 0, right: 0, bottom: 32, left: 0 },
  'top-right': { top: 12, right: 12, bottom: 0, left: 0 },
  mobile: { top: 0, right: 16, bottom: 16, left: 16 },
};
