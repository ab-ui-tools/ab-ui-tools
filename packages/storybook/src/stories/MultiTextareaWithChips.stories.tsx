import type { JSX } from 'react';

import * as yup from 'yup';
import React, { useEffect } from 'react';
import { MultiTextareaWithChips } from '@ab.uitools/ui-library/components/MultiTextareaWithChips';
import { FormField } from '@ab.uitools/ui-library/components/FormField';
import { FormContainer } from '@ab.uitools/ui-library/components/FormContainer';
import { Button } from '@ab.uitools/ui-library/components/Button';
import { useFormProps } from '@ab.uitools/ui-library';

export default {
  title: 'MultiTextareaWithChips',
  component: MultiTextareaWithChips,
  parameters: {
    docs: {
      description: {
        component: 'A reusable component for inputting multiple values as chips with add/remove functionality.',
      },
    },
  },
};

const hdmChipValidationSchema = yup.string().test('hdm-format', 'Invalid HDM serial number format', value => {
  if (!value) return false;
  const serialNumber = value?.trim();

  if (serialNumber.startsWith('55') && serialNumber.length === 8) {
    return true;
  }
  if (serialNumber.startsWith('PB') && serialNumber.length === 13) {
    return true;
  }
  if (serialNumber.startsWith('000710') && serialNumber.length === 11) {
    return true;
  }
  if (serialNumber.startsWith('00024') && serialNumber.length === 11) {
    return true;
  }
  if (serialNumber.startsWith('000024') && serialNumber.length === 12) {
    return true;
  }
  if (serialNumber.startsWith('125') && serialNumber.length === 12) {
    return true;
  }
  if ((serialNumber.startsWith('NCB') || serialNumber.startsWith('NCC')) && serialNumber.length === 12) {
    return true;
  }
  if ((serialNumber.startsWith('1') || serialNumber.startsWith('2')) && serialNumber.length === 24) {
    return true;
  }
  if (
    (serialNumber.startsWith('J97') || serialNumber.startsWith('J99') || serialNumber.startsWith('J9B')) &&
    serialNumber.length === 12
  ) {
    return true;
  }
  if (
    (serialNumber.startsWith('0002') || serialNumber.startsWith('00002')) &&
    (serialNumber.length === 11 || serialNumber.length === 12)
  ) {
    return true;
  }

  return false;
});

const InsideForm = () => {
  const { reset } = useFormProps();

  useEffect(() => {
    reset?.({
      skills: [{ text: '55000001', hasError: false, errorMessage: '' }],
    });
  }, []);

  return (
    <div>
      <FormField
        name="skills"
        As={(formProps: any) => (
          <div>
            <MultiTextareaWithChips
              formProps={formProps}
              fieldName="skills"
              label="HDM Serial Numbers *"
              placeholder="Type HDM serial number and press Enter"
              chips={formProps.value || []}
              allowCustomValues={true}
              chipValidationSchema={hdmChipValidationSchema}
              chipValidationErrorMessage=""
              allowInvalidChips={true}
              availableOptions={[
                '55000001',
                '55000002',
                '55000003',
                'PB1234567890123',
                'PB9876543210987',
                '0007101234567',
                '0002401234567',
                '00002412345678',
                '125123456789',
                'NCB123456789',
                'NCC987654321',
                '123456789012345678901234',
                '234567890123456789012345',
                'J971234567890',
                'J991234567890',
                'J9B1234567890',
              ]}
              searchPlaceholderText="Search available HDM serial numbers..."
              typeAndEnterPlaceholderText="Type custom HDM serial number and press Enter..."
              noOptionsPlaceholderText="No more HDM serial numbers available"
            />
          </div>
        )}
      />
      <div className="mt-4">
        <Button buttonActionType="submit" type="primary">
          Submit Form
        </Button>
      </div>
    </div>
  );
};

export const SimpleFormUsage = (): JSX.Element => {
  const validationSchema = yup.object({
    skills: yup
      .array()
      .of(
        yup.object({
          text: yup.string().test('hdm-format', 'Invalid HDM serial number format', value => {
            if (!value) return false;
            const serialNumber = value.trim();
            if (serialNumber.startsWith('55') && serialNumber.length === 8) return true;
            if (serialNumber.startsWith('PB') && serialNumber.length === 13) return true;
            if (serialNumber.startsWith('000710') && serialNumber.length === 11) return true;
            if (serialNumber.startsWith('00024') && serialNumber.length === 11) return true;
            if (serialNumber.startsWith('000024') && serialNumber.length === 12) return true;
            if (serialNumber.startsWith('125') && serialNumber.length === 12) return true;
            if ((serialNumber.startsWith('NCB') || serialNumber.startsWith('NCC')) && serialNumber.length === 12)
              return true;
            if ((serialNumber.startsWith('1') || serialNumber.startsWith('2')) && serialNumber.length === 24)
              return true;
            if (
              (serialNumber.startsWith('J97') || serialNumber.startsWith('J99') || serialNumber.startsWith('J9B')) &&
              serialNumber.length === 12
            )
              return true;
            if (
              (serialNumber.startsWith('0002') || serialNumber.startsWith('00002')) &&
              (serialNumber.length === 11 || serialNumber.length === 12)
            )
              return true;
            return false;
          }),
        })
      )
      .test('no-invalid-chips', '', chips => {
        if (!chips || chips.length === 0) return true;
        return !chips.some((chip: any) => chip.hasError);
      }),
  });

  return (
    <div className="max-w-md p-6" style={{ maxWidth: 500, padding: 20 }}>
      <FormContainer
        initialValues={{ skills: [] }}
        validationScheme={validationSchema}
        onSubmit={(values, props) => {
          console.log('values', values);
        }}
      >
        <InsideForm />
        <FormStatus />
      </FormContainer>
    </div>
  );
};

const FormStatus = (): JSX.Element | null => {
  const { errors, isSubmitted, getValues } = useFormProps();
  const values = getValues?.() as any;
  const skills = values?.skills as any[] | undefined;
  const hasNoValues = !Array.isArray(skills) || skills.length === 0;

  if (!isSubmitted) return null;

  return <div className="mt-3" style={{ color: 'red' }}></div>;
};
