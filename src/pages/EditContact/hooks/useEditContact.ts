import { Props } from '..';
import { editContactService } from '../../../shared/services/contacts/editContactsService';
import { useContactStore } from '../../../shared/stores/contacts.store';
import { Props as FormProps } from '../../components/Form/types';
import { useComputed, useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';

const useEditContact = ({ contactId }: Props) => {
  const { contacts: contactsFromStore } = useContactStore();

  const contacts = useSignal(contactsFromStore);

  useEffect(() => {
    contacts.value = contactsFromStore;
  }, [contactsFromStore]);

  const contactData = useComputed(() => contacts.value.get(contactId));

  const goBack = () => {
    window.history.back();
  };

  const onFormSubmit: FormProps['onSubmit'] = async (data) => {
    try {
      if (data && contactData?.value?.id) {
        await editContactService({ ...data, id: contactData.value.id });

        goBack();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    contactData,
    goBack,
    onFormSubmit,
  };
};

export { useEditContact };
