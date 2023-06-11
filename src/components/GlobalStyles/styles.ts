import { globalCss } from '../../../stitches.config';

const applyGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$main',
  },
  body: {
    background: '$gray100',
    fontSize: '$regular',
  },
  button: {
    cursor: 'pointer',
  },
});

export { applyGlobalStyles };
