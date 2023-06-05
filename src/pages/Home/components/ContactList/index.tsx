import { listContactsService } from '../../../../shared/services/contacts/listContactsService';
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
import React, { useEffect } from 'preact/compat';

const ContactList: React.FC = () => {
  const { contacts, edit, remove, add } = useContactStore();

  useEffect(() => {
    listContactsService()
      .then((resp) => {
        add(resp);
      })
      .catch();
  }, [add]);

  const { orderAsc, toggleOrderAsc, displayableList } = useContactList([
    ...contacts.values(),
  ]);

  return (
    <Container>
      <HeaderArea>
        <HeaderAreaContactCountText>
          {contacts.size} {contacts.size ? 'contatos' : 'contato'}
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
              onRemove={() => remove(card.id)}
            />
          ))}
        </ListCardContainer>
      </ListArea>
    </Container>
  );
};

export { ContactList };
