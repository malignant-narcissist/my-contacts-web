import { ArrowUpIcon } from '../../assets';
import { EmptyListWarning } from '../EmptyListWarning';
import { ErrorWarning } from '../ErrorWarning';
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
    hasError,
    orderAsc,
    removeContact,
    toggleOrderAsc,
    updateContactsList,
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
        {displayableList.length ? (
          <>
            <ListOrderButton
              orderAsc={orderAsc}
              onClick={toggleOrderAsc}
              type='button'
            >
              Nome <ListOrderIcon src={ArrowUpIcon} />
            </ListOrderButton>

            {hasError ? (
              <ErrorWarning onRetry={updateContactsList} />
            ) : (
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
            )}
          </>
        ) : (
          <EmptyListWarning />
        )}
      </ListArea>
    </Container>
  );
};

export { ContactList };
