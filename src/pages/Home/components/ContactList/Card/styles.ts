import { getStyled, theme } from '../../../../../../stitches.config';

const ContactMailPhoneBase = getStyled('span', {
  color: '$gray400',
  fontSize: '$short',
});

const ButtonBase = getStyled('button', {
  border: 'none',
  background: 'none',
  padding: 2,
  height: 'min-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Container = getStyled('div', {
  marginTop: 10,
  padding: 16,
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 4,
  $$boxShadowColor: `${theme.colors.black.value}04`,
  boxShadow: '0px 4px 10px $$boxShadowColor',
});

const ContentArea = getStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  '&+&': {
    flexDirection: 'row',
    gap: 10,
  },
});

const ContentRow = getStyled('div', {
  display: 'flex',
  gap: 8,
});

const ContactName = getStyled('strong', {
  fontSize: '$regular',
  fontWeight: '$bold',
  color: '$dark',
});

const ContactSocialMedia = getStyled('span', {
  padding: '3px 6px',
  borderRadius: 4,
  fontSize: '$shorter',
  fontWeight: '$bold',
  color: '$primary200',
  backgroundColor: '$primary100',
  textTransform: 'uppercase',
});

const ContactMail = getStyled(ContactMailPhoneBase);

const ContactPhone = getStyled(ContactMailPhoneBase);

const ButtonEdit = getStyled(ButtonBase);

const ButtonRemove = getStyled(ButtonBase);

const ButtonImage = getStyled('img');

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
