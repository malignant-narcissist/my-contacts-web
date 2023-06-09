import { EmptyBoxImage as EmptyBoxImageSource } from '../../assets';
import { BoldText, Container, EmptyBoxImage, RegularText } from './styles';

const EmptyListWarning: React.FC = () => {
  return (
    <Container>
      <EmptyBoxImage src={EmptyBoxImageSource} />
      <RegularText>
        Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
        <BoldText>"Novo contato"</BoldText> acima para cadastrar o seu
        primeiro!
      </RegularText>
    </Container>
  );
};

export { EmptyListWarning };
