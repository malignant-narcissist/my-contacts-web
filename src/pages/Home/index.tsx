import { HeaderImage } from './assets';
import { ContactList } from './components/ContactList';
import { SearchBar } from './components/SearchBar';
import { Container, ContentContainer, Header } from './styles';
import { useState } from 'preact/hooks';

const Home = () => {
  const [filterName, setFilterName] = useState<string>();

  return (
    <Container>
      <Header src={HeaderImage} />
      <ContentContainer>
        <SearchBar
          value={filterName}
          onSearch={(e) => {
            if (
              e.target &&
              'value' in e.target &&
              typeof e.target.value === 'string'
            ) {
              setFilterName(e.target.value);
            }
          }}
        />
        <ContactList filterName={filterName} />
      </ContentContainer>
    </Container>
  );
};

export { Home };
