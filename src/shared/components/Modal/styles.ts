import { getStyled } from '../../../../stitches.config';

const Container = getStyled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(3.5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export { Container };
