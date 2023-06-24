import { CSS, getStyled, theme } from '../../../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const formChildrenStyles: CSS = {
  padding: 16,
  border: 'none',
  boxShadow: `0px 4px 10px ${theme.colors.black.value}04`,
  borderRadius: 4,
  fontSize: '$regular',
};

const baseInputStyles: CSS = {
  ...formChildrenStyles,
  color: '$dark',
  '&::placeholder': {
    color: '$gray400',
    fontSize: '$regular',
  },
  '&:focus-visible': {
    outline: '2px solid $primary200',
  },
  variants: {
    hasError: {
      true: {
        outline: '2px solid $tertiary',
        color: '$tertiary',
      },
    },
  },
};

const FormContainer = getStyled<HTMLAttributes<HTMLFormElement>>('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const TextInput = getStyled<
  HTMLAttributes<HTMLInputElement> & { hasError?: boolean }
>('input', baseInputStyles);

const SelectInput = getStyled<
  HTMLAttributes<HTMLSelectElement> & { hasError?: boolean }
>('select', {
  ...baseInputStyles,
  variants: {
    value: {
      ['']: {
        color: '$gray400',
      },
      undefined: {
        color: '$gray400',
      },
    },
  },
});

const SelectOption = getStyled<HTMLAttributes<HTMLOptionElement>>('option', {
  color: '$dark',
});

const AddContactButton = getStyled<HTMLAttributes<HTMLButtonElement>>(
  'button',
  {
    ...formChildrenStyles,
    color: '$white',
    fontWeight: '$bold',
    marginTop: 8,

    variants: {
      disabled: {
        true: {
          background: '$gray300',
        },
        false: {
          background: '$primary200',
        },
      },
    },
  },
);

export {
  FormContainer,
  TextInput,
  SelectInput,
  SelectOption,
  AddContactButton,
};
