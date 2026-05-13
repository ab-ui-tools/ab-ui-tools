import type { HTMLAttributes, JSX } from 'react';

import type { IDataAttributes, IFormCompProps } from '../../types/globalTypes';

export interface TFormFieldPropTypes extends HTMLAttributes<HTMLElement>, IDataAttributes {
  As: (props: IFormCompProps) => JSX.Element;
  name: string;
  className?: string;
  dataId?: string;
  shouldValidate?: boolean;
  hideErrorMessage?: boolean;
  errorMessageIcon?: string;
}
