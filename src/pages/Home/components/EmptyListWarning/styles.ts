import { CSS, styled } from '../../../../../stitches.config';

const cssText = {
  fontSize: '$regular',
  textAlign: 'center',
} as CSS;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16
} as CSS);

const EmptyBoxImage = styled('img', {
  maxWidth: 'fit-content'
} as CSS);

const RegularText = styled('p', {
  ...cssText,
  color: '$gray400',
  fontWeight: '$regular',
} as CSS);

const BoldText = styled('span', {
  ...cssText,
  color: '$primary200',
  fontWeight: '$bold',
} as CSS);

export {
  BoldText,
  Container,
  EmptyBoxImage,
  RegularText,
}
