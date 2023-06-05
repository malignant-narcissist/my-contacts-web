import { ArrowUpIcon } from '../../assets';
import { Card } from './Card';
import { useContactList } from './hooks';
import {
  Container,
  HeaderArea,
  HeaderAreaContactCountText,
  HeaderAreaCreateContactButton,
  ListArea,
  ListCardContainer,
  ListOrderButton,
  ListOrderIcon,
} from './styles';
import React from 'preact/compat';

const ContactList: React.FC = () => {
  const {
    displayableList,
    orderAsc,
    removeContact,
    toggleOrderAsc,
  } = useContactList();

  return (
    <Container>
      <HeaderArea>
        <HeaderAreaContactCountText>
          {displayableList.length ? `${displayableList.length} contatos` : null}
        </HeaderAreaContactCountText>
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

        <ListCardContainer>
          {displayableList.map((card) => (
            <Card
              key={card.id}
              {...card}
              onEdit={() => {}}
              onRemove={() => removeContact(card.id)}
            />
          ))}
        </ListCardContainer>
      </ListArea>
    </Container>
  );
};

export { ContactList };
