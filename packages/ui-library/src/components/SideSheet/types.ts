import type { ReactElement, ReactNode } from 'react';

import type { TTabProps } from '../Tab/types';
import type { TButtonPropTypes } from '../Button/types';

export type TSideSheetSize = 'small' | 'medium' | 'large';

export type TCheckboxInfo = {
  label: string;
  isChecked: boolean;
};

export type TSideSheetChildren = {
  scrollbarContainerRef?: RefObject<HTMLDivElement>;
};

export interface TSideSheetPropTypes {
  closeOnOutsideClick?: boolean;
  shouldRemoveCallback?: boolean;
  size?: TSideSheetSize;
  isLoading?: boolean;
  isOpen: boolean;
  onClose: (e?: TClickEventType | MouseEvent) => void;
  onSubmit?: (isCheckboxSelected: boolean) => void;
  position?: 'right' | 'left' | 'bottom';
  title?: string | ReactElement;
  footerButtons?: {
    cancel: TButtonPropTypes;
    confirm: TButtonPropTypes;
    extraButton?: TButtonPropTypes;
  };
  topLeftActions?: ReactNode;
  topRightActions?: ReactNode;
  tabItemsProps?: TTabProps;
  children?: ReactNode | (({ scrollbarContainerRef }: TSideSheetChildren) => ReactNode);
  className?: string;
  checkboxInfo?: TCheckboxInfo;
  headerContent?: ReactNode;
  isPositioned?: boolean;
  isBodyHidden?: boolean;
  isWithDivider?: boolean;
  withOverlay?: boolean;
}
