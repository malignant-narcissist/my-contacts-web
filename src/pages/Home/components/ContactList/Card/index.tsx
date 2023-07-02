import { Contact } from '../../../../../shared/entities/Contact';
import { EditIcon, TrashIcon } from '../../../assets';
import * as styles from './styles';
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
    <styles.Container>
      <styles.ContentArea>
        <styles.ContentRow>
          <styles.ContactName>{name}</styles.ContactName>
          {socialMedia && (
            <styles.ContactSocialMedia>{socialMedia}</styles.ContactSocialMedia>
          )}
        </styles.ContentRow>
        <styles.ContactPhone>{email}</styles.ContactPhone>
        <styles.ContactPhone>{phone}</styles.ContactPhone>
      </styles.ContentArea>

      <styles.ContentArea>
        <styles.ButtonEdit onClick={onEdit}>
          <styles.ButtonImage src={EditIcon} />
        </styles.ButtonEdit>
        <styles.ButtonRemove onClick={onRemove}>
          <styles.ButtonImage src={TrashIcon} />
        </styles.ButtonRemove>
      </styles.ContentArea>
    </styles.Container>
  );
};

export { Card };
