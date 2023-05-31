import React from 'preact/compat';
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

type CardProps = {
  name: string;
  socialMedia?: 'instagram';
  email: `${string}@${string}.${string}`;
  phone: `(${string}) ${string}-${string}`;
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
      <ContentArea className='content-area'>
        <ContentRow className='row'>
          <ContactName className='contact-name'>{name}</ContactName>
          <ContactSocialMedia className='badge-social-media'>
            {socialMedia}
          </ContactSocialMedia>
        </ContentRow>
        <ContactPhone className='contact-mail'>{email}</ContactPhone>
        <ContactPhone className='contact-phone'>{phone}</ContactPhone>
      </ContentArea>

      <ContentArea className='content-area'>
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
