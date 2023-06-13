import { getStyled } from '../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const Container = getStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '65px 0',
  gap: 50,
  width: '100vw',
});

const Header = getStyled<HTMLAttributes<HTMLImageElement>>('img');

const ContentContainer = getStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  gap: 35,
});

const GoBackButton = getStyled<HTMLAttributes<HTMLButtonElement>>('button', {
  border: 'none',
  background: 'transparent',
  color: '$primary200',
  fontSize: '$regular',
  fontWeight: '$bold',
  alignSelf: 'flex-start',
  display: 'flex',
  gap: 8,
});

const GoBackButtonIcon = getStyled<HTMLAttributes<HTMLImageElement>>('img', {});

const TitleText = getStyled('h1');

export {
  Container,
  Header,
  ContentContainer,
  GoBackButton,
  GoBackButtonIcon,
  TitleText,
};
