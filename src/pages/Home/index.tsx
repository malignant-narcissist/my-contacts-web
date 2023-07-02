import { HeaderImage } from './assets';
import { ContactList } from './components/ContactList';
import { SearchBar } from './components/SearchBar';
import * as styles from './styles';
import { useSignal } from '@preact/signals';

const Home = () => {
  const filterName = useSignal<string | undefined>(undefined);

  return (
    <styles.Container>
      <styles.Header src={HeaderImage} />
      <styles.ContentContainer>
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
      </styles.ContentContainer>
    </styles.Container>
  );
};

export { Home };
