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
import { Signal, useSignalEffect } from '@preact/signals';
import React from 'preact/compat';
import { useLocation } from 'wouter-preact';

type Props = Record<'filterName', Signal<string | undefined>>;

const ContactList: React.FC<Props> = ({ filterName }) => {
  const [, setLocation] = useLocation();

  const {
    addContact,
    displayableList,
    orderAsc,
    removeContact,
    toggleOrderAsc,
    updateContactsList,
    mustShow,
  } = useContactList(filterName);

  useSignalEffect(() => {
    console.log(mustShow.value);
  });

  return (
    <Container>
      <HeaderArea>
        {mustShow.value === 'list' || mustShow.value === 'emptyWithFilter' ? (
          <HeaderAreaContactCountText>
            {`${displayableList.value.length} contatos`}
          </HeaderAreaContactCountText>
        ) : null}
        <HeaderAreaCreateContactButton onClick={addContact}>
          Novo Contato
        </HeaderAreaCreateContactButton>
      </HeaderArea>
      <ListArea>
        {mustShow.value === 'emptyWithFilter' ? (
          <NoContactsFound filterName={filterName} />
        ) : null}
        {mustShow.value === 'empty' ? <EmptyListWarning /> : null}
        {mustShow.value === 'error' || mustShow.value === 'list' ? (
          <>
            <ListOrderButton
              orderAsc={orderAsc.value}
              onClick={toggleOrderAsc}
              type='button'
            >
              Nome <ListOrderIcon src={ArrowUpIcon} />
            </ListOrderButton>

            {mustShow.value === 'error' ? (
              <ErrorWarning onRetry={updateContactsList} />
            ) : (
              <ListCardContainer>
                {displayableList.value.map((card) => (
                  <Card
                    key={card.id}
                    {...card}
                    onEdit={() => setLocation(`/edit/${card.id}`)}
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
