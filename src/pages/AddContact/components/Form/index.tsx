import {
  ContactFieldsValidations,
  FIELDS_PLACEHOLDERS,
  FORM_FIELDS,
} from './constants';
import {
  AddContactButton,
  FormContainer,
  SelectInput,
  SelectOption,
  TextInput,
} from './styles';
import { FormDataType, Props } from './types';
import React, { TargetedEvent } from 'preact/compat';
import { useCallback, useMemo, useState } from 'preact/hooks';
import { StructError } from 'superstruct';

const Form: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormDataType>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof FORM_FIELDS, string | null>>
  >({});

  const isFormValid = useMemo(
    () => Object.values(errors).some((item) => !!item),
    [errors],
  );

  const onInput = useCallback(
    async (
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

  const onClick = useCallback(() => {
    if (isFormValid) {
      onSubmit(formData);
    }
  }, [formData, onSubmit, isFormValid]);

  return (
    <FormContainer>
      {Object.entries(FORM_FIELDS).map(([key, value]) => {
        if (value === FORM_FIELDS.CATEGORY) {
          return (
            <SelectInput
              title={value}
              onInput={(e) => onInput(e, value)}
              name={value}
              value={formData[value]}
            >
              <SelectOption
                value=''
                disabled={true}
                selected={true}
                hidden={true}
              >
                Categoria
              </SelectOption>
              <SelectOption value='instagram'>Instagram</SelectOption>
              <SelectOption value='facebook'>Facebook</SelectOption>
              <SelectOption value='whatsapp'>Whatsapp</SelectOption>
              <SelectOption value='telegram'>Telegram</SelectOption>
              <SelectOption value='none'>Nenhum</SelectOption>
            </SelectInput>
          );
        }

        return (
          <TextInput
            key={value}
            title={value}
            type={value === FORM_FIELDS.EMAIL ? 'email' : 'text'}
            name={value}
            value={formData[value]}
            onInput={(e) => onInput(e, value)}
            placeholder={
              FIELDS_PLACEHOLDERS[
                FORM_FIELDS[
                  key as Exclude<keyof typeof FORM_FIELDS, 'CATEGORY'>
                ]
              ]
            }
          />
        );
      })}
      <AddContactButton disabled={!isFormValid} type='button' onClick={onClick}>
        Cadastrar
      </AddContactButton>
    </FormContainer>
  );
};

export { Form };
