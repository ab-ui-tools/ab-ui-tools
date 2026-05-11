import type { HTMLAttributes, JSX } from 'react';

export interface TErrorMessageProps extends HTMLAttributes<HTMLElement> {
  message?: string | JSX.Element;
  icon?: string;
  dataId?: string;
  className?: string;
}
