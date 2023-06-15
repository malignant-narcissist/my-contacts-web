import api from '../api';

const removeContactService = async (id: string) => {
  await api.delete('contacts', {
    json: {
      id,
    },
  });
};

export { removeContactService };
