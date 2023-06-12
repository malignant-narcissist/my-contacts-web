import {AddContactButton, FormContainer, SelectInput, SelectOption, TextInput} from "./styles"
import React, {TargetedEvent} from "preact/compat";
import {useCallback, useDebugValue, useMemo, useState} from "preact/hooks";

type Props = {
  onSubmit: () => Promise<unknown>
}

const FORM_FIELDS = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  CATEGORY: 'category',
} as const;

const FIELDS_PLACEHOLDERS = {
  [FORM_FIELDS.NAME]: 'Nome',
  [FORM_FIELDS.EMAIL]: 'E-mail',
  [FORM_FIELDS.PHONE]: 'Telefone',
} as const;

type FormDataState = Partial<Record<typeof FORM_FIELDS[keyof typeof FORM_FIELDS], string | undefined>>

const Form: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormDataState>({});

  const isFormValid = useMemo(
    () => {
    const formDataValues = Object.values(formData);

     return formDataValues.length === 4 && formDataValues.every(item => !!item)
    }, [formData]
  )
  
  const onInput = useCallback(
    (e: TargetedEvent<HTMLInputElement | HTMLSelectElement, Event>, key: keyof FormDataState) => {      
        if (e.target && 'value' in e.target) {
          const value = e.target.value;

          typeof value === 'string' && setFormData(state => ({
            ...state,
            [key]: key === FORM_FIELDS.CATEGORY && !value ? undefined : value,
          }))
        }
    }, []
  )
  
  return (
    <FormContainer>
      {
        Object.entries(FORM_FIELDS).map(([key, value]) => {
          
            if (value === FORM_FIELDS.CATEGORY) {
              return (
                <SelectInput
                  title={value}
                  onInput={e => onInput(e, value)}
                  name={value}
                  value={formData[value]}
                >
                  <SelectOption value="" disabled selected hidden>Categoria</SelectOption>
                  <SelectOption value="instagram">Instagram</SelectOption>
                  <SelectOption value="facebook">Facebook</SelectOption>
                  <SelectOption value="whatsapp">Whatsapp</SelectOption>
                  <SelectOption value="telegram">Telegram</SelectOption>
                  <SelectOption value="none">Nenhum</SelectOption>
                </SelectInput>
              )
            }
          
            return (
              <TextInput
                key={value}
                title={value}
                type="text"
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
            )
          }
        )
      }
      <AddContactButton disabled={!isFormValid} type="button" onClick={onSubmit}>Cadastrar</AddContactButton>
    </FormContainer>
  )
}

export { Form }
