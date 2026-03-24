import type { JSX } from 'react';

import { useForm } from 'react-hook-form';
import React from 'react';
import classnames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';

import type { FormPropTypes } from './types';
import type { TFormData } from '../../types/globalTypes';

import { Button } from '../Button';
import { FormContext } from '../../context';

export const FormContainer = (props: FormPropTypes): JSX.Element => {
  const {
    children,
    className = '',
    shouldUnregister,
    shouldFocusError = true,
    mode = 'onBlur',
    reValidateMode,
    initialValues,
    validationScheme,
    validationContext,
    buttonConfigs,
    formId,
    onSubmit,
  } = props;

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState,
    getValues,
    watch,
    reset,
    trigger,
    clearErrors,
    setError,
    getFieldState,
    unregister,
  } = useForm({
    mode,
    reValidateMode,
    defaultValues: initialValues,
    shouldFocusError,
    shouldUnregister,
    resolver: yupResolver(validationScheme, {
      context: validationContext,
    }),
  });

  const { errors, isDirty, isSubmitted, isSubmitting, dirtyFields } = formState;

  const submit = async (data: TFormData) => {
    if (onSubmit) {
      onSubmit(data, formState, dirtyFields);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} id={formId} className={classnames('form-container', className)}>
      <FormContext.Provider
        value={{
          trigger,
          register,
          errors,
          control,
          setValue,
          getValues,
          watch,
          reset,
          isDirty,
          isSubmitted,
          isSubmitting,
          isValid: formState.isValid,
          clearErrors,
          setError,
          dirtyFields,
          getFieldState,
          unregister,
        }}
      >
        <>
          {children}
          {buttonConfigs && (
            <div className="form-container__buttons">
              {buttonConfigs.map((buttonConfig, index) => {
                return <Button {...buttonConfig} key={index} />;
              })}
            </div>
          )}
        </>
      </FormContext.Provider>
    </form>
  );
};
