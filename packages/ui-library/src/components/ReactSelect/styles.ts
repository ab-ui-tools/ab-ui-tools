import type { CSSObjectWithLabel, StylesConfig } from 'react-select';

import type { TOption } from './types';

interface Props {
  hasError?: boolean;
  size?: 'small' | 'large';
}

export const getStyles = ({ hasError, size = 'large' }: Props) =>
  ({
    control: (base, state) => ({
      ...base,
      borderWidth: 1,
      borderRadius: 8,
      height: size === 'large' ? 40 : 32,
      minHeight: 'unset',
      borderColor: hasError ? '#DC1A00' : '#DDDDDD',
      boxShadow:
        state.menuIsOpen && !hasError
          ? '0 0 0 0.5px #518A2F'
          : state.menuIsOpen && hasError
            ? '0 0 0 0.5px #DC1A00'
            : 'none',
      '&:hover': {
        borderColor: hasError ? '#DC1A00' : '#DDDDDD',
      },
    }),
    container: base => ({
      ...base,
      width: 300,
    }),
    valueContainer: (base: CSSObjectWithLabel) => ({
      ...base,
      flexWrap: 'nowrap',
    }),
    multiValue: base => ({
      ...base,
      alignItems: 'center',
      borderRadius: 24,
      padding: 2,
    }),
    multiValueRemove: base => ({
      ...base,
      ':hover': {
        backgroundColor: 'transparent',
      },
    }),
    menu: base => ({
      ...base,
      borderRadius: 16,
      overflow: 'hidden',
    }),
    menuList: base => ({
      ...base,
      maxHeight: 300,
    }),
    option: base => ({
      ...base,
      backgroundColor: '#FEFEFE',
      ':active': {
        backgroundColor: 'transparent',
      },
      ':hover': {
        backgroundColor: '#F2F2F2',
      },
    }),
  }) as StylesConfig<TOption, boolean>;
