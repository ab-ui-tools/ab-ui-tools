import type { HTMLAttributes, JSX } from 'react';

import type { IFormCompProps } from '../../types/globalTypes';

export interface TFormFieldPropTypes extends HTMLAttributes<HTMLElement> {
  As: (props: IFormCompProps) => JSX.Element;
  name: string;
  className?: string;
  dataId?: string;
  shouldValidate?: boolean;
  hideErrorMessage?: boolean;
  errorMessageIcon?: string;
}
