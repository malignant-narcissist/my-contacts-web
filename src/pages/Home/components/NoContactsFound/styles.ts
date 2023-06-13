import { CSS, getStyled } from '../../../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const Image = getStyled<HTMLAttributes<HTMLImageElement>>('img');

const Container = getStyled('div', {
  display: 'flex',
  width: '100%',
  gap: 24,
  alignItems: 'center',
});

const textStyles: CSS = {
  color: '$gray400',
  fontSize: '$regular',
}

const Text = getStyled('p', {
  flex: 1,
  fontWeight: '$regular',
  ...textStyles,
});

const BoldText = getStyled('span', {
  ...textStyles,
  fontWeight: '$bold',
});

export { BoldText, Container, Image, Text };
