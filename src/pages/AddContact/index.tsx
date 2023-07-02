import { createContactService } from '../../shared/services/contacts/createContactService';
import { useContactStore } from '../../shared/stores/contacts.store';
import { HeaderImage } from '../Home/assets';
import ArrowBackIcon from './assets/arrow-left.svg';
import { Form } from './components/Form';
import { FormDataType } from './components/Form/types';
import * as styles from './styles';
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
    <styles.Container>
      <styles.Header src={HeaderImage} />
      <styles.ContentContainer>
        <styles.GoBackButton onClick={goBack} type='button'>
          <styles.GoBackButtonIcon alt='arrow-back' src={ArrowBackIcon} />{' '}
          Voltar
        </styles.GoBackButton>
        <styles.TitleText>Novo contato</styles.TitleText>
        <Form onSubmit={onFormSubmit} />
      </styles.ContentContainer>
    </styles.Container>
  );
};

export { AddContact };
