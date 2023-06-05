import { CardType } from '../../../pages/Home/components/ContactList/hooks/types';
import api from '../api';

const listContactsService = async (data?: {
  filters?: {
    name?: string;
    skip?: number;
  };
}): Promise<CardType[]> => {
  const response = await api
    .get('contacts', {
      searchParams: data?.filters,
    })
    .json();

  return response as CardType[];
};

export { listContactsService };
