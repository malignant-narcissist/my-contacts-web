import { CSS, getStyled } from '../../../../../stitches.config';

const cssText: CSS = {
  fontSize: '$regular',
  textAlign: 'center',
};

const Container = getStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
});

const EmptyBoxImage = getStyled('img', {
  maxWidth: 'fit-content',
});

const RegularText = getStyled('p', {
  ...cssText,
  color: '$gray400',
  fontWeight: '$regular',
});

const BoldText = getStyled('span', {
  ...cssText,
  color: '$primary200',
  fontWeight: '$bold',
});

export { BoldText, Container, EmptyBoxImage, RegularText };
