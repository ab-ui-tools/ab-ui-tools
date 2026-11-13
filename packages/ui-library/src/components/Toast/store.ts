import { toast } from 'react-toastify';

import type { TToastId, TToastProps } from './types';

import { TOAST_MAX_STACK, TOAST_TYPE } from './consts';

type TToastRecord = {
  id: TToastId;
  props: TToastProps;
  autoClose: number | false;
  createdAt: number;
};

const records = new Map<string, TToastRecord>();

export const getToast = (id: TToastId): TToastRecord | undefined => {
  const record = records.get(String(id));
  return record && toast.isActive(record.id) ? record : undefined;
};

export const getActiveToasts = (): TToastRecord[] =>
  Array.from(records.values()).filter(record => toast.isActive(record.id));

export const saveToast = (record: TToastRecord): void => {
  records.set(String(record.id), record);
};

export const removeToast = (id: TToastId): void => {
  records.delete(String(id));
};

export const trimToastStack = (): void => {
  const active = getActiveToasts();
  const extra = active.length - TOAST_MAX_STACK;

  if (extra <= 0) {
    return;
  }

  active
    .filter(record => record.props.type !== TOAST_TYPE.ERROR && record.autoClose !== false)
    .sort((a, b) => a.createdAt - b.createdAt)
    .slice(0, extra)
    .forEach(record => toast.dismiss(record.id));
};
