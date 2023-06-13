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

type Props = Record<'filterName', string | undefined>;

const ContactList: React.FC<Props> = ({ filterName }) => {
  const {
    addContact,
    displayableList,
    hasError,
    orderAsc,
    removeContact,
    toggleOrderAsc,
    updateContactsList,
  } = useContactList(filterName);

  return (
    <Container>
      <HeaderArea>
        {displayableList.length ? (
          <HeaderAreaContactCountText>
            {`${displayableList.length} contatos`}
          </HeaderAreaContactCountText>
        ) : null}
        <HeaderAreaCreateContactButton onClick={addContact}>
          Novo Contato
        </HeaderAreaCreateContactButton>
      </HeaderArea>
      <ListArea>
        {displayableList.length ? (
          <>
            <ListOrderButton
              orderAsc={orderAsc}
              // @ts-ignore
              onClick={() => toggleOrderAsc()}
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
