import { createContactService } from '../../shared/services/contacts/createContactService';
import { useContactStore } from '../../shared/stores/contacts.store';
import { HeaderImage } from '../Home/assets';
import { Form } from '../components/Form';
import { FormDataType } from '../components/Form/types';
import ArrowBackIcon from './assets/arrow-left.svg';
import * as styles from './styles';
import { FunctionComponent } from 'preact';
import { useLocation } from 'wouter-preact';

const AddContact: FunctionComponent = () => {
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
