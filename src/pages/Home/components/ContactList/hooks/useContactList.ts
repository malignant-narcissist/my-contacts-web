import { Reducer, useMemo, useReducer } from 'preact/hooks';
import { ImmerReducer, useImmerReducer } from 'use-immer';

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

type Actions =
  | {
      type: 'remove';
      payload: string;
    }
  | {
      type: 'add';
      payload: State['list'][number] | State['list'];
    }
  | {
      type: 'edit';
      payload: Partial<State['list'][number]> & { id: string };
    };

const reducer: ImmerReducer<State, Actions> = (draft, actions) => {
  switch (actions.type) {
    case 'add':
      if (Array.isArray(actions.payload)) {
        draft.list.push(...actions.payload);
      } else {
        draft.list.push(actions.payload);
      }
      break;
    case 'edit': {
      const contact = draft.list.find(({ id }) => id === actions.payload.id);

      if (contact) {
        Object.assign(contact, actions.payload);
      }
      break;
    }
    case 'remove': {
      const newList = draft.list.filter(({ id }) => id !== actions.payload);
      draft.list = newList;
      break;
    }
    default:
      throw new Error('Ação inválida');
  }

  return draft;
};

const orderAscReducer: Reducer<'ASC' | 'DESC', undefined> = (state) => {
  return state === 'ASC' ? 'DESC' : 'ASC';
};

const useContactList = (startList?: State['list']) => {
  const [cardList, dispatchCardList] = useImmerReducer(reducer, {
    list: startList ?? [],
  });
  const [orderAsc, toggleOrderAsc] = useReducer(orderAscReducer, 'ASC');

  const displayableList = useMemo<State['list']>(() => {
    return cardList.list.sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }

      if (orderAsc === 'ASC') {
        return a.name > b.name ? -1 : 1;
      }

      return a.name < b.name ? -1 : 1;
    });
  }, [cardList.list, orderAsc]);

  return {
    cardList,
    dispatchCardList: dispatchCardList as (actions: Actions) => void,
    orderAsc,
    toggleOrderAsc,
    displayableList,
  };
};

export { useContactList };
