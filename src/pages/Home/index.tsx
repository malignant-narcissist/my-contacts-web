import { HeaderImage } from './assets';
import { ContactList } from './components/ContactList';
import { Container, Header, SearchBar } from './styles';

// const ContactList = {
//   CountingText: () => <>3 contatos</>,
//   Button: () => <>Novo contato</>,
//   OrdenationButton: () => <>Nome</>,
//   Card: {
//     Container: () => <></>,
//     TextContent: {
//       Container: () => <></>,
//       Row: () => <></>,
//     },
//     ActionsContainer: () => <></>,
//     Actions: {
//       Container: () => <></>,
//       Buttons: (({ children }) => <>{children}</>) as React.FC,
//     },
//   },
// };

const Home = () => {
  return (
    <Container>
      <Header src={HeaderImage} />
      <SearchBar>Pesquisar</SearchBar>
      <ContactList />
    </Container>
  );
};

export { Home };
