import { getStyled, theme } from '../../../../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const Container = getStyled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Card = getStyled('div', {
  width: 420,
  height: 200,
  backgroundColor: '$white',
  padding: 24,
  borderRadius: 4,
  $$boxShadowColor: `${theme.colors.black.value}04`,
  boxShadow: '0px 4px 10px $$boxShadowColor',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const Title = getStyled('p', {
  color: '$tertiary',
  fontSize: '$long',
  fontWeight: '$bold',
});

const Text = getStyled('span', {
  color: '$dark',
  fontWeight: '$regular',
  fontSize: '$regular',
  flex: 1,
});

const ButtonArea = getStyled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
});

const Button = getStyled<
  { styleType: 'primary' | 'secondary' } & HTMLAttributes<HTMLButtonElement>
>('button', {
  padding: '10px 16px',
  border: 'none',
  borderRadius: 4,
  variants: {
    styleType: {
      secondary: {
        color: '$gray400',
        background: '$white',
      },
      primary: {
        color: '$white',
        background: '$tertiary',
        fontWeight: '$bold',
      },
    },
  },
});

export { Container, Card, Title, Text, Button, ButtonArea };
