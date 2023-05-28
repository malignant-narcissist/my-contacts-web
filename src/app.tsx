import { applyGlobalStyles } from './components/GlobalStyles/styles';
import Routes from './routes';



export const App = () => {
  applyGlobalStyles();

  return <Routes />;
};
