import { FIELDS_PLACEHOLDERS, FORM_FIELDS } from './constants';
import { useForm } from './hooks/useForm';
import {
  AddContactButton,
  ErrorMessage,
  FormContainer,
  SelectInput,
  SelectOption,
  TextInput,
} from './styles';
import { Props } from './types';
import React from 'preact/compat';

const Form: React.FC<Props> = ({ onSubmit }) => {
  const { errors, formData, isFormValid, onCreate, onInput } = useForm({
    onSubmit,
  });

  return (
    <FormContainer>
      {Object.entries(FORM_FIELDS).map(([key, value]) => {
        if (value === FORM_FIELDS.CATEGORY) {
          return (
            <>
              <SelectInput
                title={value}
                onInput={(e) => onInput(e, value)}
                name={value}
                value={formData[value]}
                hasError={!!errors[value]}
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

              {errors[value] ? (
                <ErrorMessage>{errors[value]}</ErrorMessage>
              ) : null}
            </>
          );
        }

        return (
          <>
            <TextInput
              key={value}
              title={value}
              type={value === FORM_FIELDS.EMAIL ? 'email' : 'text'}
              name={value}
              hasError={!!errors[value]}
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

            {errors[value] ? (
              <ErrorMessage>{errors[value]}</ErrorMessage>
            ) : null}
          </>
        );
      })}
      <AddContactButton
        disabled={!isFormValid}
        type='button'
        onClick={onCreate}
      >
        Cadastrar
      </AddContactButton>
    </FormContainer>
  );
};

export { Form };
