import { CSS, styled } from '../../../../../stitches.config';

const Container = styled('div', {
  alignSelf: 'center',
  width: '100%',
} as CSS);

const ControlledInput = styled('input', {
  width: '100%',
  padding: 16,
  border: 'none',
  borderRadius: 25,
  fontSize: '$regular',
  color: '$dark',
  '&::placeholder': {
    color: '$gray400',
    fontSize: '$regular'
  },
} as CSS);

export { Container, ControlledInput };
