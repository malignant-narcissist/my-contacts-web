import { CSS, styled, theme } from '../../../../../../stitches.config';

const ContactMailPhoneBase = styled('span', {
  color: '$gray400',
  fontSize: '$short',
} as CSS);

const ButtonBase = styled('button', {
  border: 'none',
  background: 'none',
  padding: 2,
  height: 'min-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
} as CSS)

const Container = styled('div', {
  padding: 16,
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 4,
  $$boxShadowColor: `${theme.colors.black.value}04`,
  boxShadow: "0px 4px 10px $$boxShadowColor",
} as CSS);

const ContentArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  '&+&': {
    flexDirection: 'row',
    gap: 10,
  },
} as CSS);

const ContentRow = styled('div', {
  display: 'flex',
  gap: 8,
} as CSS);

const ContactName = styled('strong', {
  fontSize: '$regular',
  fontWeight: '$bold',
  color: '$dark',
} as CSS);

const ContactSocialMedia = styled('span', {
  padding: '3px 6px',
  borderRadius: 4,
  fontSize: '$shorter',
  fontWeight: '$bold',
  color: '$primary200',
  backgroundColor: '$primary100',
  textTransform: 'uppercase',
} as CSS);

const ContactMail = styled(ContactMailPhoneBase);

const ContactPhone = styled(ContactMailPhoneBase);

const ButtonEdit = styled(ButtonBase);

const ButtonRemove = styled(ButtonBase);

const ButtonImage = styled('img');

export {
  Container,
  ButtonImage,
  ButtonRemove,
  ButtonEdit,
  ContactPhone,
  ContactMail,
  ContactName,
  ContactSocialMedia,
  ContentArea,
  ContentRow,
};
