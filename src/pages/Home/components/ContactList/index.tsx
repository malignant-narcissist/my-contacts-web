import { ArrowUpIcon } from '../../assets';
import { EmptyListWarning } from '../EmptyListWarning';
import { ErrorWarning } from '../ErrorWarning';
import { NoContactsFound } from '../NoContactsFound';
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
    orderAsc,
    removeContact,
    toggleOrderAsc,
    updateContactsList,
    mustShow,
  } = useContactList(filterName);

  return (
    <Container>
      <HeaderArea>
        {mustShow === 'list' || mustShow === 'emptyWithFilter' ? (
          <HeaderAreaContactCountText>
            {`${displayableList.length} contatos`}
          </HeaderAreaContactCountText>
        ) : null}
        <HeaderAreaCreateContactButton onClick={addContact}>
          Novo Contato
        </HeaderAreaCreateContactButton>
      </HeaderArea>
      <ListArea>
        {mustShow === 'emptyWithFilter' ? (
          <NoContactsFound filterName={filterName} />
        ) : null}
        {mustShow === 'empty' ? <EmptyListWarning /> : null}
        {mustShow === 'error' || mustShow === 'list' ? (
          <>
            <ListOrderButton
              orderAsc={orderAsc}
              // @ts-ignore
              onClick={() => toggleOrderAsc()}
              type='button'
            >
              Nome <ListOrderIcon src={ArrowUpIcon} />
            </ListOrderButton>

            {mustShow === 'error' ? (
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
        ) : null}
      </ListArea>
    </Container>
  );
};

export { ContactList };
