import { FormDataType } from '../../../pages/AddContact/components/Form/types';
import api from '../api';

const createContactService = async (data: FormDataType): Promise<void> => {
  await api
    .post('contacts', {
      json: data,
    })
    .json();
};

export { createContactService };
