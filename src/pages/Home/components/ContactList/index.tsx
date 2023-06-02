import { useContactStore } from '../../../../shared/stores/contacts.store';
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
  const { contacts, edit, remove } = useContactStore();

  const { orderAsc, toggleOrderAsc, displayableList } = useContactList([
    ...contacts.values(),
  ]);

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

        <ListCardContainer>
          {displayableList.map((card) => (
            <Card
              key={card.id}
              {...card}
              onEdit={() =>
                edit({
                  id: card.id,
                  name: 'Julius Novachrono',
                  email: 'julis.novachrono@mail.com',
                })
              }
              onRemove={() => remove(card.id)}
            />
          ))}
        </ListCardContainer>
      </ListArea>
    </Container>
  );
};

export { ContactList };
