import { ArrowUpIcon } from '../../assets';
import { EmptyListWarning } from '../EmptyListWarning';
import { ErrorWarning } from '../ErrorWarning';
import { NoContactsFound } from '../NoContactsFound';
import { Card } from './Card';
import { useContactList } from './hooks';
import * as styles from './styles';
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
    <styles.Container>
      <styles.HeaderArea>
        {mustShow.value === 'list' || mustShow.value === 'emptyWithFilter' ? (
          <styles.HeaderAreaContactCountText>
            {`${displayableList.value.length} contatos`}
          </styles.HeaderAreaContactCountText>
        ) : null}
        <styles.HeaderAreaCreateContactButton onClick={addContact}>
          Novo Contato
        </styles.HeaderAreaCreateContactButton>
      </styles.HeaderArea>
      <styles.ListArea>
        {mustShow.value === 'emptyWithFilter' ? (
          <NoContactsFound filterName={filterName} />
        ) : null}
        {mustShow.value === 'empty' ? <EmptyListWarning /> : null}
        {mustShow.value === 'error' || mustShow.value === 'list' ? (
          <>
            <styles.ListOrderButton
              orderAsc={orderAsc.value}
              onClick={toggleOrderAsc}
              type='button'
            >
              Nome <styles.ListOrderIcon src={ArrowUpIcon} />
            </styles.ListOrderButton>

            {mustShow.value === 'error' ? (
              <ErrorWarning onRetry={updateContactsList} />
            ) : (
              <styles.ListCardContainer>
                {displayableList.value.map((card) => (
                  <Card
                    key={card.id}
                    {...card}
                    onEdit={() => setLocation(`/edit/${card.id}`)}
                    onRemove={() => removeContact(card.id)}
                  />
                ))}
              </styles.ListCardContainer>
            )}
          </>
        ) : null}
      </styles.ListArea>
    </styles.Container>
  );
};

export { ContactList };
