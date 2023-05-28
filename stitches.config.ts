import { createStitches } from '@stitches/react';

export const { styled, getCssText, css, globalCss, theme } = createStitches({
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
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    fontSizes: {
      shorter: 12,
      short: 14,
      regular: 16,
      long: 22,
      longer: 24,
    },
  },
});
