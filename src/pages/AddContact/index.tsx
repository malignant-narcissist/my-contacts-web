import { createContactService } from '../../shared/services/contacts/createContactService';
import { useContactStore } from '../../shared/stores/contacts.store';
import { HeaderImage } from '../Home/assets';
import ArrowBackIcon from './assets/arrow-left.svg';
import { Form } from './components/Form';
import { FormDataType } from './components/Form/types';
import {
  Container,
  ContentContainer,
  GoBackButton,
  GoBackButtonIcon,
  Header,
  TitleText,
} from './styles';
import React from 'preact/compat';
import { useLocation } from 'wouter-preact';

const AddContact: React.FC = () => {
  const [, setLocation] = useLocation();
  const { add } = useContactStore();

  const goBack = () => {
    window.history.back();
  };

  const onFormSubmit = async (data: FormDataType) => {
    try {
      const contact = await createContactService(data);

      add(contact);

      setLocation('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header src={HeaderImage} />
      <ContentContainer>
        <GoBackButton onClick={goBack} type='button'>
          <GoBackButtonIcon alt='arrow-back' src={ArrowBackIcon} /> Voltar
        </GoBackButton>
        <TitleText>Novo contato</TitleText>
        <Form onSubmit={onFormSubmit} />
      </ContentContainer>
    </Container>
  );
};

export { AddContact };
