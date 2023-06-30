import { HeaderImage } from './assets';
import { ContactList } from './components/ContactList';
import { SearchBar } from './components/SearchBar';
import { Container, ContentContainer, Header } from './styles';
import { useSignal } from '@preact/signals';

const Home = () => {
  const filterName = useSignal<string | undefined>(undefined);

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
              filterName.value = e.target.value;
            }
          }}
        />
        <ContactList filterName={filterName} />
      </ContentContainer>
    </Container>
  );
};

export { Home };
