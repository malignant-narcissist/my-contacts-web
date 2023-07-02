import { SadFaceEmojiImage } from '../../assets';
import * as styles from './styles';
import React from 'preact/compat';

type Props = {
  onRetry: () => Promise<unknown>;
};

const ErrorWarning: React.FC<Props> = ({ onRetry }) => {
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
