import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';
import React, { useContext } from 'react';
import classnames from 'classnames';
import { ErrorMessage as ReactHookFormErrorMessage } from '@hookform/error-message';

import type { TFormFieldPropTypes } from './types';

import { ErrorMessage } from '../../helperComponents';
import { FormContext } from '../../context';

export const FormField = (props: TFormFieldPropTypes): ReactElement | null => {
  const { As, name, className = '', dataId = '', hideErrorMessage = false, errorMessageIcon } = props;
  const { register, errors, setValue, control } = useContext(FormContext);

  if (!register) {
    return null;
  }

  const registerOptions = register(name);

  return (
    <div className={classnames('form-container__field', className, name)}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return (
            <>
              {As({
                hasError: !!fieldState.error,
                isValid: fieldState.isTouched && fieldState.isDirty && !fieldState.invalid,
                dataId,
                ...registerOptions,
                setFieldValue: (data, name, options) =>
                  setValue(data, name, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                    ...options,
                  }),
                ...field,
              })}
              {!hideErrorMessage ? (
                <ReactHookFormErrorMessage
                  name={name}
                  errors={errors}
                  render={({ message }: { message: string }) => {
                    return (
                      <ErrorMessage
                        dataId={dataId}
                        message={message || ''}
                        className="full-width mt-8"
                        icon={errorMessageIcon}
                      />
                    );
                  }}
                />
              ) : null}
            </>
          );
        }}
      />
    </div>
  );
};
