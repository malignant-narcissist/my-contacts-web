import { applyGlobalStyles } from './components/GlobalStyles/styles';
import Routes from './routes';

import { enableMapSet } from 'immer';

enableMapSet();

export const App = () => {
  applyGlobalStyles();

  return <Routes />;
};
