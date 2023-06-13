import { getStyled } from '../../../../../stitches.config';
import { HTMLAttributes } from 'preact/compat';

const Image = getStyled<HTMLAttributes<HTMLImageElement>>('img');

const Container = getStyled('div', {});

const Text = getStyled('p', {});

const BoldText = getStyled('span', {});

export { BoldText, Container, Image, Text };
