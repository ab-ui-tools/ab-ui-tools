import type { Id, ToastPosition } from 'react-toastify';
import type { ReactNode } from 'react';

import type { TOAST_TYPE } from './consts';
import type { TButtonPropTypes } from '../Button/types';
import type { IFormCompProps } from '../../types/globalTypes';

export type TToastTypes = (typeof TOAST_TYPE)[keyof typeof TOAST_TYPE];

export type TToastId = Id;

export interface TToastAction extends TButtonPropTypes {
  closeOnClick?: boolean;
}

export interface TToastProps {
  duration?: number;
  type?: TToastTypes;
  toastId?: TToastId;
  closeSnackbar?: (id: TToastId) => void;
  text: ReactNode;
  title?: ReactNode;
  actionProps?: TButtonPropTypes;
  actions?: TToastAction[];
  autoClose?: boolean;
  closable?: boolean;
  closeLabel?: string;
  onCommit?: (id: TToastId) => void;
}

export type TToastOptions = Omit<TToastProps, 'type' | 'text'>;

export interface TToastContainerProps extends IFormCompProps {
  duration?: number;
  position?: ToastPosition;
  stacked?: boolean;
  className?: string;
}

/** @deprecated Use `TToastContainerProps`. */
export type TSnackbarProps = TToastContainerProps;
