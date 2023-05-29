import { CSS, styled, theme } from '../../../../../stitches.config';

const Container = styled('div', {} as CSS);

const HeaderArea = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `2px solid ${theme.colors.gray400.value}20`,
  borderRadius: 1,
  paddingBottom: 16,
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

const ListArea = styled('div', {} as CSS);

const ListOrderButton = styled('div', {} as CSS);

const ListOrderIcon = styled('img');

export {
  Container,
  HeaderArea,
  HeaderAreaContactCountText,
  HeaderAreaCreateContactButton,
  ListArea,
  ListOrderButton,
  ListOrderIcon,
};
