import * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { JSX } from 'preact/jsx-runtime';

export const { styled, getCssText, css, globalCss, theme, config } =
  createStitches({
    theme: {
      fonts: {
        main: 'Sora, sans-serif',
      },
      colors: {
        dark: '#222222',
        primary100: '#E0E3FF',
        primary200: '#5061FC',
        tertiary: '#FC5050',
        gray400: '#BCBCBC',
        gray300: '#CCCCCC',
        gray200: '#E6E6E6',
        gray100: '#F6F5FC',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontWeights: {
        regular: 400,
        bold: 700,
      },
      fontSizes: {
        shorter: '12px',
        short: '14px',
        regular: '16px',
        long: '22px',
        longer: '24px',
      },
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const getStyled = <Props extends {} = {}>(
  type: keyof JSX.IntrinsicElements | React.FC,
  ...composers: [CSS, ...CSS[]]
) =>
  styled(type, ...composers) as React.FC<
    Props & Stitches.ComponentProps<React.FC>
  >;
