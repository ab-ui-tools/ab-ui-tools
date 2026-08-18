import type { TTextTypes } from '../Text/types';
import type { TSVGIconType } from '../SVGIcons/types';

export const COLOR_MAPPING: Record<TSVGIconType, TTextTypes> = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  quaternary: 'quaternary',
  disabled: 'disabled',
  inverse: 'inverse',
  'brand-light': 'brand-light',
  'brand-dark': 'brand-dark',
  'danger-light': 'danger-light',
  'danger-dark': 'danger-dark',
  'warning-light': 'warning-light',
  'warning-dark': 'warning-dark',
  'success-light': 'success-light',
  'success-dark': 'success-dark',
  'information-light': 'information-light',
  'information-dark': 'information-dark',
  'discovery-light': 'discovery-light',
  'discovery-dark': 'discovery-dark',
};
