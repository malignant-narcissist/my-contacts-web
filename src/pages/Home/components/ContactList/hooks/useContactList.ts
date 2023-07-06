import { listContactsService } from '../../../../../shared/services/contacts/listContactsService';
import { removeContactService } from '../../../../../shared/services/contacts/removeContactService.ts';
import { useContactStore } from '../../../../../shared/stores/contacts.store';
import { RemoveContactModalProps } from '../../modals/RemoveContactModal';
import {
  Signal,
  useComputed,
  useSignal,
  useSignalEffect,
} from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { useLocation } from 'wouter-preact';

const useContactList = (filterName?: Signal<string | undefined>) => {
  const {
    contacts: contactsFromStore,
    edit,
    remove,
    reset,
  } = useContactStore();
  const removeContactModalProps = useSignal<RemoveContactModalProps | null>(
    null,
  );
  const [, navigate] = useLocation();

  const loading = useSignal(false);
  const contacts = useSignal(contactsFromStore);
  const orderAsc = useSignal<'ASC' | 'DESC'>('ASC');
  const hasError = useSignal(false);

  useEffect(() => {
    contacts.value = contactsFromStore;
  }, [contactsFromStore]);

  const goToAddContact = () => {
    navigate('/add');
  };

  const toggleOrderAsc = () => {
    orderAsc.value = orderAsc.value === 'ASC' ? 'DESC' : 'ASC';
  };

  const displayableList = useComputed(() => {
    return [...contacts.value.values()].sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      }

      if (orderAsc.value === 'ASC') {
        return a.name < b.name ? -1 : 1;
      }

      return a.name > b.name ? -1 : 1;
    });
  });

  const mustShow = useComputed<'error' | 'empty' | 'list' | 'emptyWithFilter'>(
    () => {
      if (hasError.value) {
        return 'error';
      }

      if (displayableList.value.length > 0) {
        return 'list';
      }

      return filterName?.value ? 'emptyWithFilter' : 'empty';
    },
  );

  const updateContactsList = async () => {
    loading.value = true;

    try {
      const list = await listContactsService({
        filters: filterName?.value
          ? {
              name: filterName.value,
            }
          : {},
      });

      reset(list);

      hasError.value = false;
    } catch {
      hasError.value = true;
    } finally {
      loading.value = false;
    }
  };

  useSignalEffect(() => {
    updateContactsList();
  });

  const removeContact = async (id: string) => {
    const contactToRemove = contacts.value.get(id) ?? null;

    if (contactToRemove) {
      removeContactModalProps.value = {
        name: contactToRemove.name,
        onCancel() {
          removeContactModalProps.value = null;
        },
        async onDelete() {
          loading.value = true;

          await removeContactService(contactToRemove.id);

          remove(contactToRemove.id);

          removeContactModalProps.value = null;

          loading.value = false;
        },
      };
    }
  };

  return {
    loading,
    orderAsc,
    toggleOrderAsc,
    displayableList,
    addContact: goToAddContact,
    editContact: edit,
    mustShow,
    updateContactsList,
    removeContact,
    removeContactModalProps,
  };
};

export { useContactList };
