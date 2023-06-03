import { SadFaceEmojiImage } from '../../assets';
import {
  Button,
  Container,
  ContentArea,
  SadEmojiImage,
  WarningText,
} from './styles';
import React from 'preact/compat';

type Props = {
  onRetry: () => Promise<unknown>;
};

const ErrorWarning: React.FC<Props> = ({ onRetry }) => {
  return (
    <Container>
      <SadEmojiImage src={SadFaceEmojiImage} alt='' />
      <ContentArea>
        <WarningText>Ocorreu um erro ao obter os seus contatos!</WarningText>
        <Button onClick={onRetry}>Tentar novamente</Button>
      </ContentArea>
    </Container>
  );
};

export { ErrorWarning };
