import { Contact } from '../../../../shared/entities/Contact';
import { FIELDS_PLACEHOLDERS, FORM_FIELDS } from './constants';
import * as styles from './styles';
import { FormDataState, Props } from './types';
import { useComputed, useSignal } from '@preact/signals';
import React, { TargetedEvent } from 'preact/compat';

const Form: React.FC<Props> = ({ onSubmit, data }) => {
  const formData = useSignal<FormDataState>({
    ...data.value,
    category: data.value.socialMedia,
  });

  const isFormValid = useComputed(() => {
    const values = Object.values(formData.value);

    return values.length === 4 && values.every((item) => !!item);
  });

  const onInput: (
    e: TargetedEvent<HTMLInputElement | HTMLSelectElement, Event>,
    key: keyof FormDataState,
  ) => void = (e, key) => {
    if (e.target && 'value' in e.target) {
      const value = e.target.value;

      if (typeof value === 'string') {
        formData.value = {
          ...formData.value,
          [key]: key === FORM_FIELDS.CATEGORY && !value ? undefined : value,
        };
      }
    }
  };

  const onAddContact = () => {
    onSubmit(formData.value as Omit<Contact, 'id'>);
  };

  return (
    <styles.FormContainer>
      {Object.entries(FORM_FIELDS).map(([key, value]) => {
        if (value === FORM_FIELDS.CATEGORY) {
          return (
            <styles.SelectInput
              title={value}
              onInput={(e) => onInput(e, value)}
              name={value}
              value={formData['value'][value]}
            >
              <styles.SelectOption
                value=''
                disabled={true}
                selected={true}
                hidden={true}
              >
                Categoria
              </styles.SelectOption>
              <styles.SelectOption value='instagram'>
                Instagram
              </styles.SelectOption>
              <styles.SelectOption value='facebook'>
                Facebook
              </styles.SelectOption>
              <styles.SelectOption value='whatsapp'>
                Whatsapp
              </styles.SelectOption>
              <styles.SelectOption value='telegram'>
                Telegram
              </styles.SelectOption>
              <styles.SelectOption value='none'>Nenhum</styles.SelectOption>
            </styles.SelectInput>
          );
        }

        return (
          <styles.TextInput
            key={value}
            title={value}
            type='text'
            name={value}
            value={formData['value'][value]}
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
      <styles.AddContactButton
        disabled={!isFormValid}
        type='button'
        onClick={onAddContact}
      >
        Salvar alterações
      </styles.AddContactButton>
    </styles.FormContainer>
  );
};

export { Form };
