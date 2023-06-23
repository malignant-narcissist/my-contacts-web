import { FormDataType } from '../../../pages/AddContact/components/Form/types';
import { Contact } from '../../entities/Contact';
import api from '../api';

const createContactService = async <C extends Contact>(data: FormDataType): Promise<C> => {
  return await api
    .post('contacts', {
      json: data,
    })
    .json<C>();
};

export { createContactService };
