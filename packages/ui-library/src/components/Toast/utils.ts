import type { TToastId, TToastProps } from './types';

import { DEFAULT_DURATION, TOAST_CONNECTION_ID, TOAST_DURATION, TOAST_TYPE } from './consts';

let counter = 0;

export const getToastId = ({ toastId, type, title, text }: TToastProps): TToastId => {
  if (toastId !== undefined) {
    return toastId;
  }
  if (type === TOAST_TYPE.OFFLINE || type === TOAST_TYPE.ONLINE) {
    return TOAST_CONNECTION_ID;
  }
  if (typeof text === 'string' && (title === undefined || typeof title === 'string')) {
    return `toast:${type}:${title ?? ''}:${text}`;
  }
  return `toast-${++counter}`;
};

const getAutoCloseByType = ({ type, title, actions }: TToastProps): number | false => {
  switch (type) {
    case TOAST_TYPE.ERROR:
    case TOAST_TYPE.LOADING:
    case TOAST_TYPE.OFFLINE:
      return false;
    case TOAST_TYPE.PENDING:
    case TOAST_TYPE.WARNING:
      return TOAST_DURATION.LONG;
    case TOAST_TYPE.ONLINE:
      return TOAST_DURATION.SHORT;
    default:
      if (actions?.length) {
        return TOAST_DURATION.LONG;
      }
      return title ? TOAST_DURATION.WITH_TITLE : TOAST_DURATION.SHORT;
  }
};

export const getAutoClose = (props: TToastProps): number | false => {
  const { autoClose, duration, actionProps } = props;
  const isLegacyActionProps = autoClose === undefined && Boolean(actionProps);

  if (autoClose === false || isLegacyActionProps) {
    return false;
  }
  if (duration !== undefined) {
    return duration;
  }

  const autoCloseByType = getAutoCloseByType(props);
  return autoCloseByType === false && autoClose ? DEFAULT_DURATION : autoCloseByType;
};

export const isToastClosable = ({ closable, type }: TToastProps): boolean => closable ?? type !== TOAST_TYPE.PENDING;

export const formatCountdown = (milliseconds: number): string => {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
};
