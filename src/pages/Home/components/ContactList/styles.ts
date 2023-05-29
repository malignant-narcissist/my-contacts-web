import { CSS, styled, theme } from '../../../../../stitches.config';

const Container = styled('div', {
  borderBottom: `2px solid ${theme.colors.gray400.value}20`,
  borderRadius: 1,
  paddingBottom: 16,
} as CSS);

const HeaderArea = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
} as CSS);

const HeaderAreaContactCountText = styled('span', {
  color: '$dark',
  fontSize: '$longer',
  fontWeight: '$bold',
} as CSS);

const HeaderAreaCreateContactButton = styled('button', {
  borderColor: '$primary200',
  color: '$primary200',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 4,
  background: 'none',
  fontSize: '$regular',
  fontWeight: '$bold',
  padding: '10px 14px',
} as CSS);

export {
  Container,
  HeaderArea,
  HeaderAreaContactCountText,
  HeaderAreaCreateContactButton,
};
