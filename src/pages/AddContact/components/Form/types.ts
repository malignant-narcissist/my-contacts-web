import { FORM_FIELDS } from './constants';

export type FormDataType = Record<
  typeof FORM_FIELDS[keyof typeof FORM_FIELDS],
  string | undefined
>;

export type FormDataState = Partial<FormDataType>;

export type Props = {
  onSubmit: (data: FormDataType) => Promise<unknown>;
};
