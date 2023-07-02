import * as styles from './styles';
import React from 'preact/compat';

type Props = {
  name: string;
  onCancel: () => unknown;
  onDelete: () => Promise<unknown>;
};

const RemoveContactModal: React.FC<Props> = ({ name, onCancel, onDelete }) => {
  return (
    <styles.Container>
      <styles.Card>
        <styles.Title>
          Tem certeza que deseja remover o contato ”{name}”?
        </styles.Title>
        <styles.Text>Esta ação não poderá ser desfeita!</styles.Text>

        <styles.ButtonArea>
          <styles.Button onClick={onCancel} styleType='secondary'>
            Cancelar
          </styles.Button>
          <styles.Button onClick={onDelete} styleType='primary'>
            Deletar
          </styles.Button>
        </styles.ButtonArea>
      </styles.Card>
    </styles.Container>
  );
};

export { RemoveContactModal };
