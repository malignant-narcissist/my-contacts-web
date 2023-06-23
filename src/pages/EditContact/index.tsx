import { Contact } from '../../shared/entities/Contact';
import { editContactService } from '../../shared/services/contacts/editContactsService';
import { useContactStore } from '../../shared/stores/contacts.store';
import { HeaderImage } from '../Home/assets';
// import { CardType } from '../Home/components/ContactList/hooks/types';
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
import React from 'preact/compat';
import { useCallback, useMemo } from 'preact/hooks';

export type Props = {
  contactId: string;
};

const EditContact: React.FC<Props> = ({ contactId }) => {
  const { contacts } = useContactStore();

  const contactData = useMemo(
    () => contacts.get(contactId),
    [contactId, contacts],
  );

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const onFormSubmit = useCallback(
    async (data: Omit<Contact, 'id'>) => {
      try {
        if (data && contactData?.id) {
          await editContactService({ ...data, id: contactData.id });

          goBack();
        }
      } catch (error) {
        console.error(error);
      }
    },
    [contactData, goBack],
  );

  if (!contactData) {
    return null;
  }

  return (
    <Container>
      <Header src={HeaderImage} />
      <ContentContainer>
        <GoBackButton onClick={goBack} type='button'>
          <GoBackButtonIcon alt='arrow-back' src={ArrowBackIcon} /> Voltar
        </GoBackButton>
        <TitleText>Editar {contactData?.name}</TitleText>
        <Form data={contactData} onSubmit={onFormSubmit} />
      </ContentContainer>
    </Container>
  );
};

export { EditContact };
