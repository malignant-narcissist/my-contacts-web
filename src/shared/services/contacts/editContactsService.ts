import { Contact } from '../../entities/Contact';
import api from '../api';

const editContactService = async <C extends Contact>(
  data: Partial<C> & Pick<C, 'id'>,
) => {
  await api.patch('contacts', {
    json: data,
  });
};

export { editContactService };
