import { Contact } from '../../shared/entities/Contact';
import { editContactService } from '../../shared/services/contacts/editContactsService';
import { useContactStore } from '../../shared/stores/contacts.store';
import { HeaderImage } from '../Home/assets';
import ArrowBackIcon from './assets/arrow-left.svg';
import { Form } from './components/Form';
import * as styles from './styles';
import { ReadonlySignal, useComputed, useSignal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';

export type Props = {
  contactId: string;
};

const EditContact: FunctionComponent<Props> = ({ contactId }) => {
  const { contacts: contactsFromStore } = useContactStore();

  const contacts = useSignal(contactsFromStore);

  useEffect(() => {
    contacts.value = contactsFromStore;
  }, [contactsFromStore]);

  const contactData = useComputed(() => contacts.value.get(contactId));

  const goBack = () => {
    window.history.back();
  };

  const onFormSubmit = async (data: Omit<Contact, 'id'>) => {
    try {
      if (data && contactData?.value?.id) {
        await editContactService({ ...data, id: contactData.value.id });

        goBack();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!contactData.value) {
    return null;
  }

  return (
    <styles.Container>
      <styles.Header src={HeaderImage} />
      <styles.ContentContainer>
        <styles.GoBackButton onClick={goBack} type='button'>
          <styles.GoBackButtonIcon alt='arrow-back' src={ArrowBackIcon} />{' '}
          Voltar
        </styles.GoBackButton>
        <styles.TitleText>Editar {contactData?.value?.name}</styles.TitleText>
        {contactData.value && (
          <Form
            data={contactData as ReadonlySignal<Contact>}
            onSubmit={onFormSubmit}
          />
        )}
      </styles.ContentContainer>
    </styles.Container>
  );
};

export { EditContact };
