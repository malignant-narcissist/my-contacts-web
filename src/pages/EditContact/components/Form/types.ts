import { Contact } from '../../../../shared/entities/Contact';
import { FORM_FIELDS } from './constants';

export type FormDataType = Record<
  typeof FORM_FIELDS[keyof typeof FORM_FIELDS],
  string | undefined
>;

export type FormDataState = FormDataType & { category?: string };

export type Props = {
  data: Contact;
  onSubmit: (data: Omit<Contact, 'id'>) => Promise<unknown>;
};
