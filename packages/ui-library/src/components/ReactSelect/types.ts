import type { CreatableProps } from 'react-select/creatable';
import type {
  Props,
  GroupBase,
  SingleValue,
  MultiValue,
  ActionMeta,
  StylesConfig,
  ValueContainerProps,
  OptionsOrGroups,
} from 'react-select';
import type { JSX, ReactNode } from 'react';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    showCount?: number;
    isCheckbox?: boolean;
    isRadio?: boolean;
  }
}

export type TOption = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  meta?: unknown;
};

export type GroupedOption = GroupBase<TOption>;

export type TSelectValue = SingleValue<TOption> | MultiValue<TOption>;

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
  selectedOption?: TSelectValue;
  setSelectedOption?: (value: TSelectValue) => void;
  setFieldValue?: (value: TSelectValue) => void;
  labelAddons?: JSX.Element;
  label?: string;
  required?: boolean;
  hasError?: boolean;
  helperText?: string;
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

export type { ActionMeta, GroupBase, StylesConfig, ValueContainerProps, SingleValue, MultiValue, OptionsOrGroups };
