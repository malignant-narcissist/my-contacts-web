import { SearchWithoutResultsImage } from '../../assets';
import * as styles from './styles';
import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';

type Props = {
  filterName?: Signal<string | undefined>;
};

const NoContactsFound: FunctionComponent<Props> = ({ filterName }) => {
  return (
    <styles.Container>
      <styles.Image
        src={SearchWithoutResultsImage}
        alt='Imagem de uma lupa com um X vermelho'
      />
      <styles.Text>
        Nenhum resultado foi encontrado para{' '}
        <styles.BoldText>”{filterName}”</styles.BoldText>.
      </styles.Text>
    </styles.Container>
  );
};

export { NoContactsFound };
