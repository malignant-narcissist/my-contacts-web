import { ContactFieldsValidations, FORM_FIELDS } from '../constants';
import { FormDataType, Props } from '../types';
import { TargetedEvent } from 'preact/compat';
import { useCallback, useMemo, useState } from 'preact/hooks';
import { StructError } from 'superstruct';

const useForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormDataType>({});
  const [errors, setErrors] = useState<
    Partial<Record<typeof FORM_FIELDS[keyof typeof FORM_FIELDS], string | null>>
  >({});

  const isFormValid = useMemo(
    () =>
      Object.values(formData).length === 4 &&
      Object.values(errors).every((item) => !item),
    [errors, formData],
  );

  const onInput = useCallback(
    (
      e: TargetedEvent<HTMLInputElement | HTMLSelectElement, Event>,
      key: keyof FormDataType,
    ) => {
      if (e.target && 'value' in e.target) {
        const value = e.target.value;

        if (typeof value === 'string') {
          try {
            ContactFieldsValidations[key].assert(value);

            setErrors((state) => ({
              ...state,
              [key]: null,
            }));
          } catch (err) {
            if (err instanceof StructError) {
              const ErrorsByFields = {
                [FORM_FIELDS.EMAIL]: 'Email inválido',
                [FORM_FIELDS.PHONE]: 'Telefone inválido',
                [FORM_FIELDS.CATEGORY]: 'Categoria inválida',
                [FORM_FIELDS.NAME]: 'Nome inválido',
              };

              setErrors((state) => ({
                ...state,
                [key]: ErrorsByFields[key],
              }));
            }
          } finally {
            setFormData((state) => ({
              ...state,
              [key]: key === FORM_FIELDS.CATEGORY && !value ? undefined : value,
            }));
          }
        }
      }
    },
    [],
  );

  const onCreate = useCallback(() => {
    if (isFormValid) {
      onSubmit(formData);
    }
  }, [formData, onSubmit, isFormValid]);

  return {
    formData,
    errors,
    isFormValid,
    onInput,
    onCreate,
  };
};

export { useForm };
