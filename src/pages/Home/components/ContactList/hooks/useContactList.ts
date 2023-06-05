import { CardType, OrderAscReducerFunctionType } from './types';
import { useMemo, useReducer } from 'preact/hooks';

const orderAscReducer: OrderAscReducerFunctionType = (state) => {
  return state === 'ASC' ? 'DESC' : 'ASC';
};

const useContactList = (list: CardType[]) => {
  const [orderAsc, toggleOrderAsc] = useReducer(orderAscReducer, 'ASC');

  const displayableList = useMemo<CardType[]>(() => {
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
