import { Contact } from '../../../../shared/entities/Contact';
import { FIELDS_PLACEHOLDERS, FORM_FIELDS } from './constants';
import {
  AddContactButton,
  FormContainer,
  SelectInput,
  SelectOption,
  TextInput,
} from './styles';
import { FormDataState, Props } from './types';
import React, { TargetedEvent } from 'preact/compat';
import { useCallback, useMemo, useState } from 'preact/hooks';

const Form: React.FC<Props> = ({ onSubmit, data: { id, ...data } }) => {
  const [formData, setFormData] = useState<FormDataState>({
    ...data,
    category: data.socialMedia,
  });

  const isFormValid = useMemo(() => {
    const formDataValues = Object.values(formData);

    return (
      formDataValues.length === 4 && formDataValues.every((item) => !!item)
    );
  }, [formData]);

  const onInput = useCallback(
    (
      e: TargetedEvent<HTMLInputElement | HTMLSelectElement, Event>,
      key: keyof FormDataState,
    ) => {
      if (e.target && 'value' in e.target) {
        const value = e.target.value;

        typeof value === 'string' &&
          setFormData((state) => ({
            ...state,
            [key]: key === FORM_FIELDS.CATEGORY && !value ? undefined : value,
          }));
      }
    },
    [],
  );

  const onClick = useCallback(() => {
    onSubmit(formData as Omit<Contact, 'id'>);
  }, [formData, onSubmit]);

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
            type='text'
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
        Salvar alterações
      </AddContactButton>
    </FormContainer>
  );
};

export { Form };
