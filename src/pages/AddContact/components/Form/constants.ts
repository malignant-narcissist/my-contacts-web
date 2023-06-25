import { enums, pattern, string } from 'superstruct';

export const FORM_FIELDS = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  CATEGORY: 'category',
} as const;

export const FIELDS_PLACEHOLDERS = {
  [FORM_FIELDS.NAME]: 'Nome',
  [FORM_FIELDS.EMAIL]: 'E-mail',
  [FORM_FIELDS.PHONE]: 'Telefone',
} as const;

export const ContactFieldsValidations = {
  [FORM_FIELDS.NAME]: string(),
  [FORM_FIELDS.EMAIL]: pattern(
    string(),
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  ),
  [FORM_FIELDS.PHONE]: pattern(string(), /\([0-9]{2}\) 9[0-9]{4}-[0-9]{4}/),
  [FORM_FIELDS.CATEGORY]: enums([
    'instagram',
    'facebook',
    'whatsapp',
    'telegram',
    'none',
  ]),
};
