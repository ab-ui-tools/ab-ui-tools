import type { JSX } from 'react';

export interface TFormFieldPropTypes {
  As: (props: IFormCompProps) => JSX.Element;
  name: string;
  className?: string;
  dataId?: string;
  shouldValidate?: boolean;
  hideErrorMessage?: boolean;
  errorMessageIcon?: string;
}
