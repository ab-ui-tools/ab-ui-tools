import type { ElementType, HTMLAttributes, MouseEvent, ReactNode } from 'react';

import type { IDataAttributes } from '../../types/globalTypes';

export type TTextTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'disabled'
  | 'inverse'
  | 'brand-light'
  | 'brand-dark'
  | 'danger-light'
  | 'danger-dark'
  | 'warning-light'
  | 'warning-dark'
  | 'success-light'
  | 'success-dark'
  | 'information-light'
  | 'information-dark'
  | 'discovery-light'
  | 'discovery-dark';

export type TTextSize = 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large';
export type TTextWeight = 'regular' | 'semibold' | 'bold' | 'bolder';
export type TTextLineHeight = 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large';

export interface TextPropTypes extends HTMLAttributes<HTMLElement>, IDataAttributes {
  as?: ElementType;
  type?: TTextTypes;
  size?: TTextSize;
  weight?: TTextWeight;
  lineHeight?: TTextLineHeight;
  dataId?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
