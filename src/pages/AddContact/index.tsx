import { createContactService } from '../../shared/services/contacts/createContactService';
import { HeaderImage } from '../Home/assets';
import { Form } from './components/Form';
import { FormDataType } from './components/Form/types';
import {
  Container,
  ContentContainer,
  GoBackButton,
  Header,
  TitleText,
} from './styles';
import React from 'preact/compat';
import { useCallback } from 'preact/hooks';

const AddContact: React.FC = () => {
  const onInput = useCallback(async (data: FormDataType) => {
    try {
      await createContactService(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Header src={HeaderImage} />
      <ContentContainer>
        <GoBackButton>{'<-'} Voltar</GoBackButton>
        <TitleText>Novo contato</TitleText>
        <Form onSubmit={onInput} />
      </ContentContainer>
    </Container>
  );
};

export { AddContact };
