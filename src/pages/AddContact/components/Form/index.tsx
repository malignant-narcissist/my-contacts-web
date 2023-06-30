import {
  FIELDS_PLACEHOLDERS,
  FORM_FIELDS,
  SocialMediaSelectionOptionsList,
} from './constants';
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
import React, { ComponentProps } from 'preact/compat';

const Form: React.FC<Props> = ({ onSubmit }) => {
  const { errors, formData, isFormValid, onCreate, onInput } = useForm({
    onSubmit,
  });

  return (
    <FormContainer>
      {Object.values(FORM_FIELDS).map((value) => {
        if (value === FORM_FIELDS.CATEGORY) {
          return (
            <>
              <SelectInput
                title={value}
                onInput={(e) => onInput(e, value)}
                name={value}
                value={formData.value[value]}
                hasError={!!errors.value[value]}
              >
                {SocialMediaSelectionOptionsList.map((option) => {
                  const props = (
                    option.value === ''
                      ? {
                          disabled: true,
                          selected: true,
                          hidden: true,
                        }
                      : {}
                  ) satisfies ComponentProps<typeof SelectOption>;

                  return (
                    <SelectOption value={option.value} {...props}>
                      {option.label}
                    </SelectOption>
                  );
                })}
              </SelectInput>
              {errors.value[value] ? (
                <ErrorMessage>{errors.value[value]}</ErrorMessage>
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
              hasError={!!errors.value[value]}
              value={formData.value[value]}
              onInput={(e) => onInput(e, value)}
              placeholder={FIELDS_PLACEHOLDERS[value]}
            />

            {errors.value[value] ? (
              <ErrorMessage>{errors.value[value]}</ErrorMessage>
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
