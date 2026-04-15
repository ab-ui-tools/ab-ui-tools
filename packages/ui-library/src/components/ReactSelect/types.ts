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
  // eslint-disable-next-line unused-imports/no-unused-vars
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

export interface IReactSelectProps extends Props<TOption, boolean, GroupBase<TOption>> {
  options: Array<TOption | GroupedOption>;
  dataId?: string;
  size?: 'small' | 'large';
  selectedOption?: TSelectValue;
  setSelectedOption?: (value: TSelectValue) => void;
  setFieldValue?: (value: TSelectValue) => void;
  showCount?: number;
  labelAddons?: JSX.Element;
  label?: string;
  required?: boolean;
  hasError?: boolean;
  helperText?: string;
}

export type { ActionMeta, GroupBase, StylesConfig, ValueContainerProps, SingleValue, MultiValue, OptionsOrGroups };
