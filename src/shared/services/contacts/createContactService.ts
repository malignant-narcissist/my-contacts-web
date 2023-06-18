import { FormDataType } from '../../../pages/AddContact/components/Form/types';
import { CardType } from '../../../pages/Home/components/ContactList/hooks/types';
import api from '../api';

const createContactService = async (data: FormDataType): Promise<CardType> => {
  return await api
    .post('contacts', {
      json: data,
    })
    .json<CardType>();
};

export { createContactService };
