import { Contact } from '../../../shared/entities/Contact';
import { FORM_FIELDS } from './constants';
import { ReadonlySignal } from '@preact/signals';

export type FormDataType = Partial<
  Omit<Contact, 'id' | 'socialMedia'> & {
    [FORM_FIELDS.CATEGORY]: Contact['socialMedia'] | 'none';
  }
>;

export type Props = {
  data?: ReadonlySignal<Contact | undefined>;
  onSubmit: (data: FormDataType) => Promise<unknown>;
};
