import { Contact } from '../../entities/Contact';
import api from '../api';

const listContactsService = async <C extends Contact>(data?: {
  filters?: {
    name?: string;
    skip?: number;
  };
}): Promise<C[]> => {
  const response = await api
    .get('contacts', {
      searchParams: data?.filters,
    })
    .json<C[]>();

  return response;
};

export { listContactsService };
