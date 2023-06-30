import { Contact } from '../../shared/entities/Contact';
import { editContactService } from '../../shared/services/contacts/editContactsService';
import { useContactStore } from '../../shared/stores/contacts.store';
import { HeaderImage } from '../Home/assets';
import ArrowBackIcon from './assets/arrow-left.svg';
import { Form } from './components/Form';
import {
  Container,
  ContentContainer,
  GoBackButton,
  GoBackButtonIcon,
  Header,
  TitleText,
} from './styles';
import { ReadonlySignal, useComputed, useSignal } from '@preact/signals';
import React, { useEffect } from 'preact/compat';

export type Props = {
  contactId: string;
};

const EditContact: React.FC<Props> = ({ contactId }) => {
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
    <Container>
      <Header src={HeaderImage} />
      <ContentContainer>
        <GoBackButton onClick={goBack} type='button'>
          <GoBackButtonIcon alt='arrow-back' src={ArrowBackIcon} /> Voltar
        </GoBackButton>
        <TitleText>Editar {contactData?.value?.name}</TitleText>
        {contactData.value && (
          <Form
            data={contactData as ReadonlySignal<Contact>}
            onSubmit={onFormSubmit}
          />
        )}
      </ContentContainer>
    </Container>
  );
};

export { EditContact };
