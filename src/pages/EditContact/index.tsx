import { Contact } from '../../shared/entities/Contact';
import { HeaderImage } from '../Home/assets';
import { Form } from '../components/Form';
import ArrowBackIcon from './assets/arrow-left.svg';
import { useEditContact } from './hooks/useEditContact';
import * as styles from './styles';
import { ReadonlySignal } from '@preact/signals';
import { FunctionComponent } from 'preact';

export type Props = {
  contactId: string;
};

const EditContact: FunctionComponent<Props> = (props) => {
  const { contactData, onFormSubmit, goBack } = useEditContact(props);

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
