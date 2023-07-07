import { SadFaceEmojiImage } from '../../assets';
import * as styles from './styles';
import { FunctionComponent } from 'preact';

type Props = {
  onRetry: () => Promise<unknown>;
};

const ErrorWarning: FunctionComponent<Props> = ({ onRetry }) => {
  return (
    <styles.Container>
      <styles.SadEmojiImage src={SadFaceEmojiImage} alt='' />
      <styles.ContentArea>
        <styles.WarningText>
          Ocorreu um erro ao obter os seus contatos!
        </styles.WarningText>
        <styles.Button onClick={onRetry}>Tentar novamente</styles.Button>
      </styles.ContentArea>
    </styles.Container>
  );
};

export { ErrorWarning };
