import type { JSX } from 'react';

import { useForm } from 'react-hook-form';
import React from 'react';
import classnames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';

import type { FormPropTypes } from './types';

import { Button } from '../Button';
import { FormContext } from '../../context';

export const FormContainer = (props: FormPropTypes): JSX.Element => {
  const {
    children,
    className = '',
    shouldUnregister,
    shouldFocusError = true,
    mode = 'onBlur',
    initialValues,
    validationScheme,
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
    clearErrors,
    setError,
    trigger,
    getFieldState,
    unregister,
  } = useForm({
    mode: mode,
    resolver: yupResolver(validationScheme),
    defaultValues: initialValues,

    shouldFocusError: shouldFocusError,
    shouldUnregister: shouldUnregister,
  });

  const { errors, isDirty, isSubmitted, isSubmitting, dirtyFields } = formState;

  const customSubmit = (data: TFormData) => {
    if (onSubmit) {
      onSubmit(data, formState, dirtyFields);
    }
  };

  return (
    <form onSubmit={handleSubmit(customSubmit)} id={formId} className={classnames('form-container', className)}>
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
