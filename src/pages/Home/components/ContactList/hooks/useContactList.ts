import { Contact } from '../../../../../shared/entities/Contact.ts';
import { useModalContainer } from '../../../../../shared/hooks/useModal.tsx';
import { listContactsService } from '../../../../../shared/services/contacts/listContactsService';
import { removeContactService } from '../../../../../shared/services/contacts/removeContactService.ts';
import { useContactStore } from '../../../../../shared/stores/contacts.store';
import { RemoveContactModal } from '../../modals/RemoveContactModal';
import { OrderAscReducerFunctionType } from './types';
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
  const { close, open } = useModalContainer();
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

  const displayableList = useMemo<Contact[]>(() => {
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

  const removeContact = useCallback(
    async (id: string) => {
      const contactToEdit = contacts.get(id);

      if (contactToEdit) {
        const element = RemoveContactModal({
          name: contactToEdit.name,
          onCancel: close,
          async onDelete() {
            try {
              await removeContactService(id);

              remove(id);

              close();
            } catch (err) {
              console.error(err);
            }
          },
        });

        element && open(element);
      }
    },
    [open, contacts, close, remove],
  );

  return {
    orderAsc,
    toggleOrderAsc,
    displayableList,
    addContact: goToAddContact,
    editContact: edit,
    mustShow,
    updateContactsList,
    removeContact,
  };
};

export { useContactList };
