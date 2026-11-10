import type { ReactNode } from 'react';

import type { TToastId, TToastOptions, TToastRecord, TToastState } from './types';

import { getToastDuration } from './utils';
import { TOAST_EXIT_MS, TOAST_MAX_STACK, TOAST_STATE } from './consts';

type TListener = () => void;

let toasts: TToastRecord[] = [];
let counter = 0;
const listeners = new Set<TListener>();

const emit = () => listeners.forEach(listener => listener());

const setToasts = (next: TToastRecord[]) => {
  toasts = next;
  emit();
};

export const subscribeToasts = (listener: TListener): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const getToastsSnapshot = (): TToastRecord[] => toasts;

const isSameMessage = (record: TToastRecord, options: TToastOptions) =>
  !record.dismissed &&
  record.state === options.state &&
  typeof options.description === 'string' &&
  record.description === options.description &&
  record.title === options.title;

const removeAfterExit = (id: TToastId) => {
  setTimeout(() => {
    setToasts(toasts.filter(record => !(record.id === id && record.dismissed)));
  }, TOAST_EXIT_MS);
};

const update = (id: TToastId, patch: Partial<TToastOptions>): void => {
  if (!toasts.some(record => record.id === id && !record.dismissed)) {
    return;
  }
  setToasts(
    toasts.map(record => (record.id === id ? { ...record, ...patch, id, version: record.version + 1 } : record))
  );
};

const dismiss = (id?: TToastId): void => {
  const targets = toasts.filter(record => !record.dismissed && (id === undefined || record.id === id));
  if (!targets.length) {
    return;
  }
  setToasts(toasts.map(record => (targets.includes(record) ? { ...record, dismissed: true } : record)));
  targets.forEach(record => {
    record.onClose?.(record.id);
    removeAfterExit(record.id);
  });
};

/** Keeps the stack at 3: drops the oldest auto-closing toast. Errors are never removed to make room. */
const trimStack = () => {
  const active = toasts.filter(record => !record.dismissed);
  if (active.length <= TOAST_MAX_STACK) {
    return;
  }
  const removable = active
    .filter(record => record.state !== TOAST_STATE.ERROR && getToastDuration(record) !== null)
    .sort((a, b) => a.createdAt - b.createdAt);

  removable.slice(0, active.length - TOAST_MAX_STACK).forEach(record => dismiss(record.id));
};

const show = (options: TToastOptions): TToastId => {
  const normalized: TToastOptions = { state: TOAST_STATE.INFO, ...options };

  // Same id, or the same message twice → restart its timer instead of stacking.
  const existing = toasts.find(
    record =>
      !record.dismissed &&
      (normalized.id !== undefined ? record.id === normalized.id : isSameMessage(record, normalized))
  );
  if (existing) {
    update(existing.id, normalized);
    return existing.id;
  }

  // Wifi on replaces Wifi off in place.
  if (normalized.state === TOAST_STATE.WIFI_ON) {
    const offline = toasts.find(record => !record.dismissed && record.state === TOAST_STATE.WIFI_OFF);
    if (offline) {
      update(offline.id, { actions: undefined, closable: undefined, duration: undefined, ...normalized });
      return offline.id;
    }
  }

  const id = normalized.id ?? `toast-${++counter}`;
  setToasts([...toasts, { ...normalized, id, createdAt: Date.now() + counter / 1000, version: 0, dismissed: false }]);
  trimStack();
  return id;
};

type TShortcutOptions = Omit<TToastOptions, 'state' | 'description'>;

const shortcut =
  (state: TToastState) =>
  (description: ReactNode, options?: TShortcutOptions): TToastId =>
    show({ ...options, state, description });

/**
 * Imperative API. Render one `<Toaster />` in the app, then call:
 *   toast.success('Template saved')
 *   const id = toast.loading('Uploading 3 files…'); … toast.update(id, { state: 'success', description: 'Files uploaded' })
 */
export const toast = Object.assign(show, {
  show,
  update,
  dismiss,
  success: shortcut(TOAST_STATE.SUCCESS),
  error: shortcut(TOAST_STATE.ERROR),
  warning: shortcut(TOAST_STATE.WARNING),
  info: shortcut(TOAST_STATE.INFO),
  infoBlue: shortcut(TOAST_STATE.INFO_BLUE),
  loading: shortcut(TOAST_STATE.LOADING),
  offline: shortcut(TOAST_STATE.WIFI_OFF),
  online: shortcut(TOAST_STATE.WIFI_ON),
  pending: shortcut(TOAST_STATE.PENDING),
});

/** Internal: lets the Toaster tell whether an action handler changed the toast. */
export const getToastVersion = (id: TToastId): number | undefined =>
  toasts.find(record => record.id === id && !record.dismissed)?.version;
