import type { ReactNode } from 'react';

import type { TOAST_STATE } from './consts';

export type TToastState = (typeof TOAST_STATE)[keyof typeof TOAST_STATE];

export type TToastDevice = 'desktop' | 'mobile';

export type TToastId = string | number;

export type TToastAnchor = 'top' | 'bottom';

export interface TToastAction {
  label: string;
  onClick?: () => void;
  closeOnClick?: boolean;
}

export interface TToastProps {
  state?: TToastState;
  title?: ReactNode;
  description?: ReactNode;
  actions?: TToastAction[];
  closable?: boolean;
  onClose?: () => void;
  device?: TToastDevice;
  countdown?: number;
  progress?: number;
  closeLabel?: string;
  className?: string;
  dataId?: string;
}

export interface TToastOptions extends Omit<
  TToastProps,
  'device' | 'countdown' | 'progress' | 'onClose' | 'className'
> {
  id?: TToastId;
  duration?: number | null;
  onClose?: (id: TToastId) => void;
  onCommit?: (id: TToastId) => void;
}

export interface TToastRecord extends TToastOptions {
  id: TToastId;
  createdAt: number;
  version: number;
  dismissed: boolean;
}

export type TToasterPosition = 'bottom-center' | 'top-right';

export interface TToasterOffset {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface TToasterProps {
  position?: TToasterPosition;
  device?: TToastDevice | 'auto';
  offset?: TToasterOffset;
  ariaLabel?: string;
  closeLabel?: string;
  className?: string;
}
