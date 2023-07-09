import { getStyled, theme } from '../../../../stitches.config.ts';
import { ToastData } from '../../utils/toast.ts';
import { HTMLAttributes } from 'preact/compat';

const ToastListContainer = getStyled('div', {
  position: 'fixed',
  zIndex: 2,
  bottom: 48,
  left: '50%',
  transform: 'translateX(-50%)',
});

const ToastBase = {
  Root: getStyled<Pick<ToastData, 'type'> & HTMLAttributes<HTMLButtonElement>>(
    'button',
    {
      padding: '16px 32px',
      borderRadius: 4,
      $$boxShadowColor: `${theme.colors.black.value}25`,
      boxShadow: '0 20px 20px -16px $$boxShadowColor',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',

      variants: {
        type: {
          default: {
            backgroundColor: '$primary200',
          },
          error: {
            backgroundColor: '$tertiary',
          },
          success: {
            backgroundColor: '$green',
          },
        },
      },
    },
  ),
  Text: getStyled('span', {
    color: '$white',
    fontWeight: '$bold',
    fontSize: '$regular',
  }),
};

export { ToastListContainer, ToastBase };
