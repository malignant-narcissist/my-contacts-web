import { CardType } from '../../../pages/Home/components/ContactList/hooks/types';
import api from '../api';

const editContactService = async (
  data: Partial<CardType> & Pick<CardType, 'id'>,
) => {
  await api.patch('contacts', {
    json: data,
  });
};

export { editContactService };
