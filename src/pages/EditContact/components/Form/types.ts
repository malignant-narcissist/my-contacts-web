import { Contact } from '../../../../shared/entities/Contact';
import { FORM_FIELDS } from './constants';
import { Signal } from '@preact/signals';

export type FormDataType = Record<
  typeof FORM_FIELDS[keyof typeof FORM_FIELDS],
  string | undefined
>;

export type FormDataState = FormDataType & { category?: string };

export type Props = {
  data: Signal<Contact>;
  onSubmit: (data: Omit<Contact, 'id'>) => Promise<unknown>;
};
