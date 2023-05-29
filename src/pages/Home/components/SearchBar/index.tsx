import { Container, ControlledInput } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <ControlledInput type='text' placeholder='Pesquisar contato...' />
    </Container>
  );
};

export { SearchBar };
