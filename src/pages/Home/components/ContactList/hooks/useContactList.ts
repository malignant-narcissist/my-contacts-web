import { Reducer, useReducer } from 'preact/hooks';
import { ImmerReducer, useImmerReducer } from 'use-immer';

type State = Record<string, unknown>[];

type Actions = {
  type: 'remove' | 'add' | 'edit';
  payload: State[number] | State;
};

const reducer: ImmerReducer<State, Actions> = (draft, actions) => {
  return draft;
};

const orderAscReducer: Reducer<'ASC' | 'DESC', undefined> = (state) => {
  return state === 'ASC' ? 'DESC' : 'ASC'
}

const useContactList = () => {
  const [cardList, dispatchCardList] = useImmerReducer(reducer, []);
  const [orderAsc, toggleOrderAsc] = useReducer(orderAscReducer, 'ASC');

  return {
    cardList,
    dispatchCardList,
    orderAsc,
    toggleOrderAsc,
  };
};

export { useContactList };
