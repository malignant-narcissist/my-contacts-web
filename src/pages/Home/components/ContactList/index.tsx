import React from 'preact/compat';
import { ArrowUpIcon } from '../../assets';
import { useContactList } from './hooks';
import {
  Container,
  HeaderArea,
  HeaderAreaContactCountText,
  HeaderAreaCreateContactButton,
  ListArea,
  ListOrderButton,
  ListOrderIcon,
} from './styles';

const ContactList: React.FC = () => {
  const { orderAsc, toggleOrderAsc } = useContactList();

  return (
    <Container>
      <HeaderArea>
        <HeaderAreaContactCountText>3 contatos</HeaderAreaContactCountText>
        <HeaderAreaCreateContactButton>
          Novo Contato
        </HeaderAreaCreateContactButton>
      </HeaderArea>
      <ListArea>
        <ListOrderButton
          orderAsc={orderAsc}
          onClick={toggleOrderAsc}
          type='button'
        >
          Nome <ListOrderIcon src={ArrowUpIcon} />
        </ListOrderButton>
      </ListArea>
    </Container>
  );
};

export { ContactList };
