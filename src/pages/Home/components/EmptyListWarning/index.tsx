import { EmptyBoxImage as EmptyBoxImageSource } from '../../assets';
import * as styles from './styles';
import { FunctionComponent } from 'preact';

const EmptyListWarning: FunctionComponent = () => {
  return (
    <styles.Container>
      <styles.EmptyBoxImage src={EmptyBoxImageSource} />
      <styles.RegularText>
        Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
        <styles.BoldText>"Novo contato"</styles.BoldText> acima para cadastrar o
        seu primeiro!
      </styles.RegularText>
    </styles.Container>
  );
};

export { EmptyListWarning };
