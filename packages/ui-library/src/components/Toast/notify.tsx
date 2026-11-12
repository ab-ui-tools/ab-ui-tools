import type { ToastContentProps, ToastOptions } from 'react-toastify';
import type { ReactNode } from 'react';

import { toast } from 'react-toastify';

import type { TToastId, TToastOptions, TToastTypes, TToastProps } from './types';

import { getAutoClose, getToastId } from './utils';
import { getToast, removeToast, saveToast, trimToastStack } from './store';
import { TOAST_TYPE } from './consts';
import { ToastContent } from './components';

const getToastOptions = (id: TToastId, props: TToastProps, autoClose: number | false): ToastOptions => {
  const { type = TOAST_TYPE.INFORMATION, closeSnackbar } = props;
  const isPending = type === TOAST_TYPE.PENDING;

  return {
    toastId: id,
    autoClose,
    customProgressBar: isPending,
    draggable: isPending ? false : 'touch',
    role: type === TOAST_TYPE.ERROR ? 'alert' : 'status',
    className: 'toast-item',
    onClose: () => {
      removeToast(id);
      closeSnackbar?.(id);
    },
  };
};

const render = (id: TToastId, props: TToastProps): TToastId => {
  const autoClose = getAutoClose(props);
  const countdown = props.type === TOAST_TYPE.PENDING && autoClose ? autoClose : 0;
  const options = getToastOptions(id, props, autoClose);
  const content = ({ closeToast, isPaused }: ToastContentProps) => (
    <ToastContent {...props} id={id} countdown={countdown} isPaused={isPaused} onClose={() => closeToast(true)} />
  );

  const existing = getToast(id);
  saveToast({ id, props, autoClose, createdAt: existing?.createdAt ?? Date.now() });

  if (existing) {
    toast.update(id, { ...options, render: content, delay: 0 });
  } else {
    toast(content, options);
    trimToastStack();
  }
  return id;
};

const show = (props: TToastProps): TToastId => render(getToastId(props), props);

const update = (id: TToastId, patch: Partial<TToastProps>): void => {
  const existing = getToast(id);
  if (existing) {
    render(id, { ...existing.props, ...patch });
  }
};

const dismiss = (id?: TToastId): void => toast.dismiss(id);

const shortcut =
  (type: TToastTypes) =>
  (text: ReactNode, options?: TToastOptions): TToastId =>
    show({ ...options, type, text });

export const notify = Object.assign(show, {
  update,
  dismiss,
  success: shortcut(TOAST_TYPE.SUCCESS),
  error: shortcut(TOAST_TYPE.ERROR),
  warning: shortcut(TOAST_TYPE.WARNING),
  information: shortcut(TOAST_TYPE.INFORMATION),
  informationBlue: shortcut(TOAST_TYPE.INFORMATION_BLUE),
  loading: shortcut(TOAST_TYPE.LOADING),
  pending: shortcut(TOAST_TYPE.PENDING),
  offline: shortcut(TOAST_TYPE.OFFLINE),
  online: shortcut(TOAST_TYPE.ONLINE),
});
