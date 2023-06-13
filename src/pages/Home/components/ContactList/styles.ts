import { getStyled, theme } from '../../../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const Container = getStyled('div');

const HeaderArea = getStyled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `2px solid ${theme.colors.gray400.value}20`,
  borderRadius: 1,
  paddingBottom: 16,
  '&:has(span)': {
    justifyContent: 'space-between',
  },
});

const HeaderAreaContactCountText = getStyled('span', {
  color: '$dark',
  fontSize: '$longer',
  fontWeight: '$bold',
});

const HeaderAreaCreateContactButton = getStyled<
  HTMLAttributes<HTMLButtonElement>
>('button', {
  borderColor: '$primary200',
  color: '$primary200',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 4,
  background: 'none',
  fontSize: '$regular',
  fontWeight: '$bold',
  padding: '10px 14px',
});

const ListArea = getStyled('div', {
  paddingTop: 20,
});

const ListOrderButton = getStyled<
  { orderAsc: 'ASC' | 'DESC' } & HTMLAttributes<HTMLButtonElement>
>('button', {
  display: 'flex',
  gap: 8,
  justifyContent: 'center',
  border: 'none',
  background: 'none',
  color: '$primary200',
  fontSize: '$regular',
  fontWeight: '$bold',

  variants: {
    orderAsc: {
      DESC: {
        '& > img': {
          transform: 'scaleY(-1)',
        },
      },
    },
  },
});

const ListOrderIcon = getStyled<HTMLAttributes<HTMLInputElement>>('img');

const ListCardContainer = getStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  overflowY: 'scroll',
  maxHeight: '55vh',
});

export {
  Container,
  HeaderArea,
  HeaderAreaContactCountText,
  HeaderAreaCreateContactButton,
  ListArea,
  ListCardContainer,
  ListOrderButton,
  ListOrderIcon,
};
