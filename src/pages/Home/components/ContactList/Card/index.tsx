import { Contact } from '../../../../../shared/entities/Contact';
import { EditIcon, TrashIcon } from '../../../assets';
import {
  ButtonEdit,
  ButtonImage,
  ButtonRemove,
  ContactName,
  ContactPhone,
  ContactSocialMedia,
  Container,
  ContentArea,
  ContentRow,
} from './styles';
import React from 'preact/compat';

type CardProps = Omit<Contact, 'id'> & {
  onEdit: () => unknown;
  onRemove: () => unknown;
};

const Card: React.FC<CardProps> = ({
  name,
  socialMedia,
  email,
  phone,
  onEdit,
  onRemove,
}) => {
  return (
    <Container>
      <ContentArea>
        <ContentRow>
          <ContactName>{name}</ContactName>
          {socialMedia && (
            <ContactSocialMedia>{socialMedia}</ContactSocialMedia>
          )}
        </ContentRow>
        <ContactPhone>{email}</ContactPhone>
        <ContactPhone>{phone}</ContactPhone>
      </ContentArea>

      <ContentArea>
        <ButtonEdit onClick={onEdit}>
          <ButtonImage src={EditIcon} />
        </ButtonEdit>
        <ButtonRemove onClick={onRemove}>
          <ButtonImage src={TrashIcon} />
        </ButtonRemove>
      </ContentArea>
    </Container>
  );
};

export { Card };
