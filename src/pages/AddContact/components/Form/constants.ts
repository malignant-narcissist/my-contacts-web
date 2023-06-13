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
