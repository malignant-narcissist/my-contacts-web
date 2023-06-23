import { CardType } from '../../../Home/components/ContactList/hooks/types';
import { FORM_FIELDS } from './constants';

export type FormDataType = Record<
  typeof FORM_FIELDS[keyof typeof FORM_FIELDS],
  string | undefined
>;

export type FormDataState = FormDataType & { category?: string };

export type Props = {
  data: CardType;
  onSubmit: (data: Omit<CardType, 'id'>) => Promise<unknown>;
};
