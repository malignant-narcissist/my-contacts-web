import { Button, ButtonArea, Card, Container, Text, Title } from './styles';
import React from 'preact/compat';

type Props = {
  name: string;
  onCancel: () => unknown;
  onDelete: () => Promise<unknown>;
};

const RemoveContactModal: React.FC<Props> = ({ name, onCancel, onDelete }) => {
  return (
    <Container>
      <Card>
        <Title>Tem certeza que deseja remover o contato ”{name}”?</Title>
        <Text>Esta ação não poderá ser desfeita!</Text>

        <ButtonArea>
          <Button onClick={onCancel} styleType='secondary'>
            Cancelar
          </Button>
          <Button onClick={onDelete} styleType='primary'>
            Deletar
          </Button>
        </ButtonArea>
      </Card>
    </Container>
  );
};

export { RemoveContactModal };
