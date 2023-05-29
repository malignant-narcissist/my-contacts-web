import { HeaderImage } from './assets';
import { ContactList } from './components/ContactList';
import { SearchBar } from './components/SearchBar';
import { Container, ContentContainer, Header } from './styles';

const Home = () => {
  return (
    <Container>
      <Header src={HeaderImage} />
      <ContentContainer>
        <SearchBar />
        <ContactList />
      </ContentContainer>
    </Container>
  );
};

export { Home };
