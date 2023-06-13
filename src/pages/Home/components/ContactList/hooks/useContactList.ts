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
import { useLocation } from 'wouter-preact';

const orderAscReducer: OrderAscReducerFunctionType = (state) => {
  return state === 'ASC' ? 'DESC' : 'ASC';
};

const useContactList = (filterName?: string) => {
  const { contacts, edit, remove, reset } = useContactStore();
  const [, navigate] = useLocation();

  const [hasError, setHasError] = useState(false);
  const [orderAsc, toggleOrderAsc] = useReducer(orderAscReducer, 'ASC');

  const updateContactsList = useCallback(async () => {
    try {
      const list = await listContactsService({
        filters: filterName
          ? {
              name: filterName,
            }
          : {},
      });

      reset(list);

      setHasError(false);
    } catch {
      setHasError(true);
    }
  }, [reset, filterName]);

  useEffect(() => {
    updateContactsList();
  }, [updateContactsList]);

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

  const goToAddContact = useCallback(() => {
    navigate('/add');
  }, [navigate]);

  const mustShow = useMemo<
    'error' | 'empty' | 'list' | 'emptyWithFilter'
  >(() => {
    if (hasError) {
      return 'error';
    }

    if (displayableList.length > 0) {
      return 'list';
    }

    return filterName ? 'emptyWithFilter' : 'empty';
  }, [hasError, displayableList.length, filterName]);

  return {
    orderAsc,
    toggleOrderAsc,
    displayableList,
    addContact: goToAddContact,
    editContact: edit,
    mustShow,
    updateContactsList: updateContactsList,
    removeContact: remove,
  };
};

export { useContactList };
