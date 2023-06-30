import { SearchWithoutResultsImage } from '../../assets';
import { BoldText, Container, Image, Text } from './styles';
import { Signal } from '@preact/signals';
import React from 'preact/compat';

type Props = {
  filterName?: Signal<string | undefined>;
};

const NoContactsFound: React.FC<Props> = ({ filterName }) => {
  return (
    <Container>
      <Image
        src={SearchWithoutResultsImage}
        alt='Imagem de uma lupa com um X vermelho'
      />
      <Text>
        Nenhum resultado foi encontrado para <BoldText>”{filterName}”</BoldText>
        .
      </Text>
    </Container>
  );
};

export { NoContactsFound };
