import { applyGlobalStyles } from './components/GlobalStyles/styles';
import Routes from './routes';

import { ModalProvider } from './shared/hooks/useModal';
import { enableMapSet } from 'immer';

enableMapSet();

export const App = () => {
  applyGlobalStyles();

  return (
    <ModalProvider>
      <Routes />
    </ModalProvider>
  );
};
