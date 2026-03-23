import type { Control, FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';

import { useContext } from 'react';

import type { TFormData, TSetValue } from '../types/globalTypes';

import { FormContext } from '../context';

type TFormContextProps = {
  register?: UseFormRegister<TFormData>; //TRegister | CallbackFnType
  errors?: FieldErrors;
  setValue: TSetValue;
  control?: Control<FieldValues, unknown>;
};

export const useFormContext = (): TFormContextProps => {
  return useContext(FormContext);
};
