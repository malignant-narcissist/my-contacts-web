import { listContactsService } from '../../../../../shared/services/contacts/listContactsService';
import { useContactStore } from '../../../../../shared/stores/contacts.store';
import { CardType, OrderAscReducerFunctionType } from './types';
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'preact/hooks';

const orderAscReducer: OrderAscReducerFunctionType = (state) => {
  return state === 'ASC' ? 'DESC' : 'ASC';
};

const useContactList = () => {
  const { contacts, edit, remove, add } = useContactStore();

  const [hasError, setHasError] = useState(false);
  const [orderAsc, toggleOrderAsc] = useReducer(orderAscReducer, 'ASC');

  const updateContactsList = useCallback(async () => {
    try {
      const list = await listContactsService();

      add(list);

      setHasError(false);
    } catch {
      setHasError(true);
    }
  }, [add]);

  useEffect(() => {
    listContactsService()
      .then((resp) => {
        add(resp);
      })
      .catch();
  }, [add]);

  const displayableList = useMemo<CardType[]>(() => {
    return [...contacts.values()].sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }

      if (orderAsc === 'ASC') {
        return a.name < b.name ? -1 : 1;
      }

      return a.name > b.name ? -1 : 1;
    });
  }, [contacts, orderAsc]);

  return {
    orderAsc,
    toggleOrderAsc,
    displayableList,
    hasError,
    addContact: add,
    editContact: edit,
    updateContactsList: updateContactsList,
    removeContact: remove,
  };
};

export { useContactList };
