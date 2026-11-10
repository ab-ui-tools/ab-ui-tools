import { useSyncExternalStore } from 'react';

import type { TToastRecord } from '../types';

import { getToastsSnapshot, subscribeToasts } from '../store';

/** Every toast record in the store, dismissed ones included until their exit animation ends. */
export const useToasts = (): TToastRecord[] =>
  useSyncExternalStore(subscribeToasts, getToastsSnapshot, getToastsSnapshot);
