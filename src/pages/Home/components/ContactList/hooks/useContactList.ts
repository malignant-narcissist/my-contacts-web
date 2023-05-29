import { ImmerReducer, useImmerReducer } from 'use-immer';

type State = Record<string, unknown>[];

type Actions = {
  type: 'remove' | 'add' | 'edit';
  payload: State[number] | State;
};

const reducer: ImmerReducer<State, Actions> = (draft, actions) => {
  return draft;
};

const useContactList = () => {
  const [cardList, dispatchCardList] = useImmerReducer(reducer, []);

  return {
    cardList,
    dispatchCardList,
  };
};

export { useContactList };
