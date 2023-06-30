import { ContactFieldsValidations, FORM_FIELDS } from '../constants';
import { FormDataType, Props } from '../types';
import { useComputed, useSignal } from '@preact/signals';
import { TargetedEvent } from 'preact/compat';
import { StructError } from 'superstruct';

type ErrorsState = {
  [key in typeof FORM_FIELDS[keyof typeof FORM_FIELDS]]?: string | null;
};

const useForm = ({ onSubmit }: Props) => {
  const formData = useSignal<FormDataType>({});
  const errors = useSignal<ErrorsState>({});

  const isFormValid = useComputed(
    () =>
      Object.values(formData.value).length === 4 &&
      Object.values(errors.value).every((item) => !item),
  );

  const onInput: (
    e: TargetedEvent<HTMLInputElement | HTMLSelectElement, Event>,
    key: keyof FormDataType,
  ) => void = (e, key) => {
    if (e.target && 'value' in e.target) {
      const value = e.target.value;

      if (typeof value === 'string') {
        try {
          ContactFieldsValidations[key].assert(value);

          errors.value = {
            ...errors.value,
            [key]: null,
          };
        } catch (err) {
          if (err instanceof StructError) {
            const ErrorsByFields = {
              [FORM_FIELDS.EMAIL]: 'Email inválido',
              [FORM_FIELDS.PHONE]: 'Telefone inválido',
              [FORM_FIELDS.CATEGORY]: 'Categoria inválida',
              [FORM_FIELDS.NAME]: 'Nome inválido',
            };

            errors.value = {
              ...errors.value,
              [key]: ErrorsByFields[key],
            };
          }
        } finally {
          formData.value = {
            ...formData.value,
            [key]: key === FORM_FIELDS.CATEGORY && !value ? undefined : value,
          };
        }
      }
    }
  };

  const onCreate = () => {
    if (isFormValid.value) {
      onSubmit(formData.value);
    }
  };

  return {
    formData,
    errors,
    isFormValid,
    onInput,
    onCreate,
  };
};

export { useForm };
