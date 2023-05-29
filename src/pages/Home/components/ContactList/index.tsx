import React from 'preact/compat';
import { ArrowUpIcon } from '../../assets';
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
  return (
    <Container>
      <HeaderArea>
        <HeaderAreaContactCountText>3 contatos</HeaderAreaContactCountText>
        <HeaderAreaCreateContactButton>
          Novo Contato
        </HeaderAreaCreateContactButton>
      </HeaderArea>
      <ListArea>
        <ListOrderButton>
          Nome <ListOrderIcon src={ArrowUpIcon} />
        </ListOrderButton>
      </ListArea>
    </Container>
  );
};

export { ContactList };
