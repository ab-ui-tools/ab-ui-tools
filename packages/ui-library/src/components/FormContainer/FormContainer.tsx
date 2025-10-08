import type { JSX } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import React from 'react';
import classnames from 'classnames';

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
    context: validationContext,
    defaultValues: initialValues,
    shouldFocusError,
    shouldUnregister,
  });

  const { errors, isDirty, isSubmitted, isSubmitting, dirtyFields } = formState;

  const validateForm = async (): Promise<boolean> => {
    if (!validationScheme) return true;

    try {
      await validationScheme.validate(getValues(), { abortEarly: false });
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach(err => {
          if (err.path) {
            setError(err.path, { type: 'manual', message: err.message });
          }
        });
      }
      return false;
    }
  };

  const customTrigger = async (): Promise<boolean> => {
    return validateForm();
  };

  const customSubmit = async (data: TFormData) => {
    const isValid = await validateForm();
    if (!isValid) return;

    if (onSubmit) {
      onSubmit(data, formState, dirtyFields);
    }
  };

  return (
    <form onSubmit={handleSubmit(customSubmit)} id={formId} className={classnames('form-container', className)}>
      <FormContext.Provider
        value={{
          trigger: mode === 'onSubmit' ? customTrigger : trigger,
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
