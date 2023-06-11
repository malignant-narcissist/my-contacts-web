import { getStyled } from '../../../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const Container = getStyled('div', {
  alignSelf: 'center',
  width: '100%',
});

const ControlledInput = getStyled<HTMLAttributes<HTMLInputElement>>('input', {
  width: '100%',
  padding: 16,
  border: 'none',
  borderRadius: 25,
  fontSize: '$regular',
  color: '$dark',
  '&::placeholder': {
    color: '$gray400',
    fontSize: '$regular',
  },
});

export { Container, ControlledInput };
