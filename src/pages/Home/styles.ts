import { CSS, styled } from '../../../stitches.config';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '65px 0',
  gap: 50,
  width: '100vw',
} as CSS);

const Header = styled('img');

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  gap: 35,
} as CSS)

export { Container, Header, ContentContainer };
