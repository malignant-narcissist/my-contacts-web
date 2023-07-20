import {
  FIELDS_PLACEHOLDERS,
  FORM_FIELDS,
  SocialMediaSelectionOptionsList,
} from './constants';
import { useForm } from './hooks/useForm';
import * as styles from './styles';
import { Props } from './types';
import { ComponentProps, FunctionComponent } from 'preact';

const Form: FunctionComponent<Props> = (props) => {
  const { errors, formData, isFormValid, onCreate, onInput } = useForm(props);

  return (
    <styles.FormContainer>
      {Object.values(FORM_FIELDS).map((fieldName) => {
        if (fieldName === FORM_FIELDS.CATEGORY) {
          return (
            <>
              <styles.SelectInput
                title={fieldName}
                onInput={(e) => onInput(e, fieldName)}
                name={fieldName}
                value={formData.value[fieldName]}
                hasError={!!errors.value[fieldName]}
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
                  ) satisfies ComponentProps<typeof styles.SelectOption>;

                  return (
                    <styles.SelectOption value={option.value} {...props}>
                      {option.label}
                    </styles.SelectOption>
                  );
                })}
              </styles.SelectInput>
              {errors.value[fieldName] ? (
                <styles.ErrorMessage>
                  {errors.value[fieldName]}
                </styles.ErrorMessage>
              ) : null}
            </>
          );
        }

        return (
          <>
            <styles.TextInput
              key={fieldName}
              title={fieldName}
              type={fieldName === FORM_FIELDS.EMAIL ? 'email' : 'text'}
              name={fieldName}
              hasError={!!errors.value[fieldName]}
              value={formData.value[fieldName]}
              onInput={(e) => onInput(e, fieldName)}
              placeholder={FIELDS_PLACEHOLDERS[fieldName]}
            />

            {errors.value[fieldName] ? (
              <styles.ErrorMessage>
                {errors.value[fieldName]}
              </styles.ErrorMessage>
            ) : null}
          </>
        );
      })}
      <styles.AddContactButton
        disabled={!isFormValid}
        type='button'
        onClick={onCreate}
      >
        Cadastrar
      </styles.AddContactButton>
    </styles.FormContainer>
  );
};

export { Form };
