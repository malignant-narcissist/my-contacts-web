import { Contact } from '../../../../shared/entities/Contact';
import { FORM_FIELDS } from './constants';

export type FormDataType = Partial<
  Omit<Contact, 'id' | 'socialMedia'> & {
    [FORM_FIELDS.CATEGORY]: Contact['socialMedia'] | 'none';
  }
>;

export type Props = {
  onSubmit: (data: FormDataType) => Promise<unknown>;
};
