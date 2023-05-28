import { CSS, styled } from '../../../stitches.config';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '65px 0',
  gap: 35
} as CSS);

const Header = styled('img');

export { Container, Header };
