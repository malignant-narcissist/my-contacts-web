import { Reducer, useMemo, useReducer } from 'preact/hooks';

type Card = {
  id: string;
  name: string;
  socialMedia?: 'instagram' | 'facebook' | 'whatsapp' | 'telegram';
  email: `${string}@${string}.${string}`;
  phone: `(${string}) ${string}-${string}`;
};

type State = {
  list: Card[];
  filters?: {
    name: string;
  };
};

const orderAscReducer: Reducer<'ASC' | 'DESC', undefined> = (state) => {
  return state === 'ASC' ? 'DESC' : 'ASC';
};

const useContactList = (list: State['list']) => {
  const [orderAsc, toggleOrderAsc] = useReducer(orderAscReducer, 'ASC');

  const displayableList = useMemo<State['list']>(() => {
    return list.sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }

      if (orderAsc === 'ASC') {
        return a.name < b.name ? -1 : 1;
      }

      return a.name > b.name ? -1 : 1;
    });
  }, [list, orderAsc]);

  return {
    orderAsc,
    toggleOrderAsc,
    displayableList,
  };
};

export { useContactList };
