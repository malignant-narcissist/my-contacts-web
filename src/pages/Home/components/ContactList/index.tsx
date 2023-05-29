import React from 'preact/compat';
import {
  Container,
  HeaderArea,
  HeaderAreaContactCountText,
  HeaderAreaCreateContactButton,
} from './styles';

const ContactList: React.FC = () => {
  return (
    <Container className="ContactList_Container">
      <HeaderArea>
        <HeaderAreaContactCountText>3 contatos</HeaderAreaContactCountText>
        <HeaderAreaCreateContactButton>
          Novo Contato
        </HeaderAreaCreateContactButton>
      </HeaderArea>
    </Container>
  );
};

export { ContactList };
