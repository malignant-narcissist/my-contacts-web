import { HeaderImage } from './assets';
import { ContactList } from './components/ContactList';
import { SearchBar } from './components/SearchBar';
import { Container, Header } from './styles';

const Home = () => {
  return (
    <Container>
      <Header src={HeaderImage} />
      <SearchBar />
      <ContactList />
    </Container>
  );
};

export { Home };
