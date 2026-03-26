import type { TSVGIconType } from '../SVGIcons/types';

export type TCopyProps = {
  className?: string;
  textAfterCopy?: string;
  text: string;
  size?: 'small' | 'medium' | 'large';
  dataId?: string;
  type?: TSVGIconType;
  parentRef?: React.RefObject<HTMLElement>;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'middle-left'
    | 'middle-right';
};
