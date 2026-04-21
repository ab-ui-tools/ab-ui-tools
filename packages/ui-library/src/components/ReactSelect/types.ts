import type { CreatableProps } from 'react-select/creatable';
import type { Props, GroupBase, SingleValue, MultiValue } from 'react-select';
import type { JSX, ReactNode } from 'react';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    showCount?: number;
    isCheckbox?: boolean;
    isRadio?: boolean;
  }
}

export type TOption = {
  value: string | number | null;
  label: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  meta?: unknown;
};

export type GroupedOption = GroupBase<TOption>;

export type TSelectValue = SingleValue<TOption> | MultiValue<TOption>;

export type TItemValue = string | number | null;

type CreatableOnlyKeys = Exclude<
  keyof CreatableProps<TOption, boolean, GroupBase<TOption>>,
  keyof Props<TOption, boolean, GroupBase<TOption>>
>;

type CreatableExtraProps = {
  isCreateOnOutsideClick?: boolean;
};

export interface BaseProps extends Props<TOption, boolean, GroupBase<TOption>> {
  options: Array<TOption | GroupedOption>;
  dataId?: string;
  size?: 'small' | 'large';
  selectedValue?: TItemValue | TItemValue[];
  setSelectedValue?: (value: TItemValue | TItemValue[]) => void;
  setFieldValue?: (value: TItemValue | TItemValue[]) => void;
  labelAddons?: JSX.Element;
  label?: string;
  required?: boolean;
  hasError?: boolean;
  helperText?: string;
  onChange?: (value: TSelectValue) => void;
}

export type TNonCreatableProps = BaseProps & {
  isCreatable?: false;
  isCreateOnOutsideClick?: never;
} & {
  [K in CreatableOnlyKeys]?: never;
};

export type TCreatableProps = BaseProps &
  CreatableExtraProps &
  Pick<CreatableProps<TOption, boolean, GroupBase<TOption>>, CreatableOnlyKeys> & {
    isCreatable: true;
    isSearchable: true;
  };

export type TReactSelectProps = TNonCreatableProps | TCreatableProps;

export type { CreatableProps } from 'react-select/creatable';

export type {
  ActionMeta,
  GroupBase,
  StylesConfig,
  ValueContainerProps,
  SingleValue,
  MultiValue,
  OptionsOrGroups,
  OnChangeValue,
  PropsValue,
  SelectInstance,
  InputActionMeta,
  MenuPlacement,
  MenuPosition,
  CoercedMenuPlacement,
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupHeadingProps,
  GroupProps,
  IndicatorSeparatorProps,
  IndicatorsContainerProps,
  InputProps,
  LoadingIndicatorProps,
  MenuListProps,
  MenuProps,
  MultiValueGenericProps,
  MultiValueProps,
  MultiValueRemoveProps,
  NoticeProps,
  OptionProps,
  PlaceholderProps,
  SingleValueProps,
  FormatOptionLabelMeta,
  SelectComponentsConfig,
  Theme,
  ThemeConfig,
  ClassNamesConfig,
  Options,
} from 'react-select';
