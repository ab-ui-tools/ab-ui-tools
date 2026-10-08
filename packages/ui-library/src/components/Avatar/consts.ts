import type { TSVGIconSize, TSVGIconType } from '../SVGIcons/types';

export const ICON_SIZE_MAPPING: { [key: string]: TSVGIconSize } = {
  xlarge: 'xxlarge',
  large: 'xlarge',
  medium: 'medium',
  small: 'small',
  xsmall: 'xsmall',
  xxsmall: 'xxsmall',
};

export const ICON_TYPE_MAPPING: { [key: string]: TSVGIconType } = {
  default: 'tertiary',
  warning: 'warning-light',
  discovery: 'discovery-light',
  info: 'information-light',
  success: 'success-light',
  danger: 'danger-light',
};
